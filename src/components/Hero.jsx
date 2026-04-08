import { useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  const titleRef = useRef(null);
  const subRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    const els = [titleRef.current, subRef.current, ctaRef.current];
    els.forEach((el, i) => {
      if (!el) return;
      el.style.opacity = 0;
      el.style.transform = 'translateY(30px)';
      el.style.transition = `opacity 0.9s ease ${0.3 + i * 0.2}s, transform 0.9s ease ${0.3 + i * 0.2}s`;
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          el.style.opacity = 1;
          el.style.transform = 'translateY(0)';
        });
      });
    });
  }, []);

  return (
    <section
      style={{
        position: 'relative',
        height: '100vh',
        minHeight: '600px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
      }}
    >
      {/* Background image */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'url(/images/kitchen3.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center 40%',
          transform: 'scale(1.04)',
          transition: 'transform 8s ease',
        }}
      />

      {/* Gradient overlays */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to right, rgba(43,26,14,0.88) 0%, rgba(43,26,14,0.55) 60%, rgba(43,26,14,0.3) 100%)',
        }}
      />
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to top, rgba(43,26,14,0.6) 0%, transparent 50%)',
        }}
      />

      {/* Gold accent line */}
      <div
        style={{
          position: 'absolute',
          left: 0,
          top: '50%',
          transform: 'translateY(-50%)',
          width: '4px',
          height: '200px',
          background: 'linear-gradient(to bottom, transparent, #c8954a, transparent)',
        }}
      />

      {/* Content */}
      <div
        style={{
          position: 'relative',
          zIndex: 10,
          maxWidth: '1200px',
          width: '100%',
          padding: '0 48px',
        }}
      >
        <div style={{ maxWidth: '680px' }}>
          {/* Eyebrow */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              marginBottom: '24px',
            }}
          >
            <div style={{ width: '40px', height: '1px', background: '#c8954a' }} />
            <span
              style={{
                color: '#c8954a',
                fontSize: '12px',
                fontWeight: 600,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
              }}
            >
              Premium Construction & Design
            </span>
          </div>

          <h1
            ref={titleRef}
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(42px, 6vw, 76px)',
              fontWeight: 700,
              color: '#ffffff',
              lineHeight: 1.1,
              marginBottom: '24px',
              letterSpacing: '-0.02em',
            }}
          >
            We Turn Your{' '}
            <span style={{ color: '#c8954a', fontStyle: 'italic' }}>Design Ideas</span>
            {' '}Into Reality
          </h1>

          <p
            ref={subRef}
            style={{
              color: 'rgba(255,255,255,0.8)',
              fontSize: 'clamp(16px, 2vw, 19px)',
              lineHeight: 1.7,
              marginBottom: '40px',
              fontWeight: 300,
              maxWidth: '520px',
            }}
          >
            JW Construction & Design Services brings craftsmanship and creativity together — delivering premium renovations that transform kitchens, bathrooms, and living spaces into something extraordinary.
          </p>

          <div ref={ctaRef} style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <a
              href="#contact"
              style={{
                background: '#c8954a',
                color: '#ffffff',
                padding: '16px 36px',
                borderRadius: '2px',
                textDecoration: 'none',
                fontSize: '14px',
                fontWeight: 600,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                transition: 'background 0.2s, transform 0.2s',
                display: 'inline-block',
              }}
              onMouseEnter={e => { e.target.style.background = '#dba96a'; e.target.style.transform = 'translateY(-2px)'; }}
              onMouseLeave={e => { e.target.style.background = '#c8954a'; e.target.style.transform = 'translateY(0)'; }}
            >
              Book a Consultation
            </a>
            <a
              href="#portfolio"
              style={{
                border: '1px solid rgba(255,255,255,0.5)',
                color: '#ffffff',
                padding: '16px 36px',
                borderRadius: '2px',
                textDecoration: 'none',
                fontSize: '14px',
                fontWeight: 500,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                transition: 'border-color 0.2s, transform 0.2s',
                display: 'inline-block',
              }}
              onMouseEnter={e => { e.target.style.borderColor = '#c8954a'; e.target.style.transform = 'translateY(-2px)'; }}
              onMouseLeave={e => { e.target.style.borderColor = 'rgba(255,255,255,0.5)'; e.target.style.transform = 'translateY(0)'; }}
            >
              View Our Work
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        style={{
          position: 'absolute',
          bottom: '32px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '8px',
          color: 'rgba(255,255,255,0.5)',
          animation: 'bounce 2s infinite',
        }}
      >
        <span style={{ fontSize: '11px', letterSpacing: '0.15em', textTransform: 'uppercase' }}>Scroll</span>
        <ChevronDown size={18} />
      </div>

      <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(6px); }
        }
        @media (max-width: 600px) {
          section > div:last-of-type { padding: 0 24px !important; }
        }
      `}</style>
    </section>
  );
}
