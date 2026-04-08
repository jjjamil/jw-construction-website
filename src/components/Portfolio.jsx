import { useState, useEffect, useRef } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';

const allImages = [
  { src: '/images/bath8.jpg', category: 'Bathroom', title: 'Marble & Gold Luxury Shower' },
  { src: '/images/kitchen3.jpg', category: 'Kitchen', title: 'Open Concept White Kitchen' },
  { src: '/images/living1.jpg', category: 'Living Room', title: 'Barrel Vault Fireplace Living Room' },
  { src: '/images/bath1.jpg', category: 'Bathroom', title: 'Freestanding Tub Master Bath' },
  { src: '/images/kitchen1.jpg', category: 'Kitchen', title: 'Dark Cabinetry & Marble Island' },
  { src: '/images/living2.jpg', category: 'Living Room', title: 'Elegant Fireplace & Built-ins' },
  { src: '/images/bath2.jpg', category: 'Bathroom', title: 'Arched Walk-In Shower' },
  { src: '/images/kitchen2.jpg', category: 'Kitchen', title: 'White Kitchen with Wine Bar' },
  { src: '/images/design1.jpg', category: 'Interior Design', title: 'Curated Living Space' },
  { src: '/images/bath3.jpg', category: 'Bathroom', title: 'Modern Clean Bathroom' },
  { src: '/images/bath7.jpg', category: 'Bathroom', title: 'Dual Head Walk-In Shower' },
  { src: '/images/design3.jpg', category: 'Interior Design', title: 'Boutique Bedroom Design' },
  { src: '/images/bath4.jpg', category: 'Bathroom', title: 'Marble Tile Shower Surround' },
  { src: '/images/design2.jpg', category: 'Interior Design', title: 'Sophisticated Lounge Space' },
  { src: '/images/bath5.jpg', category: 'Bathroom', title: 'Frameless Glass Shower' },
  { src: '/images/design4.jpg', category: 'Interior Design', title: 'Canopy Bed Suite' },
  { src: '/images/bath6.jpg', category: 'Bathroom', title: 'Freestanding Tub with Skylight' },
  { src: '/images/design5.jpg', category: 'Interior Design', title: 'Contemporary Living Room' },
];

