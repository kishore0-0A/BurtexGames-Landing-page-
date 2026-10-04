import { useParams, Link } from 'react-router';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

// Mock data for activities since we don't have a real backend yet
const activityData: Record<string, any> = {
  bowling: {
    name: 'BOWLING',
    heroTitle: 'THE MAIN\nEVENT.',
    heroImage: 'https://images.unsplash.com/photo-1570472456561-ad238153dc4c?w=1600&h=900&fit=crop',
    whyPlay: 'Experience the thrill of the perfect strike. Our state-of-the-art lanes combine classic bowling action with modern, interactive scoring for an unforgettable time out.',
    features: [
      { stat: '08', label: 'LANES' },
      { stat: '06', label: 'PLAYERS / LANE' },
      { stat: 'PRO', label: 'SCORING SYSTEM' }
    ],
    pricing: '₹150 / GAME',
    expect: 'Expect a high-energy environment with premium lane conditions, attentive service, and an atmosphere that makes every frame feel like a championship match.',
    gallery: [
      'https://images.unsplash.com/photo-1599553655280-9c24ce2e2db6?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1575553939928-d03b21323afe?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&h=600&fit=crop'
    ]
  },
  arcade: {
    name: 'ARCADE',
    heroTitle: 'PLAY WITHOUT\nRULES.',
    heroImage: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=1600&h=900&fit=crop',
    whyPlay: 'Lose yourself in the flashing lights and thrilling sounds of our massive arcade. From retro classics to the newest racing simulators, there is a machine waiting for you.',
    features: [
      { stat: '50+', label: 'MACHINES' },
      { stat: 'VR', label: 'CAPABILITIES' },
      { stat: 'PRIZE', label: 'REDEMPTION' }
    ],
    pricing: 'CARD SYSTEM',
    expect: 'A chaotic, vibrant, and fun-filled environment where competition meets nostalgia.',
    gallery: [
      'https://images.unsplash.com/photo-1511882150382-421056c89033?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&h=600&fit=crop'
    ]
  }
};

export default function ActivityDetailPage() {
  const { id } = useParams();
  const data = activityData[id || 'bowling'] || activityData['bowling'];
  
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "start start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0.5, 1], [1, 0]);

  return (
    <div style={{ background: 'var(--background)' }}>
      {/* HERO */}
      <section ref={targetRef} style={{ height: '100vh', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
        <motion.div style={{ position: 'absolute', inset: 0, y, opacity }}>
          <img src={data.heroImage} alt={data.name} style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.6)' }} />
        </motion.div>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, var(--background) 0%, transparent 40%)' }} />
        
        <div style={{ position: 'relative', zIndex: 10, textAlign: 'center' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="label-editorial" style={{ marginBottom: '1rem', color: 'var(--primary)' }}>{data.name}</div>
            <h1 className="text-page-title" style={{ whiteSpace: 'pre-line' }}>
              {data.heroTitle}
            </h1>
          </motion.div>
        </div>
      </section>

      {/* WHY PLAY */}
      <section style={{ padding: '8rem 2rem' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <div className="label-editorial" style={{ marginBottom: '2rem', color: 'var(--muted-foreground)' }}>WHY PLAY</div>
          <p style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', color: '#fff', fontFamily: 'Cormorant Garamond, serif', lineHeight: 1.4, fontWeight: 500 }}>
            "{data.whyPlay}"
          </p>
        </div>
      </section>

      {/* KEY FEATURES (Editorial Stats) */}
      <section style={{ padding: '4rem 2rem', background: 'rgba(255,255,255,0.02)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '4rem', textAlign: 'center' }}>
          {data.features.map((feat: any, idx: number) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <div style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '6rem', color: '#fff', lineHeight: 1, marginBottom: '1rem' }}>
                {feat.stat}
              </div>
              <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.85rem', fontWeight: 700, letterSpacing: '0.15em', color: 'var(--primary)', textTransform: 'uppercase' }}>
                {feat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PRICING & WHAT TO EXPECT */}
      <section style={{ padding: '8rem 2rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6rem' }}>
          <div>
            <div className="label-editorial" style={{ marginBottom: '1.5rem', color: 'var(--muted-foreground)' }}>PRICING</div>
            <div style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '5rem', color: '#fff', lineHeight: 0.9 }}>
              {data.pricing}
            </div>
            <div style={{ marginTop: '2rem' }}>
              <Link to={`/book/${id}`} className="btn-primary" style={{ display: 'inline-flex', padding: '1rem 2rem' }}>
                BOOK {data.name} →
              </Link>
            </div>
          </div>
          <div>
            <div className="label-editorial" style={{ marginBottom: '1.5rem', color: 'var(--muted-foreground)' }}>WHAT TO EXPECT</div>
            <p style={{ color: 'var(--secondary-foreground)', fontSize: '1.1rem', lineHeight: 1.6 }}>
              {data.expect}
            </p>
          </div>
        </div>
      </section>

      {/* INTERACTIVE GALLERY */}
      <section style={{ padding: '4rem 0', overflow: 'hidden' }}>
        <div className="label-editorial" style={{ paddingLeft: '2rem', marginBottom: '2rem', color: 'var(--muted-foreground)' }}>GALLERY</div>
        <div style={{ display: 'flex', gap: '2rem', padding: '0 2rem', overflowX: 'auto', paddingBottom: '2rem', scrollbarWidth: 'none', msOverflowStyle: 'none' }} className="no-scrollbar">
          {data.gallery.map((img: string, idx: number) => (
            <motion.div 
              key={idx}
              whileHover={{ scale: 0.98 }}
              style={{ minWidth: '60vw', height: '500px', flexShrink: 0, borderRadius: '4px', overflow: 'hidden' }}
            >
              <img src={img} alt="Gallery" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* BOOKING CTA */}
      <section style={{ padding: '10rem 2rem', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '100%', height: '100%', background: 'radial-gradient(circle, rgba(59,130,246,0.15) 0%, transparent 60%)', pointerEvents: 'none' }} />
        <div style={{ position: 'relative', zIndex: 10 }}>
          <div style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 'clamp(4rem, 8vw, 8rem)', color: '#fff', lineHeight: 0.9, marginBottom: '2rem' }}>
            READY TO PLAY?
          </div>
          <Link to={`/book/${id}`} className="btn-primary" style={{ display: 'inline-flex', padding: '1.25rem 3rem', fontSize: '1.1rem' }}>
            BOOK {data.name} →
          </Link>
        </div>
      </section>

      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        @media (max-width: 900px) {
          div[style*="grid-template-columns: 1fr 1fr"] {
            grid-template-columns: 1fr !important;
            gap: 4rem !important;
          }
          .text-page-title {
            font-size: clamp(4rem, 15vw, 6rem) !important;
          }
        }
      `}</style>
    </div>
  );
}
