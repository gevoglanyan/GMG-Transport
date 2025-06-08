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
    return <p className="text-sm text-gray-600">Loading map…</p>;
  }

  if (!pickupCoords && !dropoffCoords) {
    return (
      <div className="flex items-center justify-center h-full w-full">
        <p className="text-sm text-gray-600 text-center">
          Enter pickup and dropoff to preview the route.
        </p>
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
    <div className="w-full h-full rounded overflow-hidden">
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
        }}
        onLoad={(map) => (mapRef.current = map)}
      >
        {pickupCoords && <Marker position={pickupCoords} label="P" />}
        {waypointCoords.map((coord, idx) => (
          <Marker key={`stop-${idx}`} position={coord} label={`${idx + 1}`} />
        ))}
        {dropoffCoords && <Marker position={dropoffCoords} label="D" />}
        {directionsResult && (
          <DirectionsRenderer
            directions={directionsResult}
            options={{
              suppressMarkers: true,
              polylineOptions: {
                strokeColor: 'blue',
                strokeOpacity: 0.8,
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
