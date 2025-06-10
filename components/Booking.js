import React, { useState } from 'react';
import InputMask from 'react-input-mask';
import AddressInput from './AddressInput';
import dynamic from 'next/dynamic';

const MapPreview = dynamic(() => import('./MapPreview'), { ssr: false });

const vehicleOptions = [
  { id: 'escalade', name: 'Cadillac Escalade ESV', rate: 150 },
  { id: 'premium-yukon', name: 'GMC Yukon XL (Premium)', rate: 150 },
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
      // window.location.href = data.url;
      alert("Checkout is currently disabled. We’ll contact you soon to confirm your reservation.");

    } catch (err) {
      console.error(err);
      alert("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white mt-10 p-4 sm:p-6 rounded shadow w-full max-w-[1400px] mx-auto">
      <div className="mb-6">
        <div className="flex flex-nowrap items-center justify-between overflow-x-auto no-scrollbar text-sm text-gray-500 font-medium border-b pb-4 gap-4 sm:gap-6">
          <span className={step === 1 ? "text-black font-semibold whitespace-nowrap" : "whitespace-nowrap"}>
            1. WHERE & WHEN
          </span>
          <span className={step === 2 ? "text-black font-semibold whitespace-nowrap" : "whitespace-nowrap"}>
            2. SELECT VEHICLE
          </span>
          <span className={step === 3 ? "text-black font-semibold whitespace-nowrap" : "whitespace-nowrap"}>
            3. PAYMENT & CONFIRM
          </span>
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
                  className={`px-4 py-2 text-sm rounded-full border ${
                    bookingType === type.toLowerCase()
                      ? 'bg-black text-white'
                      : 'bg-white text-black hover:bg-gray-100'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>

            {bookingType === 'hourly' && (
              <div className="flex justify-center">
                <div className="text-left">
                  <br />
                  <label className="block text-sm font-medium mb-1 text-center">Number of Hours</label>
                  <input
                    type="number"
                    min="2"
                    value={hours}
                    onChange={(e) => setHours(Math.max(2, Number(e.target.value)))}
                    className="w-32 border px-3 py-2 rounded mx-auto block"
                  />
                </div>
              </div>
            )}

           <div className="flex flex-col sm:flex-row gap-4">
              <div className="w-full sm:w-1/2">
                <label className="block text-sm font-medium">Pickup Date</label>
                <input
                  type="date"
                  value={pickupDate}
                  onChange={e => setPickupDate(e.target.value)}
                  className="w-full border px-3 py-2 rounded"
                />
              </div>
              <div className="w-full sm:w-1/2">
                <label className="block text-sm font-medium">Pickup Time</label>
                <input
                  type="time"
                  value={pickupTime}
                  onChange={e => setPickupTime(e.target.value)}
                  className="w-full border px-3 py-2 rounded"
                />
              </div>
            </div>

            <br/>

            <div>
              <label className="text-sm font-medium">Pickup Type</label>
              <div className="flex justify-center gap-2 mt-1">
                {['Address', 'Airport'].map(type => (
                  <button
                    key={type}
                    className={`text-sm border px-3 py-1 rounded-full ${pickupType === type.toLowerCase() ? 'bg-black text-white' : 'bg-white hover:bg-gray-100'}`}
                    onClick={() => setPickupType(type.toLowerCase())}
                  >{type}</button>
                ))}
              </div>
            </div>

            <AddressInput
              value={pickupLocation}
              onChange={setPickupLocation}
              placeholder="Enter Pickup Location"
            />

            {pickupType === 'airport' && (
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Airline</label>
                  <select
                    value={airline}
                    onChange={(e) => setAirline(e.target.value)}
                    className="w-full border px-3 py-2 rounded"
                  >
                    <option value=""></option>
                    <option value="American ">American</option>
                    <option value="Delta ">Delta</option>
                    <option value="United ">United </option>
                    <option value="Southwest ">Southwest </option>
                    <option value="JetBlue">JetBlue</option>
                    <option value="Alaska">Alaska </option>
                    <option value="Spirit">Spirit </option>
                    <option value="Frontier">Frontier </option>
                    <option value="Other">Other</option>
                  </select>

                  {airline === 'Other' && (
                    <input
                      type="text"
                      placeholder="Enter Airline"
                      value={customAirline}
                      onChange={(e) => setCustomAirline(e.target.value)}
                      className="mt-2 w-full border px-3 py-2 rounded"
                    />
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium">Flight #</label>
                  <input
                    type="text"
                    value={flightNumber}
                    onChange={e => setFlightNumber(e.target.value)}
                    className="w-full border px-3 py-2 rounded"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium">Arrival Time</label>
                  <input
                    type="time"
                    value={arrivalTime}
                    onChange={e => setArrivalTime(e.target.value)}
                    className="w-full border px-3 py-2 rounded"
                  />
                </div>
              </div>
            )}

            {stops.map((stop, index) => (
              <div key={index} className="flex items-center gap-2">
                <div className="w-full max-w-md">
                  <AddressInput
                    value={stop}
                    onChange={(val) => updateStop(index, val)}
                    placeholder={`Stop #${index + 1}`}
                  />
                </div>
                <button
                  onClick={() => removeStop(index)}
                  className="text-sm font-bold text-black hover:underline"
                >
                  Remove
                </button>
              </div>
            ))}

            <br/>

            {bookingType === 'hourly' && (
              <button
                type="button"
                onClick={addStop}
                className="mt-2 text-sm font-bold text-black hover:underline"
              >
                + ADD A STOP

                <br /> <br />
              </button>
            )}

            <div>
              <label className="text-sm font-medium">Dropoff Type</label>
              <div className="flex justify-center gap-2 mt-1">
                {['Address', 'Airport'].map(type => (
                  <button
                    key={type}
                    className={`text-sm border px-3 py-1 rounded-full ${dropoffType === type.toLowerCase() ? 'bg-black text-white' : 'bg-white hover:bg-gray-100'}`}
                    onClick={() => setDropoffType(type.toLowerCase())}
                  >{type}</button>
                ))}
              </div>
            </div>

            <AddressInput
              value={dropoffLocation}
              onChange={setDropoffLocation}
              placeholder="Enter Dropoff Location"
            />

            {dropoffType === 'airport' && (
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium">Airline</label>
                  <select
                    type="text"
                    value={dropAirline}
                    onChange={e => setDropAirline(e.target.value)}
                    className="w-full border px-3 py-2 rounded"
                  >

                   <option value=""></option>
                    <option value="American ">American</option>
                    <option value="Delta ">Delta</option>
                    <option value="United ">United </option>
                    <option value="Southwest ">Southwest </option>
                    <option value="JetBlue">JetBlue</option>
                    <option value="Alaska">Alaska </option>
                    <option value="Spirit">Spirit </option>
                    <option value="Frontier">Frontier </option>
                    <option value="Other">Other</option>
                  </select>

                  {dropAirline === 'Other' && (
                    <input
                      type="text"
                      placeholder="Enter Airline"
                      value={customAirline}
                      onChange={(e) => setCustomAirline(e.target.value)}
                      className="mt-2 w-full border px-3 py-2 rounded"
                    />
                  )} 
                </div>

                <div>
                  <label className="block text-sm font-medium">Flight #</label>
                  <input
                    type="text"
                    value={dropFlightNumber}
                    onChange={e => setDropFlightNumber(e.target.value)}
                    className="w-full border px-3 py-2 rounded"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium">Departure Time</label>
                  <input
                    type="time"
                    value={dropArrivalTime}
                    onChange={e => setDropArrivalTime(e.target.value)}
                    className="w-full border px-3 py-2 rounded"
                  />
                </div>
              </div>
            )}

            <br/>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 gap-y-6 text-center">
              {[{ label: 'Travellers', value: travelers, setter: setTravelers, min: 1 },
                { label: 'Kids', value: kids, setter: setKids, min: 0 },
                { label: 'Bags', value: bags, setter: setBags, min: 0 }]
                .map(({ label, value, setter, min }) => (
                  <div key={label}>
                    <label className="text-sm font-medium block mb-2">{label}</label>
                    <div className="flex items-center justify-between border rounded overflow-hidden max-w-[10rem] mx-auto">
                      <button
                        onClick={() => setter(Math.max(min, value - 1))}
                        className="px-4 py-2 bg-gray-100 text-lg"
                      >
                        −
                      </button>
                      <span className="px-4 py-2 text-base w-full">{value}</span>
                      <button
                        onClick={() => setter(value + 1)}
                        className="px-4 py-2 bg-gray-100 text-lg"
                      >
                        +
                      </button>
                    </div>
                  </div>
              ))}
            </div>

            <br/>

            <div className="flex justify-between mt-6">
              <button className="px-6 py-2 border rounded-full text-sm hover:bg-gray-100">Cancel</button>
              <button
                onClick={handleContinue}
                className="px-6 py-2 bg-black text-white rounded-full text-sm hover:bg-gray-800"
              >
                Continue
              </button>
            </div>
          </div>

          <div className="bg-gray-100 p-4 rounded shadow h-[40rem] flex items-center justify-center">
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
        <div className="space-y-6">
          <br />
          <div className="grid sm:grid-cols-2 gap-4">
            {vehicleOptions.map(vehicle => (
              <div
                key={vehicle.id}
                onClick={() => setSelectedVehicle(vehicle)}
                className={`border p-4 rounded cursor-pointer hover:border-black ${selectedVehicle?.id === vehicle.id ? 'border-black shadow' : 'border-gray-300'}`}
              >
                <div className="font-semibold text-lg">{vehicle.name}</div>
                <div className="text-sm text-gray-600 mt-1">${vehicle.rate}/hr</div>
              </div>
            ))}
          </div>

          <br /> <br /> <br />

          <div className="flex justify-between mt-6">
            <button onClick={() => setStep(1)} className="px-6 py-2 border rounded-full text-sm hover:bg-gray-100">Back</button>
            <button
              onClick={handleContinue}
              className="px-6 py-2 bg-black text-white rounded-full text-sm hover:bg-gray-800"
            >
              Continue
            </button>
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="space-y-4 max-w-xl mx-auto">
          <br />
          <input type="text" placeholder="Your Full Name" value={name} onChange={e => setName(e.target.value)} className="w-full border px-3 py-2 rounded" />
          <input type="email" placeholder="Your Email Address" value={email} onChange={e => setEmail(e.target.value)} className="w-full border px-3 py-2 rounded" />
          <InputMask mask="999-999-9999" value={phone} onChange={e => setPhone(e.target.value)} maskChar={null}>
            {(inputProps) => <input {...inputProps} type="tel" placeholder="Your Phone Number" className="w-full border px-3 py-2 rounded" />}
          </InputMask>

          <br /> <br /> <br />

          <div className="flex justify-between mt-6">
            <button onClick={() => setStep(2)} className="px-6 py-2 border rounded-full text-sm hover:bg-gray-100">Back</button>
            <button
              onClick={handleContinue}
              disabled={loading}
              className="px-6 py-2 bg-black text-white rounded-full text-sm hover:bg-gray-800"
            >
              {loading ? 'Processing…' : 'Reserve with Stripe'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Booking;
