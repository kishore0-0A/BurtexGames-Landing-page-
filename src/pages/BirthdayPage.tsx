import { useState } from 'react';
import { Link } from 'react-router';

const packages = [
  {
    name: 'BASIC',
    price: '₹7,999',
    guests: 'Up to 10 guests',
    duration: '2 hours',
    activities: ['2 Bowling Lanes', 'Arcade Tokens (₹500)', 'Basic Decoration', 'Birthday Cake (1kg)'],
    food: 'Light snacks included',
    color: 'rgba(255,255,255,0.06)',
  },
  {
    name: 'PREMIUM',
    price: '₹14,999',
    guests: 'Up to 20 guests',
    duration: '3 hours',
    activities: ['4 Bowling Lanes', 'Arcade Tokens (₹1500)', 'VR for 4 players', 'Premium Decoration', 'Birthday Cake (2kg)', 'Balloon setup'],
    food: 'Food platter + beverages',
    color: 'rgba(59,130,246,0.06)',
    featured: true,
  },
  {
    name: 'CUSTOM',
    price: 'Contact Us',
    guests: 'Any size',
    duration: 'Flexible',
    activities: ['Full venue access', 'All activities', 'Custom decoration', 'Professional host', 'Photography'],
    food: 'Catered meal + cake',
    color: 'rgba(255,255,255,0.03)',
  },
];

const faq = [
  { q: 'How far in advance should I book?', a: 'We recommend booking at least 7 days in advance for weekdays and 14 days for weekends. For large groups, book even earlier.' },
  { q: 'Can I bring my own cake?', a: 'Yes, you\'re welcome to bring your own cake. We provide complimentary candles and a serving knife.' },
  { q: 'Is decoration included?', a: 'Basic packages include standard balloons and banners. Premium and Custom packages include elaborate decorations.' },
  { q: 'Can we extend the booking duration?', a: 'Yes, subject to availability. Extension charges will apply based on the number of guests and activities.' },
  { q: 'Is there a minimum guest count?', a: 'No minimum for Basic. Premium requires at least 10 guests for the best experience.' },
];

export default function BirthdayPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div style={{ background: 'var(--background)', paddingTop: '80px' }}>
      {/* Hero */}
      <section style={{ position: 'relative', overflow: 'hidden', height: '500px' }}>
        <img src="https://images.unsplash.com/photo-1763951778440-13af353b122a?w=1400&h=600&fit=crop&auto=format" alt="Birthday" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(11,11,15,0.78)' }} />
        <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '2rem' }}>
          <div className="section-label" style={{ marginBottom: '1rem' }}>Birthday Events</div>
          <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 800, color: '#fff', letterSpacing: '-0.02em', marginBottom: '1rem', lineHeight: 1.1 }}>
            MAKE YOUR BIRTHDAY<br />A GAME.
          </h1>
          <p style={{ color: 'var(--secondary-foreground)', fontSize: '1.1rem', maxWidth: '520px' }}>
            Turn your next birthday into a day of games, bowling, food, friends and unforgettable memories.
          </p>
        </div>
      </section>

      {/* Packages */}
      <section style={{ padding: 'clamp(4rem, 8vw, 6rem) 2rem' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div className="section-label" style={{ marginBottom: '0.75rem' }}>Choose Your Package</div>
            <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: 800, color: '#fff', letterSpacing: '-0.02em' }}>
              BIRTHDAY PACKAGES
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {packages.map((pkg) => (
              <div key={pkg.name} style={{ background: pkg.color, border: pkg.featured ? '2px solid rgba(59,130,246,0.4)' : '1px solid rgba(255,255,255,0.06)', borderRadius: '16px', padding: '2rem', position: 'relative' }}>
                {pkg.featured && (
                  <div style={{ position: 'absolute', top: '-12px', left: '50%', transform: 'translateX(-50%)', background: 'var(--primary)', color: '#0B0B0F', fontSize: '0.65rem', fontWeight: 800, letterSpacing: '0.1em', padding: '0.25rem 1rem', borderRadius: '100px', textTransform: 'uppercase' }}>
                    Most Popular
                  </div>
                )}
                <div style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 800, fontSize: '1.4rem', color: pkg.featured ? 'var(--primary)' : '#fff', marginBottom: '0.5rem', letterSpacing: '0.05em' }}>{pkg.name}</div>
                <div style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 800, fontSize: '2rem', color: '#fff', marginBottom: '0.5rem' }}>{pkg.price}</div>
                <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
                  <div style={{ color: 'var(--muted-foreground)', fontSize: '0.8rem' }}>👥 {pkg.guests}</div>
                  <div style={{ color: 'var(--muted-foreground)', fontSize: '0.8rem' }}>⏱ {pkg.duration}</div>
                </div>
                <div style={{ marginBottom: '1rem' }}>
                  <div style={{ color: 'var(--secondary-foreground)', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.75rem' }}>Activities</div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {pkg.activities.map((a) => (
                      <div key={a} style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start', color: 'var(--secondary-foreground)', fontSize: '0.875rem' }}>
                        <span style={{ color: 'var(--primary)', marginTop: '2px', flexShrink: 0 }}>✓</span>
                        {a}
                      </div>
                    ))}
                  </div>
                </div>
                <div style={{ marginBottom: '1.5rem', color: 'var(--secondary-foreground)', fontSize: '0.85rem' }}>
                  🍽️ {pkg.food}
                </div>
                <Link to="/contact" className={pkg.featured ? 'btn-primary' : 'btn-outline'} style={{ textDecoration: 'none', justifyContent: 'center', width: '100%', padding: '0.875rem' }}>
                  {pkg.name === 'CUSTOM' ? 'Get in Touch' : 'Book This Package'}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: '0 2rem clamp(4rem, 8vw, 6rem)' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 800, fontSize: '1.75rem', color: '#fff' }}>Frequently Asked Questions</h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {faq.map((item, i) => (
              <div key={i} style={{ background: 'var(--card)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '12px', overflow: 'hidden' }}>
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  style={{ width: '100%', padding: '1.25rem 1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', color: '#fff', fontFamily: 'Cormorant Garamond, serif', fontWeight: 600, fontSize: '0.95rem' }}
                >
                  {item.q}
                  <span style={{ color: 'var(--primary)', fontSize: '1.25rem', transition: 'transform 0.2s', transform: openFaq === i ? 'rotate(45deg)' : 'none', flexShrink: 0, marginLeft: '1rem' }}>+</span>
                </button>
                {openFaq === i && (
                  <div style={{ padding: '0 1.5rem 1.25rem', color: 'var(--secondary-foreground)', fontSize: '0.875rem', lineHeight: 1.7 }}>{item.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '0 2rem clamp(4rem, 8vw, 6rem)' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center', background: 'var(--card)', border: '1px solid rgba(59,130,246,0.15)', borderRadius: '20px', padding: '3rem 2rem' }}>
          <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🎂</div>
          <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 800, fontSize: '1.75rem', color: '#fff', marginBottom: '0.75rem' }}>Ready to Plan?</h2>
          <p style={{ color: 'var(--secondary-foreground)', marginBottom: '2rem', lineHeight: 1.6 }}>Contact us to customize your perfect birthday package. We'll make it unforgettable.</p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn-primary" style={{ textDecoration: 'none' }}>Plan Your Party</Link>
            <a href="https://wa.me/919999999999" className="btn-outline" style={{ textDecoration: 'none' }}>WhatsApp Us</a>
          </div>
        </div>
      </section>
    </div>
  );
}
