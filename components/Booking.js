import React, { useState } from 'react';
import InputMask from 'react-input-mask';

const Booking = ({ vehicle }) => {
  const [date, setDate] = useState('');
  const [hours, setHours] = useState(2);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [loading, setLoading] = useState(false);

  const getHourlyRate = (vehicleId, hours) => {
    if (hours < 2) return null;

    switch (vehicleId) {
      case "escalade":
      case "yukon-premium":
        return hours <= 5 ? 150 : 125;

      case "suburban":
      case "yukon-standard":
        return hours <= 5 ? 125 : 100;

      default:
        return null;
    }
  };

  const handleBooking = async () => {
    setLoading(true);

    const parsedHours = Number(hours);
    const rate = getHourlyRate(vehicle.id, parsedHours);

    if (!rate || !date || !email) {
      alert("Please provide a valid date, phone number, email, and at least 2 hours.");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          vehicle: vehicle.title,
          rate,
          hours: parsedHours,
          date,
          email,
          phone
        }),
      });

      let data = null;
      const contentType = response.headers.get("content-type");

      if (contentType && contentType.includes("application/json")) {
        data = await response.json();
      }

      if (!response.ok) {
        throw new Error(data?.error || 'Checkout failed');
      }

      if (!data?.url) {
        throw new Error("No redirect URL provided.");
      }

      window.location.href = data.url;
    } catch (err) {
      console.error('Booking error:', err);
      alert('Something went wrong. Please try again.');
      setLoading(false);
    }
  };

  return (
    <div className="space-y-4 text-left">
      <label className="block font-medium text-gray-700">Name</label>
      <input
        type="text"
        value={name}
        onChange={e => setName(e.target.value)}
        required
        className="border px-3 py-2 rounded w-full"
        placeholder="Your Full Name"
      />

      <label className="block font-medium text-gray-700">Email Address</label>
      <input
        type="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        required
        className="border px-3 py-2 rounded w-full"
        placeholder="you@example.com"
      />

      <label className="block font-medium text-gray-700">Phone Number</label>
      <InputMask
        mask="999-999-9999"
        value={phone}
        onChange={e => setPhone(e.target.value)}
      >
        {(inputProps) => (
          <input
            {...inputProps}
            type="tel"
            required
            className="border px-3 py-2 rounded w-full"
            placeholder="424-333-2293"
          />
        )}
      </InputMask>

      <label className="block font-medium text-gray-700">Select Date</label>
      <input
        type="date"
        value={date}
        onChange={e => setDate(e.target.value)}
        required
        className="border px-3 py-2 rounded w-full"
      />

      <label className="block font-medium text-gray-700">Number of Hours</label>
      <input
        type="number"
        min={2}
        value={hours}
        onChange={e => setHours(Number(e.target.value))}
        required
        className="border px-3 py-2 rounded w-full"
      />

      <button
        onClick={handleBooking}
        disabled={loading}
        className="bg-gray-800 text-white px-6 py-2 rounded hover:bg-gray-900 w-full"
      >
        {loading ? 'Processing...' : 'Reserve with Stripe'}
      </button>
    </div>
  );
};

export default Booking;
