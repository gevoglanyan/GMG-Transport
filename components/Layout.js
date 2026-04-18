import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

const navLinks = [
  { href: '/',         label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/fleet',    label: 'Fleet' },
  { href: '/faqs',     label: 'FAQs' },
  { href: '/reviews',  label: 'Reviews' },
  { href: '/about',    label: 'About Us' },
  { href: '/contact',  label: 'Contact Us' },
];

export default function Layout({ children }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 6);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [router.pathname]);

  const isActive = (href) =>
    href === '/' ? router.pathname === '/' : router.pathname.startsWith(href);

  return (
    <div className="flex flex-col min-h-screen bg-[var(--color-bg)] text-[var(--color-text-primary)]">
      <header
        className="sticky top-0 z-40 w-full"
        style={{
          background: 'var(--color-primary)',
          transition: 'box-shadow 0.3s ease',
          boxShadow: scrolled
            ? '0 2px 32px -4px rgba(10,14,39,0.55)'
            : '0 1px 0 rgba(212,175,55,0.15)',
        }}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="flex items-center h-[64px] sm:h-[68px]">

            <a
              href="/"
              className="flex items-center gap-2.5 flex-shrink-0 group"
              style={{ textDecoration: 'none' }}
            >
              <div
                style={{
                  width: 34,
                  height: 34,
                  borderRadius: '0.45rem',
                  border: '1.5px solid rgba(212,175,55,0.45)',
                  overflow: 'hidden',
                  flexShrink: 0,
                  transition: 'border-color 0.2s ease',
                }}
              >
                <img
                  src="/images/GMG.png"
                  alt="GMG"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
              </div>
              <div className="flex flex-col leading-tight">
                <span
                  style={{
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontSize: '0.95rem',
                    fontWeight: 700,
                    color: 'white',
                    letterSpacing: '-0.01em',
                    lineHeight: 1.15,
                    transition: 'color 0.2s ease',
                    whiteSpace: 'nowrap',
                  }}
                  className="group-hover:text-[var(--color-accent)]"
                >
                  GMG Transportation
                </span>
                <span style={{
                  fontSize: '0.58rem',
                  fontWeight: 600,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: 'rgba(212,175,55,0.65)',
                  lineHeight: 1,
                }}>
                  (323) 284-8444
                </span>
              </div>
            </a>

            <nav className="hidden sm:flex items-center justify-center flex-1 gap-0.5 px-4">
              {navLinks.map(({ href, label }) => {
                const active = isActive(href);
                return (
                  <a
                    key={href}
                    href={href}
                    style={{
                      position: 'relative',
                      display: 'inline-flex',
                      alignItems: 'center',
                      padding: '0.45rem 0.85rem',
                      borderRadius: '0.5rem',
                      fontFamily: "'Inter', sans-serif",
                      fontSize: '0.875rem',
                      fontWeight: active ? 600 : 400,
                      letterSpacing: active ? '0.005em' : '0.01em',
                      color: active ? '#D4AF37' : 'rgba(255,255,255,0.68)',
                      textDecoration: 'none',
                      background: active ? 'rgba(212,175,55,0.08)' : 'transparent',
                      transition: 'color 0.15s ease, background 0.15s ease',
                      whiteSpace: 'nowrap',
                    }}
                    onMouseEnter={e => {
                      if (!active) {
                        e.currentTarget.style.color = 'rgba(255,255,255,0.95)';
                        e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                      }
                    }}
                    onMouseLeave={e => {
                      if (!active) {
                        e.currentTarget.style.color = 'rgba(255,255,255,0.68)';
                        e.currentTarget.style.background = 'transparent';
                      }
                    }}
                  >
                    {label}
                    {active && (
                      <span style={{
                        position: 'absolute',
                        bottom: -1,
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: '60%',
                        height: '2px',
                        borderRadius: '2px',
                        background: '#D4AF37',
                      }} />
                    )}
                  </a>
                );
              })}
            </nav>

            <div className="hidden sm:flex items-center flex-shrink-0">
              <a
                href="/services"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  padding: '0.5rem 1.1rem',
                  borderRadius: '0.5rem',
                  background: '#D4AF37',
                  color: '#0A0E27',
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '0.825rem',
                  fontWeight: 700,
                  letterSpacing: '0.025em',
                  textDecoration: 'none',
                  transition: 'background 0.15s ease, transform 0.15s ease',
                  whiteSpace: 'nowrap',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = '#c19b2f';
                  e.currentTarget.style.transform = 'translateY(-1px)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = '#D4AF37';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <svg width="13" height="13" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Book Now
              </a>
            </div>

            <button
              className="sm:hidden flex items-center justify-center w-10 h-10 rounded-lg -mr-1 ml-auto"
              style={{
                color: 'rgba(255,255,255,0.75)',
                background: 'transparent',
                border: 'none',
                flexShrink: 0,
                transition: 'color 0.2s',
              }}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              onMouseEnter={e => { e.currentTarget.style.color = 'white'; }}
              onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.75)'; }}
            >
              <svg width="22" height="22" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>

          </div>
        </div>

        <div style={{
          height: '1.5px',
          background: 'linear-gradient(90deg, transparent 0%, rgba(212,175,55,0.5) 20%, rgba(212,175,55,0.85) 50%, rgba(212,175,55,0.5) 80%, transparent 100%)',
        }} />
      </header>

      {menuOpen && (
        <div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center sm:hidden"
          style={{
            background: 'var(--color-primary)',
            backgroundImage: 'radial-gradient(ellipse 80% 60% at 50% 100%, rgba(212,175,55,0.05) 0%, transparent 70%)',
          }}
        >
          <button
            style={{
              position: 'absolute',
              top: '1.1rem',
              right: '1.1rem',
              width: 40,
              height: 40,
              borderRadius: '0.5rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'rgba(255,255,255,0.06)',
              border: '1px solid rgba(255,255,255,0.1)',
              color: 'rgba(255,255,255,0.7)',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
            }}
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
            onMouseEnter={e => {
              e.currentTarget.style.background = 'rgba(212,175,55,0.12)';
              e.currentTarget.style.color = '#D4AF37';
              e.currentTarget.style.borderColor = 'rgba(212,175,55,0.3)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'rgba(255,255,255,0.06)';
              e.currentTarget.style.color = 'rgba(255,255,255,0.7)';
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
            }}
          >
            <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '2.5rem' }}>
            <div style={{ height: '1px', width: '2.5rem', background: 'linear-gradient(90deg, transparent, #D4AF37)' }} />
            <div style={{ width: 5, height: 5, borderRadius: '50%', background: '#D4AF37', opacity: 0.5 }} />
            <div style={{ width: 7, height: 7, borderRadius: '50%', background: '#D4AF37' }} />
            <div style={{ width: 5, height: 5, borderRadius: '50%', background: '#D4AF37', opacity: 0.5 }} />
            <div style={{ height: '1px', width: '2.5rem', background: 'linear-gradient(90deg, #D4AF37, transparent)' }} />
          </div>

          <nav style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '0.15rem',
            width: '100%',
            padding: '0 2rem',
          }}>
            {navLinks.map(({ href, label }) => {
              const active = isActive(href);
              return (
                <a
                  key={href}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  style={{
                    display: 'block',
                    width: '100%',
                    maxWidth: '18rem',
                    textAlign: 'center',
                    padding: '0.85rem 1.5rem',
                    borderRadius: '0.625rem',
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontSize: active ? '1.35rem' : '1.25rem',
                    fontWeight: active ? 700 : 600,
                    color: active ? '#D4AF37' : 'rgba(255,255,255,0.82)',
                    textDecoration: 'none',
                    background: active ? 'rgba(212,175,55,0.1)' : 'transparent',
                    border: active ? '1px solid rgba(212,175,55,0.22)' : '1px solid transparent',
                    letterSpacing: '-0.01em',
                    transition: 'all 0.15s ease',
                  }}
                  onMouseEnter={e => {
                    if (!active) {
                      e.currentTarget.style.color = 'white';
                      e.currentTarget.style.background = 'rgba(255,255,255,0.04)';
                    }
                  }}
                  onMouseLeave={e => {
                    if (!active) {
                      e.currentTarget.style.color = 'rgba(255,255,255,0.82)';
                      e.currentTarget.style.background = 'transparent';
                    }
                  }}
                >
                  {label}
                </a>
              );
            })}
          </nav>

          <br/>

          <div style={{ marginTop: '2.5rem', width: '100%', maxWidth: '18rem', padding: '0 2rem' }}>
            <a
              href="/services"
              onClick={() => setMenuOpen(false)}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                width: '100%',
                padding: '0.875rem',
                borderRadius: '0.625rem',
                background: '#D4AF37',
                color: '#0A0E27',
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.95rem',
                fontWeight: 700,
                letterSpacing: '0.02em',
                textDecoration: 'none',
              }}
            >
              <svg width="15" height="15" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Book Your Ride
            </a>
          </div>

          <p style={{
            position: 'absolute',
            bottom: '1.5rem',
            fontFamily: "'Inter', sans-serif",
            fontSize: '0.62rem',
            fontWeight: 600,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.18)',
          }}>
            GMG Transportation · TCP 39496-P
          </p>
        </div>
      )}

      <main className="flex-grow">{children}</main>

      <footer className="bg-[var(--color-primary)] text-white border-t-2 border-[var(--color-accent)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
            <div className="flex flex-col items-center">
              <h4
                className="text-xl font-bold mb-4 text-[var(--color-accent)]"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                GMG Transportation, Inc
              </h4>

              <p className="text-gray-300 leading-relaxed mb-4 text-sm max-w-sm">
                Providing premium black car and SUV services across Southern California.
                Focused on professionalism, comfort, and customer satisfaction.
              </p>

              <p className="text-gray-500 text-xs tracking-wider uppercase mt-4">
                TCP 39496-P · Licensed &amp; Insured
              </p>

              <p className="text-gray-500 text-xs mt-5">
                Have questions? Reach out anytime!
              </p>

              <br/>

              <p className="text-gray-500 text-xs mt-6">
                Created by{' '}
                <a
                  href="https://gevoglanyan.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--color-accent)] hover:underline font-medium"
                >
                  Harry Gevoglanyan
                </a>
              </p>
            </div>

            <div className="flex flex-col items-center">
              <h4
                className="text-xl font-bold mb-4 text-[var(--color-accent)]"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                Quick Links
              </h4>

              <ul className="space-y-2">
                {[
                  { href: '/', label: 'Home' },
                  { href: '/services', label: 'Our Services' },
                  { href: '/fleet', label: 'Our Fleet' },
                  { href: '/faqs', label: 'FAQs' },
                  { href: '/reviews', label: 'Reviews' },
                  { href: '/about', label: 'About Us' },
                  { href: '/contact', label: 'Contact Us' },
                  { href: '/terms', label: 'Terms of Service' },
                  { href: '/privacy', label: 'Privacy Policy' },
                ].map(({ href, label }) => (
                  <li key={href}>
                    <a
                      href={href}
                      className="text-gray-400 hover:text-[var(--color-accent)] transition-colors text-sm"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col items-center">
              <h4
                className="text-xl font-bold mb-4 text-[var(--color-accent)]"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                Contact Information
              </h4>

              <div className="space-y-3">
                <p>
                  <a
                    href="mailto:gmgtransinc@gmail.com"
                    className="text-gray-300 hover:text-[var(--color-accent)] transition-colors text-sm"
                  >
                    gmgtransinc@gmail.com
                  </a>
                </p>

                <p>
                  <a
                    href="tel:+13232848444"
                    className="text-gray-300 hover:text-[var(--color-accent)] transition-colors font-semibold text-lg"
                  >
                    (323) 284-8444
                  </a>
                </p>

                <p>
                  <a
                    href="https://instagram.com/gmgtransportation"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-[var(--color-accent)] transition-colors inline-flex items-center justify-center gap-2 text-sm"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                    gmgtransportation
                  </a>
                </p>

                <br /> 
                
                <p className="text-gray-500 text-xs pt-1">
                  Based in Los Angeles, California
                </p>
              </div>
            </div>
          </div>

          <hr className="my-10 border-[var(--color-primary-light)]" />

          <p className="text-center text-xs text-gray-500">
            &copy; {new Date().getFullYear()} GMG Transportation, Inc. All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}