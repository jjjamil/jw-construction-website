export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{ background: '#2b1a0e', padding: '56px 48px 32px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: '48px', marginBottom: '48px' }}>
          {/* Brand */}
          <div>
            <img src="/logo.png" alt="JW Construction & Design" style={{ height: '52px', marginBottom: '20px' }} />
            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '15px', lineHeight: 1.8, maxWidth: '320px' }}>
              JW Construction & Design Services — transforming spaces with precision craftsmanship and refined design across the greater metropolitan area.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '20px' }}>
              <div style={{ width: '32px', height: '2px', background: '#c8954a' }} />
              <span style={{ color: '#c8954a', fontSize: '12px', fontStyle: 'italic', fontFamily: "'Playfair Display', serif" }}>
                We turn your design ideas into reality
              </span>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 style={{ fontFamily: "'Playfair Display', serif", color: '#ffffff', fontSize: '16px', fontWeight: 600, marginBottom: '20px' }}>
              Quick Links
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {['#about', '#services', '#portfolio', '#contact'].map((href, i) => {
                const labels = ['About Us', 'Services', 'Portfolio', 'Contact'];
                return (
                  <li key={href}>
                    <a
                      href={href}
                      style={{
                        color: 'rgba(255,255,255,0.6)',
                        textDecoration: 'none',
                        fontSize: '14px',
                        transition: 'color 0.2s',
                      }}
                      onMouseEnter={e => e.target.style.color = '#c8954a'}
                      onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.6)'}
                    >
                      {labels[i]}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 style={{ fontFamily: "'Playfair Display', serif", color: '#ffffff', fontSize: '16px', fontWeight: 600, marginBottom: '20px' }}>
              Services
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {['Bathroom Remodeling', 'Kitchen Renovation', 'Living Space Renovation', 'Interior Design'].map(s => (
                <li key={s}>
                  <a
                    href="#services"
                    style={{
                      color: 'rgba(255,255,255,0.6)',
                      textDecoration: 'none',
                      fontSize: '14px',
                      transition: 'color 0.2s',
                    }}
                    onMouseEnter={e => e.target.style.color = '#c8954a'}
                    onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.6)'}
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '28px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
          <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '13px' }}>
            © {year} JW Construction & Design Services, LLC. All rights reserved.
          </p>
          <p style={{ color: 'rgba(255,255,255,0.3)', fontSize: '13px' }}>
            Licensed & Insured
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          footer > div > div:first-child { grid-template-columns: 1fr !important; gap: 32px !important; }
          footer > div > div:last-child { flex-direction: column; text-align: center; }
        }
        @media (max-width: 600px) {
          footer { padding: 48px 24px 24px !important; }
        }
      `}</style>
    </footer>
  );
}
