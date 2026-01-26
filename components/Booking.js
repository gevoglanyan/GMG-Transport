import React, { useState, useRef, useEffect } from 'react';
import InputMask from 'react-input-mask';
import AddressInput from './AddressInput';
import dynamic from 'next/dynamic';

const MapPreview = dynamic(() => import('./MapPreview'), { ssr: false });

const vehicleOptions = [
  { id: 'escalade', name: 'Cadillac Escalade ESV', rate: 150 },
  { id: 'yukon-evolution', name: 'GMC Yukon XL (Evolution)', rate: 150 },
  { id: 'yukon-premium', name: 'GMC Yukon XL (Premium)', rate: 150 },
  { id: 'suburban', name: 'Chevrolet Suburban', rate: 125 },
  { id: 'standard-yukon', name: 'GMC Yukon XL (Standard)', rate: 125 }
];

const Booking = () => {
  const [step, setStep] = useState(1);
  const [pickupLocation, setPickupLocation] = useState('');
  const [dropoffLocation, setDropoffLocation] = useState('');
  const [stops, setStops] = useState([]);
  const [pickupDate, setPickupDate] = useState('');
  const [pickupTime, setPickupTime] = useState('');
  const [travelers, setTravelers] = useState(1);
  const [kids, setKids] = useState(0);
  const [bags, setBags] = useState(0);
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [loading, setLoading] = useState(false);
  const [pickupType, setPickupType] = useState('address');
  const [dropoffType, setDropoffType] = useState('address');
  const [flightNumber, setFlightNumber] = useState('');
  const [arrivalTime, setArrivalTime] = useState('');
  const [dropAirline, setDropAirline] = useState('');
  const [dropFlightNumber, setDropFlightNumber] = useState('');
  const [dropArrivalTime, setDropArrivalTime] = useState('');
  const [bookingType, setBookingType] = useState('transfer'); 
  const [hours, setHours] = useState(2);
  const [airline, setAirline] = useState('');
  const [customAirline, setCustomAirline] = useState(''); 

  const bookingFormRef = useRef(null);

  const scrollToCenter = () => {
    setTimeout(() => {
      if (bookingFormRef.current) {
        const formTop = bookingFormRef.current.offsetTop;
        const formHeight = bookingFormRef.current.offsetHeight;
        const windowHeight = window.innerHeight;
        
        const isMobile = window.innerWidth < 768;
        
        let scrollPosition;
        if (isMobile) {
          scrollPosition = formTop - 80;
        } else {
          scrollPosition = formTop - (windowHeight / 2) + (formHeight / 2);
        }
        
        if ('scrollBehavior' in document.documentElement.style) {
          window.scrollTo({
            top: Math.max(0, scrollPosition),
            behavior: 'smooth'
          });
        } else {
          window.scrollTo(0, Math.max(0, scrollPosition));
        }
      }
    }, 100);
  };

  useEffect(() => {
    scrollToCenter();
  }, [step]);

  const addStop = () => setStops([...stops, '']);
  const updateStop = (index, value) => {
    const newStops = [...stops];
    newStops[index] = value;
    setStops(newStops);
  };
  const removeStop = (index) => {
    const newStops = stops.filter((_, i) => i !== index);
    setStops(newStops);
  };

  const handleContinue = () => {
    if (step === 1) {
      if (!pickupLocation || !dropoffLocation || !pickupDate || !pickupTime) {
        alert("Please fill in all required fields.");
        return;
      }
      setStep(2);
    } else if (step === 2) {
      if (!selectedVehicle) {
        alert("Please select a vehicle.");
        return;
      }
      setStep(3);
    } else if (step === 3) {
      handleSubmit();
    }
  };

  const handleSubmit = async () => {
    if (!name || !email || !phone) {
      alert("Please complete all contact fields.");
      return;
    }

    const bookingHours = bookingType === 'hourly' ? Math.max(2, hours) : 1;

    setLoading(true);
    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          vehicle: selectedVehicle.name,
          rate: selectedVehicle.rate,
          hours: bookingHours,
          date: pickupDate,
          email,
          phone,
        }),
      });

      const data = await response.json();

      if (!response.ok || !data?.url) throw new Error('Checkout failed');
      alert("Checkout is currently disabled. We'll contact you soon to confirm your reservation.");

    } catch (err) {
      console.error(err);
      alert("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div ref={bookingFormRef} className="card mt-10 max-w-[1400px] mx-auto animate-fade-in">
      <div className="mb-8">
        <div className="flex items-center justify-between text-xs sm:text-sm font-medium border-b border-[var(--color-border)] pb-4">
          <div className={`flex items-center ${step === 1 ? "text-[var(--color-primary)]" : "text-[var(--color-text-muted)]"}`}>
            <span className={`w-8 h-8 rounded-full flex items-center justify-center mr-2 ${step === 1 ? "bg-[var(--color-accent)] text-[var(--color-primary)]" : "bg-gray-200"}`}>1</span>
            <span className="hidden sm:inline">WHERE & WHEN</span>
            <span className="sm:hidden">Location</span>
          </div>
          <div className={`flex items-center ${step === 2 ? "text-[var(--color-primary)]" : "text-[var(--color-text-muted)]"}`}>
            <span className={`w-8 h-8 rounded-full flex items-center justify-center mr-2 ${step === 2 ? "bg-[var(--color-accent)] text-[var(--color-primary)]" : "bg-gray-200"}`}>2</span>
            <span className="hidden sm:inline">SELECT VEHICLE</span>
            <span className="sm:hidden">Vehicle</span>
          </div>
          <div className={`flex items-center ${step === 3 ? "text-[var(--color-primary)]" : "text-[var(--color-text-muted)]"}`}>
            <span className={`w-8 h-8 rounded-full flex items-center justify-center mr-2 ${step === 3 ? "bg-[var(--color-accent)] text-[var(--color-primary)]" : "bg-gray-200"}`}>3</span>
            <span className="hidden sm:inline">PAYMENT & CONFIRM</span>
            <span className="sm:hidden">Confirm</span>
          </div>
        </div>
      </div>

      {step === 1 && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="space-y-5">
            <div className="flex justify-center gap-2 mb-4">
              {['Transfer', 'Hourly'].map((type) => (
                <button
                  key={type}
                  onClick={() => setBookingType(type.toLowerCase())}
                  className={`px-6 py-2.5 text-sm font-medium rounded-full border-2 transition-all duration-200 ${
                    bookingType === type.toLowerCase()
                      ? 'bg-[var(--color-primary)] text-white border-[var(--color-primary)] shadow-md'
                      : 'bg-white text-[var(--color-text-primary)] border-[var(--color-border-hover)] hover:border-[var(--color-primary)]'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>

            {bookingType === 'hourly' && (
              <div className="card bg-[var(--color-bg)] text-center">
                <label className="block text-sm font-semibold mb-2">Number of Hours</label>
                <input
                  type="number"
                  min="2"
                  value={hours}
                  onChange={(e) => setHours(Math.max(2, Number(e.target.value)))}
                  className="w-32 mx-auto"
                />
                <p className="text-xs text-[var(--color-text-muted)] mt-2">Minimum 2 hours</p>
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-4">
              <div className="w-full sm:w-1/2">
                <label className="block text-sm font-semibold mb-2 text-[var(--color-text-primary)]">
                  Pickup Date <span className="text-[var(--color-error)]">*</span>
                </label>
                <input
                  type="date"
                  value={pickupDate}
                  onChange={e => setPickupDate(e.target.value)}
                  className="w-full"
                />
              </div>
              <div className="w-full sm:w-1/2">
                <label className="block text-sm font-semibold mb-2 text-[var(--color-text-primary)]">
                  Pickup Time <span className="text-[var(--color-error)]">*</span>
                </label>
                <input
                  type="time"
                  value={pickupTime}
                  onChange={e => setPickupTime(e.target.value)}
                  className="w-full"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2 text-[var(--color-text-primary)]">Pickup Type</label>
              <div className="flex justify-center gap-2">
                {['Address', 'Airport'].map(type => (
                  <button
                    key={type}
                    className={`text-sm border-2 px-4 py-2 rounded-full font-medium transition-all duration-200 ${
                      pickupType === type.toLowerCase() 
                        ? 'bg-[var(--color-primary)] text-white border-[var(--color-primary)] shadow-md' 
                        : 'bg-white text-[var(--color-text-primary)] border-[var(--color-border-hover)] hover:border-[var(--color-primary)]'
                    }`}
                    onClick={() => setPickupType(type.toLowerCase())}
                  >{type}</button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2 text-[var(--color-text-primary)]">
                Pickup Location <span className="text-[var(--color-error)]">*</span>
              </label>
              <AddressInput
                value={pickupLocation}
                onChange={setPickupLocation}
                placeholder="Enter Pickup Location"
              />
            </div>

            {pickupType === 'airport' && (
              <div className="card bg-[var(--color-bg)] space-y-4">
                <h4 className="font-semibold text-[var(--color-primary)]">Flight Details</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Airline</label>
                    <select
                      value={airline}
                      onChange={(e) => setAirline(e.target.value)}
                      className="w-full"
                    >
                      <option value="">Select Airline</option>
                      <option value="American Airlines">American Airlines</option>
                      <option value="Delta">Delta</option>
                      <option value="United">United</option>
                      <option value="Southwest">Southwest</option>
                      <option value="JetBlue">JetBlue</option>
                      <option value="Alaska">Alaska</option>
                      <option value="Spirit">Spirit</option>
                      <option value="Frontier">Frontier</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  {airline === 'Other' && (
                    <div>
                      <label className="block text-sm font-medium mb-1">Airline Name</label>
                      <input
                        type="text"
                        value={customAirline}
                        onChange={(e) => setCustomAirline(e.target.value)}
                        placeholder="Enter airline name"
                        className="w-full"
                      />
                    </div>
                  )}

                  <div>
                    <label className="block text-sm font-medium mb-1">Flight Number</label>
                    <input
                      type="text"
                      value={flightNumber}
                      onChange={e => setFlightNumber(e.target.value)}
                      placeholder="e.g. AA123"
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">Arrival Time</label>
                    <input
                      type="time"
                      value={arrivalTime}
                      onChange={e => setArrivalTime(e.target.value)}
                      className="w-full"
                    />
                  </div>
                </div>
              </div>
            )}

            <div>
              <label className="block text-sm font-semibold mb-2 text-[var(--color-text-primary)]">Additional Stops (Optional)</label>
              {stops.map((stop, idx) => (
                <div key={idx} className="flex gap-2 mb-2">
                  <AddressInput
                    value={stop}
                    onChange={(value) => updateStop(idx, value)}
                    placeholder={`Stop ${idx + 1}`}
                  />
                  <button
                    onClick={() => removeStop(idx)}
                    className="px-4 py-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-colors"
                  >
                    ✕
                  </button>
                </div>
              ))}
              <button
                onClick={addStop}
                className="text-sm text-[var(--color-accent)] hover:text-[var(--color-accent-hover)] font-medium transition-colors"
              >
                + Add Stop
              </button>
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2 text-[var(--color-text-primary)]">Dropoff Type</label>
              <div className="flex justify-center gap-2">
                {['Address', 'Airport'].map(type => (
                  <button
                    key={type}
                    className={`text-sm border-2 px-4 py-2 rounded-full font-medium transition-all duration-200 ${
                      dropoffType === type.toLowerCase() 
                        ? 'bg-[var(--color-primary)] text-white border-[var(--color-primary)] shadow-md' 
                        : 'bg-white text-[var(--color-text-primary)] border-[var(--color-border-hover)] hover:border-[var(--color-primary)]'
                    }`}
                    onClick={() => setDropoffType(type.toLowerCase())}
                  >{type}</button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2 text-[var(--color-text-primary)]">
                Dropoff Location <span className="text-[var(--color-error)]">*</span>
              </label>
              <AddressInput
                value={dropoffLocation}
                onChange={setDropoffLocation}
                placeholder="Enter Dropoff Location"
              />
            </div>

            {dropoffType === 'airport' && (
              <div className="card bg-[var(--color-bg)] space-y-4">
                <h4 className="font-semibold text-[var(--color-primary)]">Departure Flight Details</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Airline</label>
                    <select
                      value={dropAirline}
                      onChange={(e) => setDropAirline(e.target.value)}
                      className="w-full"
                    >
                      <option value="">Select Airline</option>
                      <option value="American Airlines">American Airlines</option>
                      <option value="Delta">Delta</option>
                      <option value="United">United</option>
                      <option value="Southwest">Southwest</option>
                      <option value="JetBlue">JetBlue</option>
                      <option value="Alaska">Alaska</option>
                      <option value="Spirit">Spirit</option>
                      <option value="Frontier">Frontier</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">Flight Number</label>
                    <input
                      type="text"
                      value={dropFlightNumber}
                      onChange={e => setDropFlightNumber(e.target.value)}
                      placeholder="e.g. AA123"
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">Departure Time</label>
                    <input
                      type="time"
                      value={dropArrivalTime}
                      onChange={e => setDropArrivalTime(e.target.value)}
                      className="w-full"
                    />
                  </div>
                </div>
              </div>
            )}

            <div className="card bg-[var(--color-bg)]">
              <h4 className="font-semibold text-[var(--color-primary)] mb-4 text-center">Passenger Details</h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 gap-y-6">
                {[{ label: 'Travellers', value: travelers, setter: setTravelers, min: 1 },
                  { label: 'Kids', value: kids, setter: setKids, min: 0 },
                  { label: 'Bags', value: bags, setter: setBags, min: 0 }]
                  .map(({ label, value, setter, min }) => (
                    <div key={label} className="text-center">
                      <label className="text-sm font-medium block mb-2">{label}</label>
                      <div className="flex items-center justify-center border-2 border-[var(--color-border)] rounded-lg overflow-hidden max-w-[10rem] mx-auto">
                        <button
                          onClick={() => setter(Math.max(min, value - 1))}
                          className="px-4 py-2 bg-[var(--color-bg)] hover:bg-[var(--color-border)] text-lg transition-colors"
                        >
                          −
                        </button>
                        <span className="px-4 py-2 text-base w-full font-semibold">{value}</span>
                        <button
                          onClick={() => setter(value + 1)}
                          className="px-4 py-2 bg-[var(--color-bg)] hover:bg-[var(--color-border)] text-lg transition-colors"
                        >
                          +
                        </button>
                      </div>
                    </div>
                ))}
              </div>
            </div>

            <div className="flex justify-between mt-6 pt-6 border-t border-[var(--color-border)]">
              <button className="btn-outline">Cancel</button>
              <button
                onClick={handleContinue}
                className="btn-primary"
              >
                Continue to Vehicle Selection
              </button>
            </div>
          </div>

          <div className="bg-[var(--color-bg)] p-4 rounded-xl border-2 border-[var(--color-border)] h-[40rem] flex items-center justify-center">
            <div className="w-full h-full">
              <MapPreview
                pickupAddress={pickupLocation?.trim() || null}
                dropoffAddress={dropoffLocation?.trim() || null}
                stops={stops}
              />
            </div>
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="space-y-8 max-w-4xl mx-auto">
          <div className="text-center">
            <h3 className="heading-sm mb-2">Select Your Vehicle</h3>
            <p className="text-body">
              Choose a vehicle that suits your needs. All rates are per hour with a 2-hour minimum.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {vehicleOptions.map(vehicle => (
              <div
                key={vehicle.id}
                onClick={() => {
                  setSelectedVehicle(vehicle);
                  scrollToCenter();
                }}
                className={`card cursor-pointer transition-all duration-300 hover:scale-[1.02] ${
                  selectedVehicle?.id === vehicle.id 
                    ? 'border-2 border-[var(--color-accent)] shadow-xl ring-2 ring-[var(--color-accent)] ring-opacity-20' 
                    : 'hover:border-[var(--color-primary)]'
                }`}
              >
                {selectedVehicle?.id === vehicle.id && (
                  <div className="absolute top-4 right-4 w-8 h-8 bg-[var(--color-accent)] rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-[var(--color-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                )}
                <div className="font-bold text-lg text-[var(--color-primary)] mb-1">{vehicle.name}</div>
                <div className="text-2xl font-bold text-[var(--color-accent)] mb-2">${vehicle.rate}<span className="text-sm text-[var(--color-text-secondary)]">/hr</span></div>
                {vehicle.description && (
                  <div className="text-sm text-[var(--color-text-secondary)] mt-2">{vehicle.description}</div>
                )}
              </div>
            ))}
          </div>

          {selectedVehicle && (
            <div className="card bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-light)] text-white text-center">
              <p className="text-lg mb-1">Selected Vehicle</p>
              <p className="text-2xl font-bold">{selectedVehicle.name}</p>
              <p className="text-[var(--color-accent)] text-xl font-semibold mt-2">${selectedVehicle.rate}/hour</p>
            </div>
          )}

          <div className="flex justify-between pt-6 border-t border-[var(--color-border)]">
            <button
              onClick={() => setStep(1)}
              className="btn-outline"
            >
              Back
            </button>

            <button
              onClick={handleContinue}
              disabled={!selectedVehicle}
              className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Continue to Checkout
            </button>
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="space-y-6 max-w-xl mx-auto">
          <div className="text-center">
            <h3 className="heading-sm mb-2">Contact Information</h3>
            <p className="text-body">
              We'll use this information to confirm your reservation and send updates.
            </p>
          </div>

          <div className="space-y-5">
            <div>
              <label className="block text-sm font-semibold mb-2 text-[var(--color-text-primary)]" htmlFor="fullName">
                Full Name <span className="text-[var(--color-error)]">*</span>
              </label>
              <input
                id="fullName"
                type="text"
                placeholder="John Doe"
                value={name}
                onChange={e => setName(e.target.value)}
                className="w-full"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2 text-[var(--color-text-primary)]" htmlFor="email">
                Email Address <span className="text-[var(--color-error)]">*</span>
              </label>
              <input
                id="email"
                type="email"
                placeholder="john@example.com"
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="w-full"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2 text-[var(--color-text-primary)]" htmlFor="phone">
                Phone Number <span className="text-[var(--color-error)]">*</span>
              </label>
              <InputMask
                mask="999-999-9999"
                value={phone}
                onChange={e => setPhone(e.target.value)}
                maskChar={null}
              >
                {(inputProps) => (
                  <input
                    {...inputProps}
                    id="phone"
                    type="tel"
                    placeholder="424-333-2293"
                    className="w-full"
                  />
                )}
              </InputMask>
            </div>
          </div>

          <div className="card bg-[var(--color-bg)] space-y-3">
            <h4 className="font-semibold text-[var(--color-primary)] text-center mb-3">Booking Summary</h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-[var(--color-text-secondary)]">Vehicle:</span>
                <span className="font-semibold">{selectedVehicle?.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[var(--color-text-secondary)]">Rate:</span>
                <span className="font-semibold text-[var(--color-accent)]">${selectedVehicle?.rate}/hour</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[var(--color-text-secondary)]">Date:</span>
                <span className="font-semibold">{pickupDate}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[var(--color-text-secondary)]">Time:</span>
                <span className="font-semibold">{pickupTime}</span>
              </div>
              {bookingType === 'hourly' && (
                <div className="flex justify-between">
                  <span className="text-[var(--color-text-secondary)]">Duration:</span>
                  <span className="font-semibold">{hours} hours</span>
                </div>
              )}
            </div>
          </div>

          <div className="flex justify-between pt-6 border-t border-[var(--color-border)]">
            <button
              onClick={() => setStep(2)}
              className="btn-outline"
            >
              Back
            </button>

            <button
              onClick={handleContinue}
              disabled={loading}
              className="btn-accent disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                <span className="flex items-center">
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Processing…
                </span>
              ) : 'Reserve with Stripe'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Booking;