import { useEffect, useRef } from 'react';

const services = [
  {
    title: 'Bathroom Remodeling',
    description: 'From spa-inspired master baths to efficient guest bathrooms, we handle every detail — custom tile work, luxury fixtures, walk-in showers, and freestanding tubs.',
    image: '/images/bath8.jpg',
    features: ['Custom tile & stonework', 'Luxury fixture installation', 'Walk-in showers & soaking tubs', 'Vanity & cabinetry'],
  },
  {
    title: 'Kitchen Renovation',
    description: 'Transform the heart of your home with stunning cabinetry, marble countertops, custom islands, and premium appliances — designed for both beauty and function.',
    image: '/images/kitchen3.jpg',
    features: ['Custom cabinetry', 'Marble & quartz countertops', 'Kitchen islands', 'Appliance integration'],
  },
  {
    title: 'Living Space Renovation',
    description: 'Elevate your living areas with architectural details, built-in shelving, fireplace surrounds, hardwood floors, and refined finishes that make a lasting impression.',
    image: '/images/living1.jpg',
    features: ['Fireplace surrounds', 'Built-in shelving & cabinetry', 'Hardwood flooring', 'Architectural millwork'],
  },
  {
    title: 'Interior Design',
    description: 'Our design team curates furniture, lighting, and décor that brings your aesthetic vision to life — creating cohesive, sophisticated interiors from concept to completion.',
    image: '/images/design1.jpg',
    features: ['Space planning & concept', 'Furniture curation', 'Lighting design', 'Full styling & staging'],
  },
];

export default function Services() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'));
        }
      }),
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" ref={sectionRef} style={{ padding: '100px 0', background: '#f8f4ef' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 48px' }}>
        {/* Header */}
        <div className="reveal" style={{ textAlign: 'center', marginBottom: '64px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', marginBottom: '16px' }}>
            <div style={{ width: '40px', height: '2px', background: '#c8954a' }} />
            <span style={{ color: '#c8954a', fontSize: '12px', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase' }}>
              What We Do
            </span>
            <div style={{ width: '40px', height: '2px', background: '#c8954a' }} />
          </div>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(32px, 4vw, 48px)',
              fontWeight: 700,
              color: '#2b1a0e',
              lineHeight: 1.2,
            }}
          >
            Our Services
          </h2>
          <p style={{ color: '#666', fontSize: '17px', marginTop: '16px', maxWidth: '540px', margin: '16px auto 0', lineHeight: 1.7 }}>
            We offer a comprehensive range of construction and design services tailored to bring your vision to life.
          </p>
        </div>

        {/* Service cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '32px' }}>
          {services.map((service, i) => (
            <div
              key={service.title}
              className={`reveal reveal-delay-${i + 1}`}
              style={{
                background: '#ffffff',
                borderRadius: '4px',
                overflow: 'hidden',
                boxShadow: '0 4px 24px rgba(0,0,0,0.07)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                cursor: 'default',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.boxShadow = '0 16px 48px rgba(0,0,0,0.13)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 24px rgba(0,0,0,0.07)';
              }}
            >
              {/* Image */}
              <div style={{ height: '240px', overflow: 'hidden', position: 'relative' }}>
                <img
                  src={service.image}
                  alt={service.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.5s ease',
                  }}
                  onMouseEnter={e => e.target.style.transform = 'scale(1.05)'}
                  onMouseLeave={e => e.target.style.transform = 'scale(1)'}
                />
                {/* Overlay with title */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    background: 'linear-gradient(to top, rgba(43,26,14,0.85), transparent)',
                    padding: '32px 24px 16px',
                  }}
                >
                  <h3
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: '22px',
                      fontWeight: 700,
                      color: '#ffffff',
                      margin: 0,
                    }}
                  >
                    {service.title}
                  </h3>
                </div>
              </div>

              {/* Content */}
              <div style={{ padding: '24px' }}>
                <p style={{ color: '#555', fontSize: '15px', lineHeight: 1.75, marginBottom: '20px' }}>
                  {service.description}
                </p>
                <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {service.features.map(f => (
                    <li key={f} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', color: '#444' }}>
                      <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#c8954a', flexShrink: 0 }} />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #services > div > div:last-child { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 600px) {
          #services { padding: 72px 0 !important; }
          #services > div { padding: 0 24px !important; }
        }
      `}</style>
    </section>
  );
}
