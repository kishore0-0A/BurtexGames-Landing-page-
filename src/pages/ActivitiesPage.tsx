import { useState } from 'react';
import { Link } from 'react-router';
import { motion } from 'framer-motion';

const activities = [
  { id: 'bowling', name: 'Bowling', tag: '01', desc: '8 premium automated bowling lanes with big-screen scoring. Suitable for all ages and skill levels.', stats: ['8 LANES', 'UP TO 6 PLAYERS / LANE'], img: 'https://images.unsplash.com/photo-1570472456561-ad238153dc4c?w=1600&h=900&fit=crop&auto=format' },
  { id: 'arcade', name: 'Arcade', tag: '02', desc: 'Over 50 arcade machines from classics to modern games. Hours of entertainment guaranteed.', stats: ['50+ MACHINES', 'ALL AGES'], img: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=1600&h=900&fit=crop&auto=format' },
  { id: 'vr', name: 'VR Experience', tag: '03', desc: 'Step into immersive virtual reality gaming with cutting-edge headsets and motion controls.', stats: ['4 PODS', 'MULTIPLAYER VR'], img: 'https://images.unsplash.com/photo-1593508512255-86ab42a8e620?w=1600&h=900&fit=crop&auto=format' },
  { id: 'snooker', name: 'Snooker', tag: '04', desc: 'Professional-grade snooker tables in a premium setting. Perfect for serious players and beginners alike.', stats: ['4 TABLES', 'PRO EQUIPMENT'], img: 'https://images.unsplash.com/photo-1575553939928-d03b21323afe?w=1600&h=900&fit=crop&auto=format' },
  { id: 'sports', name: 'Indoor Sports', tag: '05', desc: 'Badminton, Pickleball, and Table Tennis courts. Competition-ready synthetic surfaces.', stats: ['MULTIPURPOSE COURTS', 'EQUIPMENT PROVIDED'], img: 'https://images.unsplash.com/photo-1718452739586-5b467f1f109b?w=1600&h=900&fit=crop&auto=format' }
];

export default function ActivitiesPage() {
  return (
    <div style={{ background: 'var(--background)' }}>
      {/* Cinematic Hero - TYPE A */}
      <section style={{ height: '70vh', minHeight: '600px', position: 'relative', display: 'flex', alignItems: 'flex-end', padding: '4rem 2rem', overflow: 'hidden' }}>
        <motion.div 
          style={{ position: 'absolute', inset: 0 }}
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <img src="https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?w=1600&h=900&fit=crop" alt="Venue" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.4 }} />
        </motion.div>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, var(--background) 0%, transparent 100%)' }} />
        
        <div style={{ maxWidth: '1400px', margin: '0 auto', width: '100%', position: 'relative', zIndex: 10 }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="label-editorial" style={{ marginBottom: '1rem', color: 'var(--primary)' }}>01 / EXPERIENCES</div>
            <h1 className="text-page-title" style={{ marginLeft: '-0.05em', marginBottom: '1.5rem', maxWidth: '800px' }}>
              FIND YOUR<br />GAME.
            </h1>
            <p style={{ color: 'var(--secondary-foreground)', fontSize: '1.25rem', lineHeight: 1.6, maxWidth: '500px' }}>
              Explore everything waiting for you at Burtex Games Chennai.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vertical Sequence */}
      <section style={{ padding: '2rem 2rem 8rem' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '8rem' }}>
          {activities.map((act, idx) => (
            <motion.div 
              key={act.id}
              initial="initial"
              whileHover="hover"
              whileInView="inView"
              viewport={{ once: true, margin: "-100px" }}
              style={{ position: 'relative', cursor: 'pointer', display: 'block', textDecoration: 'none' }}
            >
              <Link to={`/activities/${act.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                <div style={{ display: 'grid', gridTemplateColumns: idx % 2 === 0 ? '1.5fr 1fr' : '1fr 1.5fr', gap: '4rem', alignItems: 'center' }}>
                  
                  {/* Image Column */}
                  <div style={{ order: idx % 2 === 0 ? 1 : 2, position: 'relative', borderRadius: '4px', overflow: 'hidden', height: '600px' }}>
                    <motion.img 
                      src={act.img} 
                      alt={act.name}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      variants={{
                        initial: { scale: 1 },
                        hover: { scale: 1.05, transition: { duration: 0.8, ease: "easeOut" } }
                      }}
                    />
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(7,10,18,0.8) 0%, transparent 50%)' }} />
                    <motion.div 
                      style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at center, rgba(59,130,246,0.3) 0%, transparent 70%)', pointerEvents: 'none' }}
                      variants={{
                        initial: { opacity: 0 },
                        hover: { opacity: 1, transition: { duration: 0.4 } }
                      }}
                    />
                  </div>

                  {/* Text Column */}
                  <div style={{ order: idx % 2 === 0 ? 2 : 1 }}>
                    <motion.div 
                      variants={{
                        initial: { opacity: 0, y: 40 },
                        inView: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
                      }}
                    >
                      <div style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '10rem', color: 'transparent', WebkitTextStroke: '1px rgba(255,255,255,0.1)', lineHeight: 0.8, marginBottom: '-2rem', position: 'relative', zIndex: -1 }}>
                        {act.tag}
                      </div>
                      <h2 style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '5rem', color: '#fff', lineHeight: 0.9, letterSpacing: '0.02em', marginBottom: '2rem' }}>
                        {act.name}
                      </h2>
                      
                      <div style={{ display: 'flex', gap: '2rem', marginBottom: '2rem' }}>
                        {act.stats.map(stat => (
                          <div key={stat}>
                            <div style={{ color: 'var(--primary)', fontFamily: 'DM Sans, sans-serif', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                              {stat}
                            </div>
                          </div>
                        ))}
                      </div>
                      
                      <p style={{ color: 'var(--secondary-foreground)', fontSize: '1.1rem', lineHeight: 1.6, marginBottom: '3rem', maxWidth: '400px' }}>
                        {act.desc}
                      </p>
                      
                      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: '#fff', fontFamily: 'DM Sans, sans-serif', fontSize: '0.9rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                        <span>EXPLORE {act.name}</span>
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
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
