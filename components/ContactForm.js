import React, { useState } from 'react';
import InputMask from 'react-input-mask';
import { useForm, ValidationError } from '@formspree/react';

export default function ContactForm() {
  const [state, handleSubmit] = useForm("mblobbgk");
  const [phone, setPhone] = useState('');

  if (state.succeeded) {
    return (
      <div className="card text-center py-8 animate-fade-in">
        <svg className="w-16 h-16 mx-auto mb-4 text-[var(--color-success)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <p className="text-[var(--color-success)] font-semibold text-lg">
          Thank you! Your message has been sent.
        </p>
        <p className="text-[var(--color-text-muted)] mt-2">
          We'll get back to you shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="card max-w-2xl mx-auto space-y-6 animate-fade-in">
      <div>
        <label htmlFor="name" className="block font-medium text-[var(--color-text-primary)] mb-2">
          Full Name <span className="text-[var(--color-error)]">*</span>
        </label>
        <input
          id="name"
          type="text"
          name="name"
          required
          placeholder="John Doe"
          className="w-full"
        />
        <ValidationError prefix="Name" field="name" errors={state.errors} />
      </div>

      <div>
        <label htmlFor="email" className="block font-medium text-[var(--color-text-primary)] mb-2">
          Email Address <span className="text-[var(--color-error)]">*</span>
        </label>
        <input
          id="email"
          type="email"
          name="email"
          required
          placeholder="john@example.com"
          className="w-full"
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>

      <div>
        <label htmlFor="phone" className="block font-medium text-[var(--color-text-primary)] mb-2">
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
              required
              className="w-full"
              placeholder="424-333-2293"
            />
          )}
        </InputMask>
      </div>

      <div>
        <label htmlFor="message" className="block font-medium text-[var(--color-text-primary)] mb-2">
          Message <span className="text-[var(--color-error)]">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows="5"
          required
          placeholder="Tell us about your transportation needs..."
          className="w-full resize-none"
        />
        <ValidationError prefix="Message" field="message" errors={state.errors} />
      </div>

      <button
        type="submit"
        disabled={state.submitting}
        className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {state.submitting ? (
          <span className="flex items-center justify-center">
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Sending...
          </span>
        ) : 'Send Message'}
      </button>
    </form>
  );
}