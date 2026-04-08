import { useEffect, useRef } from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const contactItems = [
  {
    icon: Phone,
    label: 'Phone',
    value: '+1 630-453-3769',
    href: 'tel:+16304533769',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'info@jwconstructiondesign.com',
    href: 'mailto:info@jwconstructiondesign.com',
  },
  {
    icon: MapPin,
    label: 'Address',
    value: '8821 Ramm Dr Ste 5, Naperville, IL 60564',
    href: 'https://maps.google.com/?q=8821+Ramm+Dr+Ste+5+Naperville+IL',
  },
  {
    icon: Clock,
    label: 'Hours',
    value: 'Mon – Sat: 8am – 6pm',
    href: null,
  },
];

export default function Contact() {
  const sectionRef = useRef(null);
  const formRef = useRef(null);

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

  const handleSubmit = e => {
    e.preventDefault();
    alert('Thank you! We\'ll be in touch shortly.');
    formRef.current.reset();
  };

  const inputStyle = {
    width: '100%',
    padding: '14px 16px',
    border: '1px solid #e0d8d0',
    borderRadius: '2px',
    fontSize: '15px',
    color: '#1a1a1a',
    background: '#fff',
    outline: 'none',
    transition: 'border-color 0.2s',
    fontFamily: "'Inter', sans-serif",
  };

  return (
    <section id="contact" ref={sectionRef} style={{ padding: '100px 0', background: '#f8f4ef' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 48px' }}>
        {/* Header */}
        <div className="reveal" style={{ textAlign: 'center', marginBottom: '64px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', marginBottom: '16px' }}>
            <div style={{ width: '40px', height: '2px', background: '#c8954a' }} />
            <span style={{ color: '#c8954a', fontSize: '12px', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase' }}>
              Contact Us
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
            Let's Build Something<br />
            <span style={{ color: '#c8954a', fontStyle: 'italic' }}>Beautiful Together</span>
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '64px', alignItems: 'start' }}>
          {/* Left — contact info */}
          <div className="reveal">
            <p style={{ color: '#555', fontSize: '16px', lineHeight: 1.8, marginBottom: '40px' }}>
              Ready to start your renovation journey? Fill out the form or reach out directly — we'd love to hear about your project.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
              {contactItems.map(({ icon: Icon, label, value, href }) => (
                <div key={label} style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                  <div
                    style={{
                      width: '48px',
                      height: '48px',
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
                    <div style={{ fontSize: '12px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#999', marginBottom: '4px' }}>
                      {label}
                    </div>
                    {href ? (
                      <a href={href} style={{ color: '#2b1a0e', fontSize: '15px', fontWeight: 500, textDecoration: 'none' }}>
                        {value}
                      </a>
                    ) : (
                      <span style={{ color: '#2b1a0e', fontSize: '15px', fontWeight: 500 }}>{value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — form */}
          <div className="reveal reveal-delay-2">
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              style={{
                background: '#ffffff',
                padding: '40px',
                borderRadius: '4px',
                boxShadow: '0 4px 24px rgba(0,0,0,0.07)',
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
              }}
            >
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: 500, color: '#444', marginBottom: '6px', letterSpacing: '0.04em' }}>
                    First Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="John"
                    style={inputStyle}
                    onFocus={e => e.target.style.borderColor = '#c8954a'}
                    onBlur={e => e.target.style.borderColor = '#e0d8d0'}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: 500, color: '#444', marginBottom: '6px', letterSpacing: '0.04em' }}>
                    Last Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Smith"
                    style={inputStyle}
                    onFocus={e => e.target.style.borderColor = '#c8954a'}
                    onBlur={e => e.target.style.borderColor = '#e0d8d0'}
                  />
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: 500, color: '#444', marginBottom: '6px', letterSpacing: '0.04em' }}>
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  placeholder="john@example.com"
                  style={inputStyle}
                  onFocus={e => e.target.style.borderColor = '#c8954a'}
                  onBlur={e => e.target.style.borderColor = '#e0d8d0'}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: 500, color: '#444', marginBottom: '6px', letterSpacing: '0.04em' }}>
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="(555) 000-0000"
                  style={inputStyle}
                  onFocus={e => e.target.style.borderColor = '#c8954a'}
                  onBlur={e => e.target.style.borderColor = '#e0d8d0'}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: 500, color: '#444', marginBottom: '6px', letterSpacing: '0.04em' }}>
                  Service Interested In
                </label>
                <select
                  style={{ ...inputStyle, cursor: 'pointer' }}
                  onFocus={e => e.target.style.borderColor = '#c8954a'}
                  onBlur={e => e.target.style.borderColor = '#e0d8d0'}
                >
                  <option value="">Select a service...</option>
                  <option>Bathroom Remodeling</option>
                  <option>Kitchen Renovation</option>
                  <option>Living Space Renovation</option>
                  <option>Interior Design</option>
                  <option>Multiple / Full Home</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: 500, color: '#444', marginBottom: '6px', letterSpacing: '0.04em' }}>
                  Tell Us About Your Project *
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Describe your project, timeline, and any specific requirements..."
                  style={{ ...inputStyle, resize: 'vertical', minHeight: '120px' }}
                  onFocus={e => e.target.style.borderColor = '#c8954a'}
                  onBlur={e => e.target.style.borderColor = '#e0d8d0'}
                />
              </div>

              <button
                type="submit"
                style={{
                  background: '#2b1a0e',
                  color: '#ffffff',
                  padding: '16px',
                  border: 'none',
                  borderRadius: '2px',
                  fontSize: '14px',
                  fontWeight: 600,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  transition: 'background 0.2s, transform 0.2s',
                  fontFamily: "'Inter', sans-serif",
                }}
                onMouseEnter={e => { e.target.style.background = '#c8954a'; e.target.style.transform = 'translateY(-1px)'; }}
                onMouseLeave={e => { e.target.style.background = '#2b1a0e'; e.target.style.transform = 'translateY(0)'; }}
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #contact > div > div:last-child { grid-template-columns: 1fr !important; gap: 40px !important; }
          #contact > div > div:last-child > div:last-child > form { padding: 28px !important; }
          #contact > div > div:last-child > div:last-child > form > div:first-child { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 600px) {
          #contact { padding: 72px 0 !important; }
          #contact > div { padding: 0 24px !important; }
        }
      `}</style>
    </section>
  );
}
