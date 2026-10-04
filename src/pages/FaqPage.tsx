import { useState } from 'react';

const categories = ['All', 'Bowling', 'Booking', 'Pricing', 'Events', 'Birthday', 'Corporate', 'Cancellation', 'Venue'];

const faqs = [
  { q: 'How do I book a bowling lane?', a: 'You can book online through our website using the Book Now button, or call us directly at +91 99999 99999. WhatsApp bookings are also accepted.', category: 'Bowling' },
  { q: 'How many people can bowl in one lane?', a: 'Each lane accommodates a minimum of 2 and a maximum of 6 players at a time.', category: 'Bowling' },
  { q: 'Do I need to bring bowling shoes?', a: 'No! Bowling shoes are included in the lane fee. We have all sizes available.', category: 'Bowling' },
  { q: 'Can beginners bowl?', a: 'Absolutely! Our staff are happy to guide beginners. We also offer bumpers for kids and first-timers.', category: 'Bowling' },
  { q: 'How far in advance can I book?', a: 'You can book up to 30 days in advance. For weekends and holidays, we strongly recommend booking at least a week ahead.', category: 'Booking' },
  { q: 'Can I walk in without a booking?', a: 'Walk-ins are welcome based on availability. However, to guarantee your slot — especially on weekends — please book in advance.', category: 'Booking' },
  { q: 'What payment methods are accepted?', a: 'We accept UPI, all major credit/debit cards, net banking, and cash at the venue. Online bookings require digital payment.', category: 'Booking' },
  { q: 'What is the pricing for bowling?', a: 'Bowling is priced per person per game. Rates vary by day: ₹150/person Mon–Wed, ₹250/person Thu, ₹350/person Fri–Sun, ₹400/person on public holidays.', category: 'Pricing' },
  { q: 'Are there any group discounts?', a: 'Yes! Groups of 10 or more get special package pricing. Contact us for custom group quotes.', category: 'Pricing' },
  { q: 'Is GST included in the listed prices?', a: 'Prices listed are exclusive of GST. 18% GST will be added at checkout.', category: 'Pricing' },
  { q: 'Do you host birthday parties?', a: 'Yes, we have dedicated birthday packages starting from ₹7,999 for up to 10 guests, including bowling, arcade tokens, decoration and cake.', category: 'Birthday' },
  { q: 'Can I bring my own food and drinks?', a: 'Outside food is not permitted in the bowling and gaming areas. However, we have a fully stocked café on-site with a wide menu.', category: 'Venue' },
  { q: 'Is parking available?', a: 'Yes, we have ample free parking space available for all visitors.', category: 'Venue' },
  { q: 'What are your operating hours?', a: 'We are open daily from 11:00 AM to 11:00 PM. On Fridays and Saturdays we remain open until midnight.', category: 'Venue' },
  { q: 'What is the cancellation policy?', a: 'Cancellations made 24+ hours before the booking time are fully refunded. Cancellations within 24 hours receive a 50% credit. No-shows are non-refundable.', category: 'Cancellation' },
  { q: 'Can I reschedule my booking?', a: 'Yes, bookings can be rescheduled up to 12 hours before the original time, subject to availability. Contact us via WhatsApp or phone.', category: 'Cancellation' },
  { q: 'Do you offer corporate event packages?', a: 'Yes! We have tailored corporate packages for team outings, offsites and celebrations. Fill out our corporate enquiry form and we\'ll respond within 24 hours.', category: 'Corporate' },
  { q: 'What is the minimum group size for corporate events?', a: 'We can accommodate corporate groups from 20 to 200+ people. Contact us for customized packages based on your team size.', category: 'Corporate' },
];

