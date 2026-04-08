import { useEffect, useRef } from 'react';
import { CalendarCheck } from 'lucide-react';

export default function CTA() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'));
        }
      }),
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{
        position: 'relative',
        padding: '100px 48px',
        overflow: 'hidden',
      }}
    >
      {/* Background */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'url(/images/bath7.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'rgba(43,26,14,0.88)',
        }}
      />

      <div style={{ position: 'relative', zIndex: 1, maxWidth: '720px', margin: '0 auto', textAlign: 'center' }}>
        <div className="reveal" style={{ display: 'flex', justifyContent: 'center', marginBottom: '24px' }}>
          <div
            style={{
              width: '56px',
              height: '56px',
              background: 'rgba(200,149,74,0.15)',
              borderRadius: '50%',
              border: '1px solid rgba(200,149,74,0.4)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <CalendarCheck size={24} color="#c8954a" />
          </div>
        </div>

        <div className="reveal reveal-delay-1" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', marginBottom: '20px' }}>
          <div style={{ width: '40px', height: '1px', background: '#c8954a' }} />
          <span style={{ color: '#c8954a', fontSize: '12px', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase' }}>
            Get Started
          </span>
          <div style={{ width: '40px', height: '1px', background: '#c8954a' }} />
        </div>

        <h2
          className="reveal reveal-delay-2"
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(30px, 4vw, 48px)',
            fontWeight: 700,
            color: '#ffffff',
            lineHeight: 1.2,
            marginBottom: '20px',
          }}
        >
          Ready to Transform<br />
          <span style={{ color: '#c8954a', fontStyle: 'italic' }}>Your Space?</span>
        </h2>

        <p
          className="reveal reveal-delay-3"
          style={{
            color: 'rgba(255,255,255,0.75)',
            fontSize: '17px',
            lineHeight: 1.75,
            marginBottom: '40px',
          }}
        >
          Book a free consultation with our team. We'll walk through your vision, assess your space, and put together a detailed plan tailored to your goals and budget.
        </p>

        <div className="reveal reveal-delay-4" style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a
            href="#contact"
            style={{
              background: '#c8954a',
              color: '#ffffff',
              padding: '16px 40px',
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
            Book Appointment
          </a>
          <a
            href="#portfolio"
            style={{
              border: '1px solid rgba(255,255,255,0.4)',
              color: '#ffffff',
              padding: '16px 40px',
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
            onMouseLeave={e => { e.target.style.borderColor = 'rgba(255,255,255,0.4)'; e.target.style.transform = 'translateY(0)'; }}
          >
            View Portfolio
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 600px) {
          section[ref] { padding: 72px 24px !important; }
        }
      `}</style>
    </section>
  );
}
