import { useState } from 'react';

const filters = ['All', 'Bowling', 'Arcade', 'VR', 'Sports', 'Café', 'Events', 'Parties'];

const images = [
  { id: 1, src: 'https://images.unsplash.com/photo-1570472456561-ad238153dc4c?w=800&h=600&fit=crop&auto=format', alt: 'Friends bowling', category: 'Bowling', size: 'large' },
  { id: 2, src: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=600&h=400&fit=crop&auto=format', alt: 'Arcade room', category: 'Arcade', size: 'small' },
  { id: 3, src: 'https://images.unsplash.com/photo-1593508512255-86ab42a8e620?w=600&h=400&fit=crop&auto=format', alt: 'VR gaming', category: 'VR', size: 'small' },
  { id: 4, src: 'https://images.unsplash.com/photo-1703668956608-e2693e00754b?w=700&h=900&fit=crop&auto=format', alt: 'Bowling strike', category: 'Bowling', size: 'tall' },
  { id: 5, src: 'https://images.unsplash.com/photo-1718452739586-5b467f1f109b?w=600&h=400&fit=crop&auto=format', alt: 'Badminton', category: 'Sports', size: 'small' },
  { id: 6, src: 'https://images.unsplash.com/photo-1763951778440-13af353b122a?w=800&h=600&fit=crop&auto=format', alt: 'Birthday party', category: 'Parties', size: 'large' },
  { id: 7, src: 'https://images.unsplash.com/photo-1575553939928-d03b21323afe?w=600&h=400&fit=crop&auto=format', alt: 'Snooker', category: 'Sports', size: 'small' },
  { id: 8, src: 'https://images.unsplash.com/photo-1514863775978-c611132e6691?w=600&h=400&fit=crop&auto=format', alt: 'Foosball', category: 'Arcade', size: 'small' },
  { id: 9, src: 'https://images.unsplash.com/photo-1481833761820-0509d3217039?w=700&h=900&fit=crop&auto=format', alt: 'Café', category: 'Café', size: 'tall' },
  { id: 10, src: 'https://images.unsplash.com/photo-1515169067868-5387ec356754?w=800&h=600&fit=crop&auto=format', alt: 'Corporate event', category: 'Events', size: 'large' },
  { id: 11, src: 'https://images.unsplash.com/photo-1599685315659-bc876da49fe5?w=600&h=400&fit=crop&auto=format', alt: 'Billiards', category: 'Sports', size: 'small' },
  { id: 12, src: 'https://images.unsplash.com/photo-1758275557553-0c46c061d43e?w=600&h=400&fit=crop&auto=format', alt: 'Party', category: 'Parties', size: 'small' },
  { id: 13, src: 'https://images.unsplash.com/photo-1511882150382-421056c89033?w=600&h=400&fit=crop&auto=format', alt: 'Arcade games', category: 'Arcade', size: 'small' },
  { id: 14, src: 'https://images.unsplash.com/photo-1671126344798-3a59c8168b51?w=800&h=600&fit=crop&auto=format', alt: 'Pool table group', category: 'Sports', size: 'large' },
  { id: 15, src: 'https://images.unsplash.com/photo-1463411563105-157075b06f96?w=600&h=400&fit=crop&auto=format', alt: 'Bowling ball', category: 'Bowling', size: 'small' },
  { id: 16, src: 'https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?w=600&h=400&fit=crop&auto=format', alt: 'VR headset', category: 'VR', size: 'small' },
];

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [lightbox, setLightbox] = useState<typeof images[0] | null>(null);

  const filtered = activeFilter === 'All' ? images : images.filter((img) => img.category === activeFilter);

  return (
    <div style={{ background: 'var(--background)', paddingTop: '80px' }}>
      <section style={{ padding: 'clamp(3rem, 6vw, 5rem) 2rem', textAlign: 'center' }}>
        <div className="section-label" style={{ marginBottom: '1rem' }}>Gallery</div>
        <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 800, color: '#fff', letterSpacing: '-0.02em', marginBottom: '1rem' }}>
          SEE THE EXPERIENCE.
        </h1>
        <p style={{ color: 'var(--secondary-foreground)', fontSize: '1.1rem', maxWidth: '500px', margin: '0 auto' }}>
          A glimpse into the world of Burtex Games — where every moment is worth capturing.
        </p>
      </section>

      <section style={{ padding: '0 2rem clamp(4rem, 8vw, 6rem)' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          {/* Filters */}
          <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '2.5rem', flexWrap: 'wrap' }}>
            {filters.map((f) => (
              <button key={f} onClick={() => setActiveFilter(f)} style={{ padding: '0.5rem 1.25rem', borderRadius: '100px', border: activeFilter === f ? '2px solid var(--primary)' : '2px solid rgba(255,255,255,0.1)', background: activeFilter === f ? 'var(--primary)' : 'transparent', color: activeFilter === f ? '#0B0B0F' : 'var(--secondary-foreground)', fontFamily: 'Cormorant Garamond, serif', fontWeight: 700, fontSize: '0.8rem', letterSpacing: '0.08em', cursor: 'pointer', transition: 'all 0.2s' }}>
                {f}
              </button>
            ))}
          </div>

          {/* Masonry grid */}
          <div style={{ columns: '4', columnGap: '0.75rem' }} className="gallery-masonry">
            {filtered.map((img) => (
              <div
                key={img.id}
                onClick={() => setLightbox(img)}
                style={{ marginBottom: '0.75rem', borderRadius: '10px', overflow: 'hidden', cursor: 'pointer', breakInside: 'avoid', position: 'relative' }}
              >
                <img src={img.src} alt={img.alt} style={{ width: '100%', display: 'block', transition: 'transform 0.4s ease' }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLImageElement).style.transform = 'scale(1.04)'; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLImageElement).style.transform = 'scale(1)'; }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div
          onClick={() => setLightbox(null)}
          style={{ position: 'fixed', inset: 0, zIndex: 200, background: 'rgba(0,0,0,0.92)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}
        >
          <button
            onClick={() => setLightbox(null)}
            style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', background: 'rgba(255,255,255,0.1)', border: 'none', borderRadius: '50%', width: '44px', height: '44px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: '#fff', fontSize: '1.25rem' }}
          >✕</button>
          <img src={lightbox.src.replace('w=600&h=400', 'w=1200&h=800')} alt={lightbox.alt} style={{ maxWidth: '100%', maxHeight: '85vh', borderRadius: '12px', objectFit: 'contain' }} onClick={(e) => e.stopPropagation()} />
        </div>
      )}

      <style>{`
        @media (max-width: 1100px) { .gallery-masonry { columns: 3 !important; } }
        @media (max-width: 768px) { .gallery-masonry { columns: 2 !important; } }
        @media (max-width: 480px) { .gallery-masonry { columns: 1 !important; } }
      `}</style>
    </div>
  );
}
