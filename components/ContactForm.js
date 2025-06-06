import React, { useState } from 'react';
import InputMask from 'react-input-mask';
import { useForm, ValidationError } from '@formspree/react';

export default function ContactForm() {
  const [state, handleSubmit] = useForm("mblobbgk");
  const [phone, setPhone] = useState('');

  if (state.succeeded) {
    return <p className="text-green-600 font-semibold">Thank you! Your message has been sent.</p>;
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4 text-left">
      <label htmlFor="name" className="block font-medium text-gray-700">Name</label>
      <input
        id="name"
        type="text"
        name="name"
        required
        placeholder="GMG Transportation, Inc"
        className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <ValidationError prefix="Name" field="name" errors={state.errors} />

      <label htmlFor="email" className="block font-medium text-gray-700">Email Address</label>
      <input
        id="email"
        type="email"
        name="email"
        required
        placeholder="gmgtransinc@gmail.com"
        className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <ValidationError prefix="Email" field="email" errors={state.errors} />

      <label className="block font-medium text-gray-700 mb-1">Phone Number</label>
      <InputMask
        mask="999-999-9999"
        value={phone}
        onChange={e => setPhone(e.target.value)}
        maskChar={null}
      >
        {(inputProps) => (
          <input
            {...inputProps}
            type="tel"
            required
            className="border px-3 py-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="424-333-2293"
          />
        )}
      </InputMask>

      <label htmlFor="message" className="block font-medium text-gray-700">Message</label>
      <textarea
        id="message"
        name="message"
        rows="4"
        required
        placeholder="Type a message that moves us..."
        className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <ValidationError prefix="Message" field="message" errors={state.errors} />

      <button
        type="submit"
        disabled={state.submitting}
        className="bg-gray-800 text-white px-6 py-2 rounded hover:bg-gray-900 transition w-full"
      >
        Send Message
      </button>
    </form>
  );
}
