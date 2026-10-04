import { useParams, Link } from 'react-router';
import { motion } from 'framer-motion';

const offers: Record<string, any> = {
  midweek: { title: 'MIDWEEK STRIKE', category: 'BOWLING', desc: 'Bowl from just ₹150 per person every Monday to Wednesday. Bring the whole gang for the best value in town.', price: '₹150', original: '₹350', validity: 'MON – WED', tag: 'BEST VALUE', img: 'https://images.unsplash.com/photo-1570472456561-ad238153dc4c?w=1600&h=900&fit=crop', terms: ['Valid only on Monday, Tuesday, and Wednesday.', 'Subject to lane availability.', 'Cannot be combined with other offers.'] },
  ladies: { title: "LADIES' SPECIAL", category: 'BOWLING', desc: 'Every Thursday is ladies\' night. Ladies bowl at ₹150 while gents pay ₹250. An exclusive offer just for the ladies.', price: '₹150', original: '₹250', validity: 'EVERY THURSDAY', tag: 'LADIES ONLY', img: 'https://images.unsplash.com/photo-1763951778440-13af353b122a?w=1600&h=900&fit=crop', terms: ['Valid for female guests only.', 'Applicable every Thursday from 11 AM to 11 PM.', 'Cannot be combined with other offers.'] },
  glow: { title: 'LATE NIGHT GLOW', category: 'BOWLING', desc: 'Special late-night glow bowling from 9 PM onwards. Neon lights, great music, and amazing deals.', price: '₹199', original: '₹350', validity: 'DAILY AFTER 9 PM', tag: 'NIGHT SPECIAL', img: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=1600&h=900&fit=crop', terms: ['Valid daily after 9:00 PM.', 'Standard lane rules apply.', 'Management reserves the right to admission.'] },
};

export default function OfferDetailPage() {
  const { id } = useParams();
  const offer = offers[id || 'midweek'] || offers['midweek'];

  return (
    <div style={{ background: 'var(--background)', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '1fr 1fr', minHeight: '100vh' }}>
        
        {/* Left: Content */}
        <div style={{ padding: '8rem 4rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Link to="/offers" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--muted-foreground)', textDecoration: 'none', fontFamily: 'DM Sans, sans-serif', fontSize: '0.85rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '4rem' }}>
              <span>← BACK TO OFFERS</span>
            </Link>
            
            <div style={{ display: 'inline-block', border: '1px solid var(--primary)', color: 'var(--primary)', fontFamily: 'DM Sans, sans-serif', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em', padding: '0.25rem 0.75rem', borderRadius: '4px', marginBottom: '2rem' }}>
              {offer.tag}
            </div>
            
            <h1 style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 'clamp(4rem, 8vw, 6rem)', color: '#fff', lineHeight: 0.9, letterSpacing: '0.02em', marginBottom: '2rem' }}>
              {offer.title}
            </h1>
            
            <p style={{ color: 'var(--secondary-foreground)', fontSize: '1.25rem', lineHeight: 1.6, marginBottom: '3rem', maxWidth: '500px' }}>
              {offer.desc}
            </p>
            
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '1rem', marginBottom: '3rem' }}>
              <span style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '4rem', color: 'var(--primary)', lineHeight: 0.9 }}>{offer.price}</span>
              {offer.original && (
                <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '1.25rem', color: 'var(--muted-foreground)', textDecoration: 'line-through' }}>{offer.original}</span>
              )}
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '4rem', padding: '2rem 0', borderTop: '1px solid rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
              <div>
                <div style={{ color: 'var(--muted-foreground)', fontFamily: 'DM Sans, sans-serif', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>VALIDITY</div>
                <div style={{ color: '#fff', fontFamily: 'DM Sans, sans-serif', fontSize: '1rem', fontWeight: 500 }}>{offer.validity}</div>
              </div>
              <div>
                <div style={{ color: 'var(--muted-foreground)', fontFamily: 'DM Sans, sans-serif', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>CATEGORY</div>
                <div style={{ color: '#fff', fontFamily: 'DM Sans, sans-serif', fontSize: '1rem', fontWeight: 500 }}>{offer.category}</div>
              </div>
            </div>
            
            <div style={{ marginBottom: '4rem' }}>
              <div style={{ color: 'var(--muted-foreground)', fontFamily: 'DM Sans, sans-serif', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1rem' }}>TERMS & CONDITIONS</div>
              <ul style={{ paddingLeft: '1.25rem', color: 'var(--secondary-foreground)', fontFamily: 'DM Sans, sans-serif', fontSize: '0.9rem', lineHeight: 1.6 }}>
                {offer.terms.map((term: string, i: number) => (
                  <li key={i} style={{ marginBottom: '0.5rem' }}>{term}</li>
                ))}
              </ul>
            </div>

            <Link to="/book" className="btn-primary" style={{ display: 'inline-flex', padding: '1.25rem 3rem', fontSize: '1.1rem' }}>
              CLAIM THIS OFFER →
            </Link>
          </motion.div>
        </div>

        {/* Right: Image */}
        <div style={{ position: 'relative', overflow: 'hidden' }}>
          <motion.div
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            style={{ width: '100%', height: '100%' }}
          >
            <img src={offer.img} alt={offer.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </motion.div>
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, var(--background) 0%, transparent 20%)' }} />
        </div>
      </div>
      
      <style>{`
        @media (max-width: 900px) {
          div[style*="grid-template-columns: 1fr 1fr"] {
            grid-template-columns: 1fr !important;
            display: flex !important;
            flex-direction: column !important;
          }
          div[style*="padding: 8rem 4rem"] {
            order: 2;
            padding: 4rem 2rem !important;
          }
          div[style*="position: relative; overflow: hidden"] {
            order: 1;
            height: 50vh !important;
            min-height: 400px;
          }
        }
      `}</style>
    </div>
  );
}
