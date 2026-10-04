import { useState } from 'react';
import { Link } from 'react-router';
import { motion } from 'framer-motion';

const offers = [
  { id: 'midweek', title: 'MIDWEEK STRIKE', category: 'BOWLING', desc: 'Bowl from just ₹150 per person every Monday to Wednesday. Bring the whole gang for the best value in town.', price: '₹150', original: '₹350', validity: 'MON – WED', tag: 'BEST VALUE', img: 'https://images.unsplash.com/photo-1570472456561-ad238153dc4c?w=1600&h=900&fit=crop' },
  { id: 'ladies', title: "LADIES' SPECIAL", category: 'BOWLING', desc: 'Every Thursday is ladies\' night. Ladies bowl at ₹150 while gents pay ₹250. An exclusive offer just for the ladies.', price: '₹150', original: '₹250', validity: 'EVERY THURSDAY', tag: 'LADIES ONLY', img: 'https://images.unsplash.com/photo-1763951778440-13af353b122a?w=1600&h=900&fit=crop' },
  { id: 'glow', title: 'LATE NIGHT GLOW', category: 'BOWLING', desc: 'Special late-night glow bowling from 9 PM onwards. Neon lights, great music, and amazing deals.', price: '₹199', original: '₹350', validity: 'DAILY AFTER 9 PM', tag: 'NIGHT SPECIAL', img: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=1600&h=900&fit=crop' },
  { id: 'group', title: 'GROUP BONANZA', category: 'GROUPS', desc: 'Groups of 10 or more get exclusive packages with bowling, arcade tokens, and food credits bundled in.', price: '₹999', original: '', validity: 'ALL DAYS', tag: 'GROUPS 10+', img: 'https://images.unsplash.com/photo-1671126344798-3a59c8168b51?w=1600&h=900&fit=crop' },
  { id: 'combo', title: 'SPORTS COMBO', category: 'SPORTS', desc: 'Book any 2 sports activities together and get the third free. Mix badminton, TT, snooker and more.', price: '2+1', original: '', validity: 'WEEKDAYS ONLY', tag: 'COMBO DEAL', img: 'https://images.unsplash.com/photo-1718452739586-5b467f1f109b?w=1600&h=900&fit=crop' },
  { id: 'birthday', title: 'BIRTHDAY BASH', category: 'EVENTS', desc: 'Make your birthday unforgettable. Bowling lanes + arcade + food + decoration included in one package.', price: '₹7,999', original: '₹12,000', validity: 'PRE-BOOKING', tag: 'BIRTHDAY', img: 'https://images.unsplash.com/photo-1758275557553-0c46c061d43e?w=1600&h=900&fit=crop' },
];

export default function OffersPage() {
  return (
    <div style={{ background: 'var(--background)' }}>
      {/* Cinematic Hero */}
      <section style={{ height: '50vh', minHeight: '400px', display: 'flex', alignItems: 'flex-end', padding: '4rem 2rem', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', width: '100%' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="label-editorial" style={{ marginBottom: '1rem', color: 'var(--primary)' }}>04 / OFFERS</div>
            <h1 className="text-page-title">
              MORE PLAY.<br />BETTER VALUE.
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Offers List */}
      <section style={{ padding: '6rem 2rem 10rem' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '4rem' }}>
          {offers.map((offer) => (
            <motion.div 
              key={offer.title}
              initial="initial"
              whileHover="hover"
              whileInView="inView"
              viewport={{ once: true, margin: "-100px" }}
              style={{ position: 'relative', cursor: 'pointer', display: 'block' }}
            >
              {/* Note: In a real app we would link to /offers/:id, for now we will link to /book */}
              <Link to="/book" style={{ textDecoration: 'none', color: 'inherit' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '3rem', alignItems: 'stretch' }}>
                  
                  {/* Info Column */}
                  <div style={{ padding: '2rem 0', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <motion.div 
                      variants={{
                        initial: { opacity: 0, x: -20 },
                        inView: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
                        hover: { x: 10, transition: { duration: 0.4 } }
                      }}
                    >
                      <div style={{ display: 'inline-block', border: '1px solid var(--primary)', color: 'var(--primary)', fontFamily: 'DM Sans, sans-serif', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em', padding: '0.25rem 0.75rem', borderRadius: '4px', marginBottom: '1.5rem' }}>
                        {offer.tag}
                      </div>
                      <h2 style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '4rem', color: '#fff', lineHeight: 0.9, letterSpacing: '0.02em', marginBottom: '1.5rem' }}>
                        {offer.title}
                      </h2>
                      <p style={{ color: 'var(--secondary-foreground)', fontSize: '1.1rem', lineHeight: 1.6, marginBottom: '2rem', maxWidth: '400px' }}>
                        {offer.desc}
                      </p>
                      
                      <div style={{ display: 'flex', alignItems: 'baseline', gap: '1rem', marginBottom: '2rem' }}>
                        <span style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '3rem', color: 'var(--primary)', lineHeight: 0.9 }}>{offer.price}</span>
                        {offer.original && (
                          <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '1rem', color: 'var(--muted-foreground)', textDecoration: 'line-through' }}>{offer.original}</span>
                        )}
                      </div>
                      
                      <div style={{ color: 'var(--muted-foreground)', fontFamily: 'DM Sans, sans-serif', fontSize: '0.85rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '2rem' }}>
                        VALIDITY: {offer.validity}
                      </div>
                      
                      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: '#fff', fontFamily: 'DM Sans, sans-serif', fontSize: '0.9rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                        <span>CLAIM OFFER</span>
                        <motion.svg 
                          width="24" height="24" viewBox="0 0 24 24" fill="none"
                          variants={{
                            initial: { x: 0 },
                            hover: { x: 10 }
                          }}
                        >
                          <path d="M5 12h14M12 5l7 7-7 7" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </motion.svg>
                      </div>
                    </motion.div>
                  </div>

                  {/* Image Column */}
                  <div style={{ position: 'relative', borderRadius: '4px', overflow: 'hidden', height: '500px' }}>
                    <motion.img 
                      src={offer.img} 
                      alt={offer.title}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      variants={{
                        initial: { scale: 1 },
                        hover: { scale: 1.05, transition: { duration: 0.8, ease: "easeOut" } }
                      }}
                    />
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(7,10,18,0.8) 0%, transparent 30%)' }} />
                    <motion.div 
                      style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at center, rgba(59,130,246,0.4) 0%, transparent 60%)', pointerEvents: 'none' }}
                      variants={{
                        initial: { opacity: 0 },
                        hover: { opacity: 1, transition: { duration: 0.4 } }
                      }}
                    />
                  </div>

                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          div[style*="grid-template-columns: 1fr 2fr"] {
            grid-template-columns: 1fr !important;
            gap: 0 !important;
          }
          div[style*="padding: 2rem 0"] {
            order: 2;
            padding-top: 2rem !important;
          }
          div[style*="height: 500px"] {
            order: 1;
            height: 300px !important;
          }
        }
      `}</style>
    </div>
  );
}
