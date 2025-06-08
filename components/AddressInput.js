import React, { useRef, useState } from 'react';
import { Autocomplete, useJsApiLoader } from '@react-google-maps/api';

const libraries = ['places'];

export default function AddressInput({ value, onChange, placeholder }) {
  const autocompleteRef = useRef(null);
  const [inputValue, setInputValue] = useState(value || '');

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    libraries,
  });

  const handlePlaceChanged = () => {
    const place = autocompleteRef.current.getPlace();
    const address = place?.formatted_address || place?.name;
    if (address) {
      setInputValue(address);
      onChange(address); 
    }
  };

  return isLoaded ? (
    <Autocomplete
      onLoad={(ref) => (autocompleteRef.current = ref)}
      onPlaceChanged={handlePlaceChanged}
    >
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)} 
        placeholder={placeholder}
        className="border px-3 py-2 rounded w-full"
      />
    </Autocomplete>
  ) : (
    <input
      type="text"
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
      placeholder={placeholder}
      className="border px-3 py-2 rounded w-full"
    />
  );
}
