import { useEffect, useRef } from 'react';
import { Award, Clock, Users, Hammer } from 'lucide-react';

const stats = [
  { icon: Hammer, value: '500+', label: 'Projects Completed' },
  { icon: Users, value: '300+', label: 'Happy Clients' },
  { icon: Award, value: '15+', label: 'Years Experience' },
  { icon: Clock, value: '100%', label: 'On-Time Delivery' },
];

export default function About() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'));
        }
      }),
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} style={{ padding: '100px 0', background: '#ffffff' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 48px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
          {/* Left — image stack */}
          <div className="reveal" style={{ position: 'relative', height: '560px' }}>
            <img
              src="/images/bath8.jpg"
              alt="Luxury bathroom renovation"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '78%',
                height: '80%',
                objectFit: 'cover',
                borderRadius: '2px',
                boxShadow: '0 24px 64px rgba(0,0,0,0.14)',
              }}
            />
            <img
              src="/images/living2.jpg"
              alt="Living room renovation"
              style={{
                position: 'absolute',
                bottom: 0,
                right: 0,
                width: '60%',
                height: '55%',
                objectFit: 'cover',
                borderRadius: '2px',
                boxShadow: '0 24px 64px rgba(0,0,0,0.18)',
                border: '4px solid #ffffff',
              }}
            />
            {/* Gold accent box */}
            <div
              style={{
                position: 'absolute',
                bottom: '120px',
                left: '-20px',
                background: '#c8954a',
                padding: '20px 24px',
                borderRadius: '2px',
                textAlign: 'center',
                boxShadow: '0 8px 24px rgba(200,149,74,0.3)',
              }}
            >
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: '32px', fontWeight: 700, color: '#fff', lineHeight: 1 }}>15+</div>
              <div style={{ color: 'rgba(255,255,255,0.85)', fontSize: '12px', fontWeight: 500, letterSpacing: '0.06em', marginTop: '4px' }}>Years of Excellence</div>
            </div>
          </div>

          {/* Right — text */}
          <div>
            <div className="reveal" style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
              <div style={{ width: '40px', height: '2px', background: '#c8954a' }} />
              <span style={{ color: '#c8954a', fontSize: '12px', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase' }}>
                About Us
              </span>
            </div>

            <h2
              className="reveal reveal-delay-1"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 'clamp(32px, 4vw, 48px)',
                fontWeight: 700,
                color: '#2b1a0e',
                lineHeight: 1.2,
                marginBottom: '24px',
              }}
            >
              Crafting Spaces That<br />
              <span style={{ color: '#c8954a', fontStyle: 'italic' }}>Inspire & Endure</span>
            </h2>

            <p
              className="reveal reveal-delay-2"
              style={{ color: '#555', fontSize: '16px', lineHeight: 1.8, marginBottom: '20px' }}
            >
              JW Construction & Design Services is a full-service renovation and design firm dedicated to transforming homes into personalized masterpieces. From luxury bathroom remodels to stunning kitchen transformations, we bring an uncompromising standard of quality to every project.
            </p>

            <p
              className="reveal reveal-delay-2"
              style={{ color: '#555', fontSize: '16px', lineHeight: 1.8, marginBottom: '40px' }}
            >
              Our team of skilled craftsmen and designers works closely with every client — listening, planning, and executing with precision — so the finished space reflects your vision, not ours.
            </p>

            {/* Stats row */}
            <div className="reveal reveal-delay-3" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
              {stats.map(({ icon: Icon, value, label }) => (
                <div key={label} style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                  <div
                    style={{
                      width: '44px',
                      height: '44px',
                      background: 'rgba(200,149,74,0.1)',
                      borderRadius: '2px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <Icon size={20} color="#c8954a" />
                  </div>
                  <div>
                    <div style={{ fontFamily: "'Playfair Display', serif", fontSize: '26px', fontWeight: 700, color: '#2b1a0e', lineHeight: 1 }}>
                      {value}
                    </div>
                    <div style={{ color: '#888', fontSize: '13px', marginTop: '4px' }}>{label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #about > div > div { grid-template-columns: 1fr !important; gap: 48px !important; }
          #about > div > div > div:first-child { height: 380px !important; }
        }
        @media (max-width: 600px) {
          #about { padding: 72px 0 !important; }
          #about > div { padding: 0 24px !important; }
        }
      `}</style>
    </section>
  );
}
