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
        className="w-full border border-[var(--color-border)] rounded-[var(--radius-md)] px-4 py-2.5 text-[var(--color-text-primary)] bg-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:border-transparent placeholder:text-[var(--color-text-muted)]"
      />
    </Autocomplete>
  ) : (
    <input
      type="text"
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
      placeholder={placeholder}
      className="w-full border border-[var(--color-border)] rounded-[var(--radius-md)] px-4 py-2.5 text-[var(--color-text-primary)] bg-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:border-transparent placeholder:text-[var(--color-text-muted)]"
    />
  );
}