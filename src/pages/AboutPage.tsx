export default function AboutPage() {
  return (
    <div style={{ background: 'var(--background)', paddingTop: '80px' }}>
      {/* Hero */}
      <section style={{ position: 'relative', overflow: 'hidden', height: '460px' }}>
        <img src="https://images.unsplash.com/photo-1671126344798-3a59c8168b51?w=1400&h=600&fit=crop&auto=format" alt="About" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(11,11,15,0.82)' }} />
        <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '2rem' }}>
          <div className="section-label" style={{ marginBottom: '1rem' }}>Our Story</div>
          <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 800, color: '#fff', letterSpacing: '-0.02em' }}>
            MORE THAN BOWLING.
          </h1>
        </div>
      </section>

      {/* Story */}
      <section style={{ padding: 'clamp(4rem, 8vw, 6rem) 2rem' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }} className="about-grid">
            <div>
              <div className="section-label" style={{ marginBottom: '1rem' }}>Who We Are</div>
              <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 800, fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', color: '#fff', letterSpacing: '-0.02em', marginBottom: '1.5rem', lineHeight: 1.1 }}>
                Chennai's Home for Entertainment
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', color: 'var(--secondary-foreground)', fontSize: '0.95rem', lineHeight: 1.75 }}>
                <p>Burtex Games Chennai was built with one mission: to create Chennai's most complete entertainment destination — a place where families, friends and colleagues come to play, compete and celebrate together.</p>
                <p>Located in Thoraipakkam on OMR, we offer 10+ experiences under one roof — from our flagship premium bowling lanes to VR gaming, indoor sports, arcade games and a full café.</p>
                <p>We believe entertainment should be accessible, fun and premium at the same time. That's why we've invested in the best lanes, the latest tech, and a team that loves what they do.</p>
              </div>
            </div>
            <div style={{ borderRadius: '16px', overflow: 'hidden', height: '400px' }}>
              <img src="https://images.unsplash.com/photo-1570472456561-ad238153dc4c?w=800&h=600&fit=crop&auto=format" alt="Bowling" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section style={{ padding: 'clamp(3rem, 6vw, 5rem) 2rem', background: 'var(--secondary)' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '2rem', textAlign: 'center' }}>
            {[
              { val: '8', label: 'Bowling Lanes' },
              { val: '10+', label: 'Experiences' },
              { val: '500+', label: 'Google Reviews' },
              { val: '4.7★', label: 'Rating' },
              { val: '50K+', label: 'Happy Players' },
              { val: '2019', label: 'Est. Year' },
            ].map((s) => (
              <div key={s.label}>
                <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, color: 'var(--primary)', lineHeight: 1, marginBottom: '0.5rem' }}>{s.val}</div>
                <div style={{ color: 'var(--secondary-foreground)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 500 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section style={{ padding: 'clamp(4rem, 8vw, 6rem) 2rem' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div className="section-label" style={{ marginBottom: '0.75rem' }}>Our Mission</div>
            <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 800, fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', color: '#fff', letterSpacing: '-0.02em' }}>
              WHY PLAYERS CHOOSE US
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.25rem' }}>
            {[
              { icon: '🎳', title: 'Premium Facilities', desc: 'State-of-the-art bowling lanes, courts, and gaming equipment maintained to the highest standards.' },
              { icon: '👨‍👩‍👧‍👦', title: 'For Everyone', desc: 'From 5-year-olds to 60-year-olds, from beginners to serious players — we welcome all.' },
              { icon: '💰', title: 'Fair Pricing', desc: 'Transparent, competitive pricing with regular offers. Great value for money, always.' },
              { icon: '🏆', title: 'Active Community', desc: 'Regular tournaments, events and leagues that keep players coming back and competing.' },
            ].map((v) => (
              <div key={v.title} className="card-hover" style={{ background: 'var(--card)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '14px', padding: '1.75rem' }}>
                <div style={{ fontSize: '2.25rem', marginBottom: '0.875rem' }}>{v.icon}</div>
                <div style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 700, fontSize: '1.05rem', color: '#fff', marginBottom: '0.625rem' }}>{v.title}</div>
                <div style={{ color: 'var(--secondary-foreground)', fontSize: '0.875rem', lineHeight: 1.6 }}>{v.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <style>{`
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
