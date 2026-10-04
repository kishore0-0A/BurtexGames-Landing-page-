import { useState } from 'react';
import { Link } from 'react-router';

export default function CorporatePage() {
  const [form, setForm] = useState({ company: '', contact: '', phone: '', email: '', participants: '', date: '', activities: '', budget: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div style={{ background: 'var(--background)', paddingTop: '80px' }}>
      {/* Hero */}
      <section style={{ position: 'relative', overflow: 'hidden', height: '500px' }}>
        <img src="https://images.unsplash.com/photo-1515169067868-5387ec356754?w=1400&h=600&fit=crop&auto=format" alt="Corporate event" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(11,11,15,0.8)' }} />
        <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '2rem' }}>
          <div className="section-label" style={{ marginBottom: '1rem' }}>Corporate Events</div>
          <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 800, color: '#fff', letterSpacing: '-0.02em', marginBottom: '1rem', lineHeight: 1.1 }}>
            TEAMWORK,<br />WITH A LITTLE COMPETITION.
          </h1>
          <p style={{ color: 'var(--secondary-foreground)', fontSize: '1.1rem', maxWidth: '520px' }}>
            Build connections, compete together and give your team a reason to talk about the day long after it ends.
          </p>
        </div>
      </section>

      {/* Why Burtex Games */}
      <section style={{ padding: 'clamp(4rem, 8vw, 6rem) 2rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div className="section-label" style={{ marginBottom: '0.75rem' }}>Why Us</div>
            <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 800, fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', color: '#fff', letterSpacing: '-0.02em' }}>
              THE IDEAL CORPORATE VENUE
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem' }}>
            {[
              { icon: '🏆', title: 'Team Building', desc: 'Competitive activities that bring teams together naturally' },
              { icon: '🎳', title: '10+ Activities', desc: 'From bowling to VR — everyone finds something they love' },
              { icon: '🍽️', title: 'Catering', desc: 'Custom food and beverage packages for any group size' },
              { icon: '🤝', title: 'Dedicated Support', desc: 'Our event team handles all logistics and coordination' },
              { icon: '📊', title: 'Flexible Capacity', desc: 'From 20 to 200+ guests. We scale with your team.' },
              { icon: '🎯', title: 'Custom Packages', desc: 'Tailored to your goals, budget and preferences' },
            ].map((item) => (
              <div key={item.title} className="card-hover" style={{ background: 'var(--card)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '14px', padding: '1.5rem' }}>
                <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>{item.icon}</div>
                <div style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 700, fontSize: '1rem', color: '#fff', marginBottom: '0.5rem' }}>{item.title}</div>
                <div style={{ color: 'var(--secondary-foreground)', fontSize: '0.875rem', lineHeight: 1.5 }}>{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enquiry Form */}
      <section style={{ padding: '0 2rem clamp(4rem, 8vw, 6rem)', background: 'var(--secondary)' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto', paddingTop: 'clamp(3rem, 6vw, 5rem)' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div className="section-label" style={{ marginBottom: '0.75rem' }}>Get Started</div>
            <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 800, fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', color: '#fff', letterSpacing: '-0.02em' }}>
              REQUEST A PROPOSAL
            </h2>
          </div>

          {submitted ? (
            <div style={{ textAlign: 'center', background: 'var(--card)', border: '1px solid rgba(59,130,246,0.2)', borderRadius: '16px', padding: '3rem 2rem' }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✅</div>
              <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 800, fontSize: '1.5rem', color: '#fff', marginBottom: '0.75rem' }}>Enquiry Submitted!</h3>
              <p style={{ color: 'var(--secondary-foreground)' }}>Our corporate events team will get back to you within 24 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ background: 'var(--card)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '16px', padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {[
                { label: 'Company Name', key: 'company', type: 'text', placeholder: 'Acme Corp' },
                { label: 'Contact Person', key: 'contact', type: 'text', placeholder: 'Ramesh Kumar' },
                { label: 'Phone Number', key: 'phone', type: 'tel', placeholder: '+91 98765 43210' },
                { label: 'Email Address', key: 'email', type: 'email', placeholder: 'ramesh@acmecorp.com' },
                { label: 'Number of Participants', key: 'participants', type: 'number', placeholder: '50' },
                { label: 'Preferred Date', key: 'date', type: 'date', placeholder: '' },
                { label: 'Preferred Activities', key: 'activities', type: 'text', placeholder: 'Bowling, Arcade, VR...' },
                { label: 'Budget (approx.)', key: 'budget', type: 'text', placeholder: '₹50,000' },
              ].map((field) => (
                <div key={field.key}>
                  <label style={{ display: 'block', color: 'var(--secondary-foreground)', fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                    {field.label}
                  </label>
                  <input type={field.type} placeholder={field.placeholder} value={form[field.key as keyof typeof form]} onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                    style={{ width: '100%', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '10px', padding: '0.875rem 1rem', color: '#fff', fontSize: '0.95rem', outline: 'none', fontFamily: 'Inter, sans-serif', boxSizing: 'border-box', transition: 'border-color 0.15s' }}
                    onFocus={(e) => { (e.target as HTMLElement).style.borderColor = 'var(--primary)'; }}
                    onBlur={(e) => { (e.target as HTMLElement).style.borderColor = 'rgba(255,255,255,0.1)'; }}
                  />
                </div>
              ))}
              <div>
                <label style={{ display: 'block', color: 'var(--secondary-foreground)', fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Message</label>
                <textarea placeholder="Tell us more about your event..." value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} rows={4}
                  style={{ width: '100%', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '10px', padding: '0.875rem 1rem', color: '#fff', fontSize: '0.95rem', outline: 'none', fontFamily: 'Inter, sans-serif', resize: 'vertical', boxSizing: 'border-box' }}
                  onFocus={(e) => { (e.target as HTMLElement).style.borderColor = 'var(--primary)'; }}
                  onBlur={(e) => { (e.target as HTMLElement).style.borderColor = 'rgba(255,255,255,0.1)'; }}
                />
              </div>
              <button type="submit" className="btn-primary" style={{ justifyContent: 'center', padding: '1rem', fontSize: '0.9rem' }}>
                Request a Proposal
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