export default function FaqPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [search, setSearch] = useState('');

  const filtered = faqs.filter((f) => {
    const matchesCat = activeCategory === 'All' || f.category === activeCategory;
    const matchesSearch = search === '' || f.q.toLowerCase().includes(search.toLowerCase()) || f.a.toLowerCase().includes(search.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div style={{ background: 'var(--background)', paddingTop: '80px' }}>
      <section style={{ padding: 'clamp(3rem, 6vw, 5rem) 2rem', textAlign: 'center' }}>
        <div className="section-label" style={{ marginBottom: '1rem' }}>Help Center</div>
        <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 800, color: '#fff', letterSpacing: '-0.02em', marginBottom: '1rem' }}>
          FREQUENTLY ASKED QUESTIONS
        </h1>
        <p style={{ color: 'var(--secondary-foreground)', fontSize: '1.1rem', maxWidth: '480px', margin: '0 auto 2rem' }}>
          Quick answers to common questions. Can't find what you need? Contact us.
        </p>
        {/* Search */}
        <div style={{ maxWidth: '480px', margin: '0 auto', position: 'relative' }}>
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--muted-foreground)' }}>
            <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.5"/>
            <path d="M13 13l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
          <input
            type="text"
            placeholder="Search questions..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{ width: '100%', background: 'var(--card)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', padding: '0.875rem 1rem 0.875rem 3rem', color: '#fff', fontSize: '0.95rem', outline: 'none', fontFamily: 'Inter, sans-serif', boxSizing: 'border-box' }}
          />
        </div>
      </section>

      <section style={{ padding: '0 2rem clamp(4rem, 8vw, 6rem)' }}>
        <div style={{ maxWidth: '860px', margin: '0 auto' }}>
          {/* Category filters */}
          <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '2.5rem', flexWrap: 'wrap' }}>
            {categories.map((cat) => (
              <button key={cat} onClick={() => setActiveCategory(cat)} style={{ padding: '0.4rem 1rem', borderRadius: '100px', border: activeCategory === cat ? '2px solid var(--primary)' : '2px solid rgba(255,255,255,0.08)', background: activeCategory === cat ? 'var(--primary)' : 'transparent', color: activeCategory === cat ? '#0B0B0F' : 'var(--secondary-foreground)', fontFamily: 'Cormorant Garamond, serif', fontWeight: 600, fontSize: '0.78rem', letterSpacing: '0.05em', cursor: 'pointer', transition: 'all 0.15s' }}>
                {cat}
              </button>
            ))}
          </div>

          {filtered.length === 0 ? (
            <div style={{ textAlign: 'center', color: 'var(--muted-foreground)', padding: '3rem' }}>
              <div style={{ fontSize: '3rem', marginBottom: '0.75rem' }}>🔍</div>
              <div style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 600, color: '#fff', marginBottom: '0.5rem' }}>No results found</div>
              <div>Try a different search or category</div>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {filtered.map((faq, i) => (
                <div key={i} style={{ background: 'var(--card)', border: openFaq === i ? '1px solid rgba(59,130,246,0.25)' : '1px solid rgba(255,255,255,0.06)', borderRadius: '12px', overflow: 'hidden', transition: 'border-color 0.2s' }}>
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    style={{ width: '100%', padding: '1.25rem 1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left' }}
                  >
                    <span style={{ color: '#fff', fontFamily: 'Cormorant Garamond, serif', fontWeight: 600, fontSize: '0.95rem', lineHeight: 1.4, paddingRight: '1rem' }}>{faq.q}</span>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', flexShrink: 0 }}>
                      <span style={{ color: 'var(--muted-foreground)', fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.08em', background: 'rgba(255,255,255,0.06)', padding: '0.2rem 0.5rem', borderRadius: '4px', display: 'none' }} className="faq-category-badge">{faq.category}</span>
                      <span style={{ color: 'var(--primary)', fontSize: '1.25rem', transition: 'transform 0.2s', transform: openFaq === i ? 'rotate(45deg)' : 'none' }}>+</span>
                    </div>
                  </button>
                  {openFaq === i && (
                    <div style={{ padding: '0 1.5rem 1.25rem', color: 'var(--secondary-foreground)', fontSize: '0.875rem', lineHeight: 1.75 }}>
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          <div style={{ marginTop: '3rem', textAlign: 'center', background: 'var(--card)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '16px', padding: '2.5rem' }}>
            <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>💬</div>
            <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 800, fontSize: '1.25rem', color: '#fff', marginBottom: '0.5rem' }}>Still have questions?</h3>
            <p style={{ color: 'var(--secondary-foreground)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>Our team is available daily. Reach us via WhatsApp, phone, or email.</p>
            <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="https://wa.me/919999999999" className="btn-primary" style={{ textDecoration: 'none' }}>WhatsApp Us</a>
              <a href="tel:+919999999999" className="btn-outline" style={{ textDecoration: 'none' }}>Call Us</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
