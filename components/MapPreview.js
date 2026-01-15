import React, { useEffect, useRef, useState } from 'react';
import {
  GoogleMap,
  Marker,
  DirectionsRenderer,
  useJsApiLoader,
} from '@react-google-maps/api';

const libraries = ['places'];

const MapPreview = ({ pickupAddress, dropoffAddress, stops = [] }) => {
  const [pickupCoords, setPickupCoords] = useState(null);
  const [dropoffCoords, setDropoffCoords] = useState(null);
  const [waypointCoords, setWaypointCoords] = useState([]);
  const [directionsResult, setDirectionsResult] = useState(null);
  const mapRef = useRef(null);

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    libraries,
    version: 'weekly',
  });

  const geocodeAddress = (address) => {
    return new Promise((resolve) => {
      if (!window.google || !address?.trim()) return resolve(null);
      const geocoder = new window.google.maps.Geocoder();
      geocoder.geocode(
        {
          address,
          componentRestrictions: {
            administrativeArea: 'CA',
            country: 'US',
          },
        },
        (results, status) => {
          if (status === 'OK' && results[0]) {
            const formatted = results[0].formatted_address;
            if (!formatted.includes('CA')) {
              console.warn('Geocoded result is not in California:', formatted);
              return resolve(null);
            }
            const loc = results[0].geometry.location;
            resolve({ lat: loc.lat(), lng: loc.lng() });
          } else {
            console.warn(`Geocoding failed for "${address}" - status: ${status}`);
            resolve(null);
          }
        }
      );
    });
  };

  useEffect(() => {
    if (!isLoaded) return;

    const fetchCoordinatesAndRoute = async () => {
      const pickup = pickupAddress ? await geocodeAddress(pickupAddress) : null;
      const dropoff = dropoffAddress ? await geocodeAddress(dropoffAddress) : null;
      const filteredStops = stops.filter((stop) => stop?.trim() !== '');
      const geocodedStops = await Promise.all(filteredStops.map(geocodeAddress));
      const validWaypoints = geocodedStops.filter(
        (wp) => wp && typeof wp.lat === 'number' && typeof wp.lng === 'number'
      );

      setPickupCoords(pickup);
      setDropoffCoords(dropoff);
      setWaypointCoords(validWaypoints);

      console.log('Pickup:', pickup);
      console.log('Dropoff:', dropoff);
      console.log('Waypoints:', validWaypoints);

      if (pickup && dropoff) {
        const directionsService = new window.google.maps.DirectionsService();
        const hasWaypoints = validWaypoints.length > 0;

        const request = {
          origin: new window.google.maps.LatLng(pickup.lat, pickup.lng),
          destination: new window.google.maps.LatLng(dropoff.lat, dropoff.lng),
          travelMode: window.google.maps.TravelMode.DRIVING,
        };

        if (hasWaypoints) {
          request.waypoints = validWaypoints.map((coord) => ({
            location: new window.google.maps.LatLng(coord.lat, coord.lng),
            stopover: true,
          }));
        }

        directionsService.route(request, (result, status) => {
          if (status === 'OK') {
            setDirectionsResult(result);
          } else {
            console.error('Directions request failed:', status);
            setDirectionsResult(null);
          }
        });
      } else {
        setDirectionsResult(null);
      }
    };

    fetchCoordinatesAndRoute();
  }, [pickupAddress, dropoffAddress, stops, isLoaded]);

  useEffect(() => {
    if (!directionsResult || !mapRef.current) return;

    const bounds = new window.google.maps.LatLngBounds();
    directionsResult.routes[0].overview_path.forEach((point) =>
      bounds.extend(point)
    );
    mapRef.current.fitBounds(bounds);
  }, [directionsResult]);

  if (!isLoaded) {
    return (
      <div className="flex items-center justify-center h-full w-full">
        <div className="text-center">
          <svg className="animate-spin h-8 w-8 text-[var(--color-accent)] mx-auto mb-2" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          <p className="text-sm text-[var(--color-text-muted)]">Loading map…</p>
        </div>
      </div>
    );
  }

  if (!pickupCoords && !dropoffCoords) {
    return (
      <div className="flex items-center justify-center h-full w-full bg-[var(--color-bg)] rounded-lg">
        <div className="text-center p-8">
          <div className="w-16 h-16 bg-[var(--color-accent)] bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-[var(--color-accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
            </svg>
          </div>
          <p className="text-sm text-[var(--color-text-secondary)] font-medium">
            Enter pickup and dropoff locations
          </p>
          <p className="text-xs text-[var(--color-text-muted)] mt-1">
            Your route will preview here
          </p>
        </div>
      </div>
    );
  }

  const center =
    pickupCoords && dropoffCoords
      ? {
          lat: (pickupCoords.lat + dropoffCoords.lat) / 2,
          lng: (pickupCoords.lng + dropoffCoords.lng) / 2,
        }
      : pickupCoords || dropoffCoords;

  return (
    <div className="w-full h-full rounded-xl overflow-hidden border-2 border-[var(--color-border)] shadow-md">
      <GoogleMap
        mapContainerStyle={{ height: '100%', width: '100%' }}
        center={center}
        zoom={12}
        options={{
          fullscreenControl: true,
          streetViewControl: false,
          mapTypeControl: true,
          mapTypeControlOptions: {
            mapTypeIds: ['roadmap', 'satellite', 'hybrid'],
          },
          styles: [
            {
              featureType: 'poi',
              elementType: 'labels',
              stylers: [{ visibility: 'off' }]
            }
          ]
        }}
        onLoad={(map) => (mapRef.current = map)}
      >
        {pickupCoords && (
          <Marker 
            position={pickupCoords} 
            label={{
              text: "P",
              color: "white",
              fontWeight: "bold",
              fontSize: "14px"
            }}
            icon={{
              path: window.google.maps.SymbolPath.CIRCLE,
              fillColor: '#0A0E27',
              fillOpacity: 1,
              strokeColor: '#D4AF37', 
              strokeWeight: 3,
              scale: 12,
            }}
          />
        )}
        {waypointCoords.map((coord, idx) => (
          <Marker 
            key={`stop-${idx}`} 
            position={coord} 
            label={{
              text: `${idx + 1}`,
              color: "white",
              fontWeight: "bold",
              fontSize: "12px"
            }}
            icon={{
              path: window.google.maps.SymbolPath.CIRCLE,
              fillColor: '#475569', 
              fillOpacity: 1,
              strokeColor: '#D4AF37', 
              strokeWeight: 2,
              scale: 10,
            }}
          />
        ))}
        {dropoffCoords && (
          <Marker 
            position={dropoffCoords} 
            label={{
              text: "D",
              color: "white",
              fontWeight: "bold",
              fontSize: "14px"
            }}
            icon={{
              path: window.google.maps.SymbolPath.CIRCLE,
              fillColor: '#DC2626',
              fillOpacity: 1,
              strokeColor: '#D4AF37', 
              strokeWeight: 3,
              scale: 12,
            }}
          />
        )}
        {directionsResult && (
          <DirectionsRenderer
            directions={directionsResult}
            options={{
              suppressMarkers: true,
              polylineOptions: {
                strokeColor: '#D4AF37', 
                strokeOpacity: 0.9,
                strokeWeight: 5,
              },
            }}
          />
        )}
      </GoogleMap>
    </div>
  );
};

export default MapPreview;