const categories = ['All', 'Bathroom', 'Kitchen', 'Living Room', 'Interior Design'];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const sectionRef = useRef(null);

  const filtered = activeCategory === 'All'
    ? allImages
    : allImages.filter(img => img.category === activeCategory);

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

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKey = e => {
      if (e.key === 'Escape') setLightboxIndex(null);
      if (e.key === 'ArrowRight') setLightboxIndex(i => (i + 1) % filtered.length);
      if (e.key === 'ArrowLeft') setLightboxIndex(i => (i - 1 + filtered.length) % filtered.length);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [lightboxIndex, filtered.length]);

  return (
    <section id="portfolio" ref={sectionRef} style={{ padding: '100px 0', background: '#ffffff' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 48px' }}>
        {/* Header */}
        <div className="reveal" style={{ textAlign: 'center', marginBottom: '48px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', marginBottom: '16px' }}>
            <div style={{ width: '40px', height: '2px', background: '#c8954a' }} />
            <span style={{ color: '#c8954a', fontSize: '12px', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase' }}>
              Our Work
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
            Portfolio
          </h2>
          <p style={{ color: '#666', fontSize: '17px', marginTop: '16px', lineHeight: 1.7 }}>
            A curated selection of our finest projects
          </p>
        </div>

        {/* Filter tabs */}
        <div className="reveal" style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginBottom: '48px', flexWrap: 'wrap' }}>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                padding: '10px 22px',
                borderRadius: '2px',
                border: activeCategory === cat ? '1px solid #c8954a' : '1px solid #ddd',
                background: activeCategory === cat ? '#c8954a' : 'transparent',
                color: activeCategory === cat ? '#ffffff' : '#555',
                fontSize: '13px',
                fontWeight: 500,
                letterSpacing: '0.06em',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry grid */}
        <div
          style={{
            columns: '3',
            columnGap: '20px',
          }}
        >
          {filtered.map((img, i) => (
            <div
              key={img.src}
              className="reveal"
              style={{
                breakInside: 'avoid',
                marginBottom: '20px',
                position: 'relative',
                overflow: 'hidden',
                borderRadius: '3px',
                cursor: 'pointer',
                display: 'block',
              }}
              onClick={() => setLightboxIndex(i)}
            >
              <img
                src={img.src}
                alt={img.title}
                style={{
                  width: '100%',
                  display: 'block',
                  transition: 'transform 0.5s ease',
                }}
                onMouseEnter={e => {
                  e.target.style.transform = 'scale(1.04)';
                  e.target.nextSibling.style.opacity = '1';
                }}
                onMouseLeave={e => {
                  e.target.style.transform = 'scale(1)';
                  e.target.nextSibling.style.opacity = '0';
                }}
              />
              {/* Hover overlay */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'rgba(43,26,14,0.75)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '12px',
                  opacity: 0,
                  transition: 'opacity 0.3s ease',
                  pointerEvents: 'none',
                }}
              >
                <ZoomIn size={32} color="#c8954a" />
                <div style={{ textAlign: 'center', padding: '0 16px' }}>
                  <div style={{ color: '#c8954a', fontSize: '11px', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '6px' }}>{img.category}</div>
                  <div style={{ fontFamily: "'Playfair Display', serif", color: '#fff', fontSize: '16px', fontWeight: 600 }}>{img.title}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.95)',
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onClick={() => setLightboxIndex(null)}
        >
          {/* Close */}
          <button
            onClick={() => setLightboxIndex(null)}
            style={{
              position: 'absolute',
              top: '20px',
              right: '24px',
              background: 'none',
              border: 'none',
              color: '#fff',
              cursor: 'pointer',
              padding: '8px',
              zIndex: 1,
            }}
          >
            <X size={28} />
          </button>

          {/* Prev */}
          <button
            onClick={e => { e.stopPropagation(); setLightboxIndex(i => (i - 1 + filtered.length) % filtered.length); }}
            style={{
              position: 'absolute',
              left: '20px',
              background: 'rgba(255,255,255,0.1)',
              border: 'none',
              color: '#fff',
              cursor: 'pointer',
              padding: '12px',
              borderRadius: '2px',
              transition: 'background 0.2s',
            }}
            onMouseEnter={e => e.target.style.background = 'rgba(200,149,74,0.5)'}
            onMouseLeave={e => e.target.style.background = 'rgba(255,255,255,0.1)'}
          >
            <ChevronLeft size={28} />
          </button>

          {/* Image */}
          <div onClick={e => e.stopPropagation()} style={{ maxWidth: '90vw', maxHeight: '90vh', textAlign: 'center' }}>
            <img
              src={filtered[lightboxIndex].src}
              alt={filtered[lightboxIndex].title}
              style={{ maxWidth: '100%', maxHeight: '80vh', objectFit: 'contain', borderRadius: '2px' }}
            />
            <div style={{ marginTop: '16px' }}>
              <div style={{ color: '#c8954a', fontSize: '11px', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '6px' }}>
                {filtered[lightboxIndex].category}
              </div>
              <div style={{ fontFamily: "'Playfair Display', serif", color: '#fff', fontSize: '18px' }}>
                {filtered[lightboxIndex].title}
              </div>
              <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '13px', marginTop: '8px' }}>
                {lightboxIndex + 1} / {filtered.length}
              </div>
            </div>
          </div>

          {/* Next */}
          <button
            onClick={e => { e.stopPropagation(); setLightboxIndex(i => (i + 1) % filtered.length); }}
            style={{
              position: 'absolute',
              right: '20px',
              background: 'rgba(255,255,255,0.1)',
              border: 'none',
              color: '#fff',
              cursor: 'pointer',
              padding: '12px',
              borderRadius: '2px',
              transition: 'background 0.2s',
            }}
            onMouseEnter={e => e.target.style.background = 'rgba(200,149,74,0.5)'}
            onMouseLeave={e => e.target.style.background = 'rgba(255,255,255,0.1)'}
          >
            <ChevronRight size={28} />
          </button>
        </div>
      )}

      <style>{`
        @media (max-width: 900px) {
          #portfolio > div > div:last-of-type { columns: 2 !important; }
        }
        @media (max-width: 600px) {
          #portfolio { padding: 72px 0 !important; }
          #portfolio > div { padding: 0 24px !important; }
          #portfolio > div > div:last-of-type { columns: 1 !important; }
        }
      `}</style>
    </section>
  );
}
