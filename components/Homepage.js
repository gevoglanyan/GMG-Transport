import React, { useEffect, useRef, useState } from 'react';
import Head from 'next/head';

const trustItems = [
  { label: '15+ Years Experience' },
  { label: 'TCP 36496-P Licensed' },
  { label: 'Background-Checked Drivers' },
];

export default function Homepage() {
  const canvasRef = useRef(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animFrame;
    const particles = [];

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const count = window.innerWidth < 640 ? 24 : 48;
    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.4 + 0.3,
        dx: (Math.random() - 0.5) * 0.2,
        dy: (Math.random() - 0.5) * 0.2,
        o: Math.random() * 0.28 + 0.06,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const ddx = particles[i].x - particles[j].x;
          const ddy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(ddx * ddx + ddy * ddy);
          if (dist < 100) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(212,175,55,${0.055 * (1 - dist / 100)})`;
            ctx.lineWidth = 0.4;
            ctx.stroke();
          }
        }
      }
      particles.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(212,175,55,${p.o})`;
        ctx.fill();
        p.x += p.dx;
        p.y += p.dy;
        if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
      });
      animFrame = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animFrame);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <>
      <Head>
        <title>GMG Transportation, Inc</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Luxury black car and SUV services in Los Angeles since 2010. Book GMG Transportation for executive travel, events, and airport transfers. TCP 36496-P." />
      </Head>

      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <section
          style={{
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            overflow: 'hidden',
            minHeight: 'calc(100vh - var(--nav-height))',
            padding: 'clamp(2rem, 5vw, 4rem) 1.25rem',
            background: 'linear-gradient(180deg, #ffffff 0%, var(--color-bg) 100%)',
          }}
        >
          <canvas
            ref={canvasRef}
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none', opacity: 0.55 }}
          />

          <div style={{
            position: 'absolute', inset: 0, pointerEvents: 'none',
            backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(10,14,39,0.055) 1px, transparent 0)',
            backgroundSize: '30px 30px',
          }} />

          <div style={{
            position: 'absolute', inset: 0, pointerEvents: 'none',
            background: 'linear-gradient(135deg, transparent 58%, rgba(212,175,55,0.03) 58%)',
          }} />

          <div
            style={{
              position: 'relative',
              zIndex: 10,
              width: '100%',
              maxWidth: '36rem',
              margin: '0 auto',
              opacity: mounted ? 1 : 0,
              transform: mounted ? 'translateY(0)' : 'translateY(18px)',
              transition: 'opacity 0.65s ease, transform 0.65s ease',
            }}
          >
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              marginBottom: '1.5rem',
              padding: '0.375rem 1rem',
              borderRadius: '9999px',
              border: '1px solid rgba(212,175,55,0.3)',
              background: 'rgba(212,175,55,0.07)',
            }}>
              <span style={{
                width: 5, height: 5, borderRadius: '50%',
                background: '#D4AF37', display: 'inline-block', flexShrink: 0,
                animation: 'dotBlink 2.5s ease-in-out infinite',
              }} />
              <span style={{
                fontSize: '0.68rem', fontWeight: 700,
                letterSpacing: '0.12em', textTransform: 'uppercase', color: '#D4AF37',
                whiteSpace: 'nowrap',
              }}>
                Serving Greater Los Angeles Since 2010
              </span>
            </div>

            <br/>

            <div style={{ position: 'relative', display: 'inline-block', marginBottom: '1.5rem' }}>
              <img
                src="/images/GMG.png"
                alt="GMG Transportation Logo"
                style={{
                  position: 'relative', zIndex: 1,
                  display: 'block', margin: '0 auto',
                  width: 'clamp(160px, 44vw, 285px)',
                  borderRadius: '1rem',
                  border: '2.5px solid var(--color-primary)',
                  boxShadow: '0 20px 40px -8px rgba(10,14,39,0.2)',
                  transition: 'transform 0.4s cubic-bezier(0.34,1.56,0.64,1)',
                }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.03)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; }}
              />
            </div>

            <p style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: 'clamp(0.95rem, 2.8vw, 1.2rem)',
              fontStyle: 'italic', fontWeight: 600,
              color: '#D4AF37',
              letterSpacing: '0.01em',
              marginBottom: '0.5rem',
              lineHeight: 1.4,
              padding: '0 0.5rem',
            }}>
              "Life is a Journey — Make Yours Amazing!"
            </p>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', margin: '1rem 0' }}>
              <div style={{ height: 1, width: '3rem', background: 'linear-gradient(90deg, transparent, #D4AF37)' }} />
              <div style={{ width: 3, height: 3, borderRadius: '50%', background: '#D4AF37', opacity: 0.5 }} />
              <div style={{ width: 5, height: 5, borderRadius: '50%', background: '#D4AF37' }} />
              <div style={{ width: 3, height: 3, borderRadius: '50%', background: '#D4AF37', opacity: 0.5 }} />
              <div style={{ height: 1, width: '3rem', background: 'linear-gradient(90deg, #D4AF37, transparent)' }} />
            </div>
            
            <br />
            
            <h1 style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: 'clamp(1.85rem, 6vw, 3.25rem)',
              fontWeight: 700,
              letterSpacing: '-0.025em',
              lineHeight: 1.1,
              marginBottom: '0.9rem',
              color: 'var(--color-primary)',
            }}>
              Luxury Transportation <br />
              <span style={{ color: '#D4AF37' }}>Services</span>
            </h1>

            <p style={{
              fontSize: 'clamp(0.93rem, 2vw, 1.05rem)',
              color: 'var(--color-text-secondary)',
              lineHeight: 1.75,
              marginBottom: '1.75rem',
              padding: '0 0.25rem',
            }}>
              Professional, reliable, and elegant transportation for every occasion across Southern California.
            </p>

            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.75rem',
              marginBottom: '1.75rem',
            }}
              className="sm:flex-row sm:justify-center"
            >
              <a
                href="/services"
                className="btn-accent"
                style={{ width: '100%', fontSize: '1rem' }}
              >
                <svg style={{ width: 16, height: 16, flexShrink: 0 }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Book Your Ride
              </a>
              <a
                href="tel:+13232848444"
                className="btn-primary"
                style={{ width: '100%', fontSize: '1rem' }}
              >
                <svg style={{ width: 16, height: 16, flexShrink: 0 }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call Us Now
              </a>
            </div>

            <br/>

            <div style={{
              borderRadius: 'var(--radius-xl)',
              overflow: 'hidden',
              border: '1px solid var(--color-border)',
              background: 'white',
              boxShadow: 'var(--shadow-md)',
            }}>
              <div style={{ height: 2, background: 'linear-gradient(90deg, transparent, #D4AF37 30%, #f0d97a 55%, #c19b2f 80%, transparent)' }} />
              <a
                href="tel:+13232848444"
                className="group"
                style={{
                  display: 'flex', flexDirection: 'column',
                  alignItems: 'center', justifyContent: 'center',
                  gap: '0.2rem', padding: '1rem 1.25rem',
                  textDecoration: 'none',
                  borderBottom: '1px solid var(--color-border)',
                  transition: 'background 0.2s ease',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(212,175,55,0.03)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; }}
              >
                <span style={{ fontSize: '0.63rem', fontWeight: 700, letterSpacing: '0.13em', textTransform: 'uppercase', color: '#D4AF37' }}>
                  Call Us Anytime
                </span>
                
                <span style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: 'clamp(1rem, 5vw, 1.25rem)',
                  fontWeight: 700,
                  color: 'var(--color-primary)',
                  letterSpacing: '-0.02em',
                  lineHeight: 1.2,
                  transition: 'color 0.2s ease',
                }}>
                  (323) 284-8444
                </span>
              </a>

              <a
                href="mailto:gmgtransinc@gmail.com"
                style={{
                  display: 'flex', flexDirection: 'column',
                  alignItems: 'center', justifyContent: 'center',
                  gap: '0.2rem', padding: '1rem 1.25rem',
                  textDecoration: 'none',
                  borderBottom: '1px solid var(--color-border)',
                  transition: 'background 0.2s ease',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(212,175,55,0.03)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; }}
              >
                <span style={{ fontSize: '0.63rem', fontWeight: 700, letterSpacing: '0.13em', textTransform: 'uppercase', color: '#D4AF37' }}>
                  Email Us
                </span>
                <span style={{
                  fontSize: 'clamp(0.85rem, 2.5vw, 0.95rem)',
                  fontWeight: 600,
                  color: 'var(--color-text-secondary)',
                  transition: 'color 0.2s ease',
                  wordBreak: 'break-all',
                }}>
                  gmgtransinc@gmail.com
                </span>
              </a>
            </div>

          </div>
        </section>

        <div style={{
          background: 'var(--color-primary)',
          borderTop: '2px solid #D4AF37',
          padding: '0.85rem 1.25rem',
        }}>
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.5rem 1.5rem',
            maxWidth: '56rem',
            margin: '0 auto',
          }}>
            {trustItems.map((item, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <span style={{ color: '#D4AF37', fontSize: '0.45rem', lineHeight: 1 }}>✦</span>
                <span style={{
                  fontSize: '0.7rem', fontWeight: 600,
                  letterSpacing: '0.08em', textTransform: 'uppercase',
                  color: 'rgba(255,255,255,0.78)',
                  whiteSpace: 'nowrap',
                }}>
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <br /> <br /> <br />

      <style>{`
        @keyframes ringPulse {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.012); }
        }
        @keyframes dotBlink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.35; }
        }
        @media (min-width: 640px) {
          .sm\\:flex-row { flex-direction: row !important; }
          .sm\\:justify-center { justify-content: center !important; }
          .sm\\:flex-row a { width: auto !important; min-width: 190px; }
        }
      `}</style>
    </>
  );
}