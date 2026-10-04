import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router';

const categories = ['BOWLING', 'SPORTS', 'GAMES'];
const days = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];

const pricingData: Record<string, Record<string, any>> = {
  BOWLING: {
    MON: { price: '150', desc: 'ALL DAY, ALL LANES', tag: 'BEST VALUE', time: '11:00 AM - 11:00 PM' },
    TUE: { price: '150', desc: 'ALL DAY, ALL LANES', tag: 'BEST VALUE', time: '11:00 AM - 11:00 PM' },
    WED: { price: '150', desc: 'ALL DAY, ALL LANES', tag: 'BEST VALUE', time: '11:00 AM - 11:00 PM' },
    THU: { price: '250', desc: 'LADIES FREE AFTER 6 PM', tag: 'LADIES NIGHT', time: '11:00 AM - 11:00 PM' },
    FRI: { price: '350', desc: 'WEEKEND RATE', tag: 'WEEKEND', time: '11:00 AM - 11:00 PM' },
    SAT: { price: '350', desc: 'WEEKEND RATE', tag: 'WEEKEND', time: '11:00 AM - 11:00 PM' },
    SUN: { price: '350', desc: 'WEEKEND RATE', tag: 'WEEKEND', time: '11:00 AM - 11:00 PM' },
  },
  SPORTS: {
    MON: { price: '200', desc: 'BADMINTON / PICKLEBALL', tag: 'STANDARD', time: 'PER HOUR' },
    TUE: { price: '200', desc: 'BADMINTON / PICKLEBALL', tag: 'STANDARD', time: 'PER HOUR' },
    WED: { price: '200', desc: 'BADMINTON / PICKLEBALL', tag: 'STANDARD', time: 'PER HOUR' },
    THU: { price: '200', desc: 'BADMINTON / PICKLEBALL', tag: 'STANDARD', time: 'PER HOUR' },
    FRI: { price: '300', desc: 'BADMINTON / PICKLEBALL', tag: 'PEAK', time: 'PER HOUR' },
    SAT: { price: '300', desc: 'BADMINTON / PICKLEBALL', tag: 'PEAK', time: 'PER HOUR' },
    SUN: { price: '300', desc: 'BADMINTON / PICKLEBALL', tag: 'PEAK', time: 'PER HOUR' },
  },
  GAMES: {
    MON: { price: '100', desc: 'ARCADE / VR / CRICKET', tag: 'STARTING AT', time: 'PER GAME' },
    TUE: { price: '100', desc: 'ARCADE / VR / CRICKET', tag: 'STARTING AT', time: 'PER GAME' },
    WED: { price: '100', desc: 'ARCADE / VR / CRICKET', tag: 'STARTING AT', time: 'PER GAME' },
    THU: { price: '100', desc: 'ARCADE / VR / CRICKET', tag: 'STARTING AT', time: 'PER GAME' },
    FRI: { price: '150', desc: 'ARCADE / VR / CRICKET', tag: 'STARTING AT', time: 'PER GAME' },
    SAT: { price: '150', desc: 'ARCADE / VR / CRICKET', tag: 'STARTING AT', time: 'PER GAME' },
    SUN: { price: '150', desc: 'ARCADE / VR / CRICKET', tag: 'STARTING AT', time: 'PER GAME' },
  }
};

export default function PricingPage() {
  const [activeCategory, setActiveCategory] = useState('BOWLING');
  const [activeDay, setActiveDay] = useState('MON');

  const currentData = pricingData[activeCategory][activeDay];

  return (
    <div style={{ background: 'var(--background)' }}>
      {/* HERO */}
      <section style={{ height: '50vh', minHeight: '400px', display: 'flex', alignItems: 'flex-end', padding: '4rem 2rem', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', width: '100%' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="label-editorial" style={{ marginBottom: '1rem', color: 'var(--primary)' }}>03 / PRICING</div>
            <h1 className="text-page-title">
              PLAY MORE.<br />PAY LESS.
            </h1>
          </motion.div>
        </div>
      </section>

      <section style={{ padding: '4rem 2rem 8rem' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 3fr', gap: '4rem' }}>
          
          {/* CATEGORIES (Left Column) */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {categories.map((cat) => (
              <div 
                key={cat} 
                onClick={() => setActiveCategory(cat)}
                style={{ 
                  fontFamily: 'Bebas Neue, sans-serif', 
                  fontSize: '3rem', 
                  cursor: 'pointer',
                  color: activeCategory === cat ? '#fff' : 'rgba(255,255,255,0.2)',
                  transition: 'color 0.3s ease',
                  lineHeight: 1
                }}
              >
                {cat}
              </div>
            ))}
          </div>

          {/* PRICING BOARD (Right Column) */}
          <div>
            {/* Day Selector */}
            <div style={{ display: 'flex', gap: '1rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '2rem', marginBottom: '4rem', overflowX: 'auto' }} className="no-scrollbar">
              {days.map((day) => (
                <div 
                  key={day}
                  onClick={() => setActiveDay(day)}
                  style={{
                    fontFamily: 'DM Sans, sans-serif',
                    fontSize: '1rem',
                    fontWeight: 700,
                    letterSpacing: '0.1em',
                    color: activeDay === day ? 'var(--primary)' : 'var(--muted-foreground)',
                    cursor: 'pointer',
                    padding: '0.5rem 1rem',
                    transition: 'all 0.3s ease',
                    position: 'relative'
                  }}
                >
                  {day}
                  {activeDay === day && (
                    <motion.div 
                      layoutId="activeDay"
                      style={{ position: 'absolute', bottom: '-2.1rem', left: 0, right: 0, height: '2px', background: 'var(--primary)' }}
                    />
                  )}
                </div>
              ))}
            </div>

            {/* Price Display */}
            <div style={{ position: 'relative', minHeight: '300px' }}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${activeCategory}-${activeDay}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: '4rem', alignItems: 'center' }}
                >
                  <div>
                    <div style={{ display: 'flex', alignItems: 'flex-start' }}>
                      <span style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '4rem', color: 'var(--primary)', lineHeight: 0.8, marginTop: '0.5rem' }}>₹</span>
                      <span style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '15rem', color: '#fff', lineHeight: 0.8, letterSpacing: '-0.02em' }}>
                        {currentData.price}
                      </span>
                    </div>
                  </div>
                  
                  <div>
                    <div style={{ display: 'inline-block', border: '1px solid var(--primary)', color: 'var(--primary)', fontFamily: 'DM Sans, sans-serif', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em', padding: '0.25rem 0.75rem', borderRadius: '4px', marginBottom: '1.5rem' }}>
                      {currentData.tag}
                    </div>
                    <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '1.5rem', fontWeight: 500, color: '#fff', marginBottom: '0.5rem' }}>
                      {currentData.desc}
                    </div>
                    <div style={{ color: 'var(--muted-foreground)', fontFamily: 'DM Sans, sans-serif', fontSize: '1rem', letterSpacing: '0.05em' }}>
                      {currentData.time}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <div style={{ marginTop: '4rem', paddingTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
              <Link to="/book" className="btn-primary" style={{ display: 'inline-flex', padding: '1.25rem 3rem', fontSize: '1.1rem' }}>
                BOOK {activeCategory} →
              </Link>
            </div>
          </div>
          
        </div>
      </section>
      
      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        @media (max-width: 900px) {
          div[style*="grid-template-columns: 1fr 3fr"] {
            grid-template-columns: 1fr !important;
          }
          div[style*="grid-template-columns: auto 1fr"] {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
          span[style*="font-size: 15rem"] {
            font-size: 8rem !important;
          }
        }
      `}</style>
    </div>
  );
}
