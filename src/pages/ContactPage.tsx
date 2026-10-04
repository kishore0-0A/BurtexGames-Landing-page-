import { useState } from 'react';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div style={{ background: 'var(--background)', paddingTop: '80px' }}>
      <section style={{ padding: 'clamp(3rem, 6vw, 5rem) 2rem', textAlign: 'center' }}>
        <div className="section-label" style={{ marginBottom: '1rem' }}>Get in Touch</div>
        <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 800, color: '#fff', letterSpacing: '-0.02em', marginBottom: '1rem' }}>
          CONTACT US
        </h1>
        <p style={{ color: 'var(--secondary-foreground)', fontSize: '1.1rem', maxWidth: '480px', margin: '0 auto' }}>
          Have a question, need help, or want to make an enquiry? We're here for you.
        </p>
      </section>

      <section style={{ padding: '0 2rem clamp(4rem, 8vw, 6rem)' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '4rem', alignItems: 'start' }} className="contact-grid">
            {/* Info */}
            <div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '2.5rem' }}>
                {[
                  { icon: '📍', title: 'Address', lines: ['Let\'s Bowl Chennai', 'Thoraipakkam OMR', 'Chennai – 600097'] },
                  { icon: '🕐', title: 'Hours', lines: ['Monday – Thursday: 11 AM – 11 PM', 'Friday – Sunday: 10 AM – Midnight'] },
                  { icon: '📞', title: 'Phone', lines: ['+91 99999 99999'] },
                  { icon: '💬', title: 'WhatsApp', lines: ['+91 99999 99999'] },
                  { icon: '✉️', title: 'Email', lines: ['hello@burtexgames.in', 'events@burtexgames.in'] },
                ].map((item) => (
                  <div key={item.title} style={{ display: 'flex', gap: '1rem' }}>
                    <div style={{ width: '44px', height: '44px', background: 'var(--card)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.25rem', flexShrink: 0 }}>{item.icon}</div>
                    <div>
                      <div style={{ color: 'var(--muted-foreground)', fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.375rem', fontWeight: 600 }}>{item.title}</div>
                      {item.lines.map((line) => (
                        <div key={line} style={{ color: '#fff', fontSize: '0.9rem', fontWeight: 500, lineHeight: 1.5 }}>{line}</div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <a href="#" className="btn-primary" style={{ textDecoration: 'none', fontSize: '0.75rem' }}>Get Directions</a>
                <a href="https://wa.me/919999999999" className="btn-outline" style={{ textDecoration: 'none', fontSize: '0.75rem' }}>WhatsApp</a>
              </div>
            </div>

            {/* Form */}
            <div>
              {submitted ? (
                <div style={{ background: 'var(--card)', border: '1px solid rgba(59,130,246,0.2)', borderRadius: '16px', padding: '3rem 2rem', textAlign: 'center' }}>
                  <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✅</div>
                  <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 800, fontSize: '1.5rem', color: '#fff', marginBottom: '0.75rem' }}>Message Sent!</h3>
                  <p style={{ color: 'var(--secondary-foreground)' }}>We'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ background: 'var(--card)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '16px', padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  {[
                    { label: 'Name', key: 'name', type: 'text', placeholder: 'Your name' },
                    { label: 'Phone', key: 'phone', type: 'tel', placeholder: '+91 98765 43210' },
                    { label: 'Email', key: 'email', type: 'email', placeholder: 'your@email.com' },
                    { label: 'Subject', key: 'subject', type: 'text', placeholder: 'Booking enquiry, general question...' },
                  ].map((field) => (
                    <div key={field.key}>
                      <label style={{ display: 'block', color: 'var(--secondary-foreground)', fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>{field.label}</label>
                      <input type={field.type} placeholder={field.placeholder} value={form[field.key as keyof typeof form]} onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                        style={{ width: '100%', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '10px', padding: '0.875rem 1rem', color: '#fff', fontSize: '0.95rem', outline: 'none', fontFamily: 'Inter, sans-serif', boxSizing: 'border-box', transition: 'border-color 0.15s' }}
                        onFocus={(e) => { (e.target as HTMLElement).style.borderColor = 'var(--primary)'; }}
                        onBlur={(e) => { (e.target as HTMLElement).style.borderColor = 'rgba(255,255,255,0.1)'; }}
                      />
                    </div>
                  ))}
                  <div>
                    <label style={{ display: 'block', color: 'var(--secondary-foreground)', fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Message</label>
                    <textarea placeholder="How can we help you?" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} rows={5}
                      style={{ width: '100%', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '10px', padding: '0.875rem 1rem', color: '#fff', fontSize: '0.95rem', outline: 'none', fontFamily: 'Inter, sans-serif', resize: 'vertical', boxSizing: 'border-box' }}
                      onFocus={(e) => { (e.target as HTMLElement).style.borderColor = 'var(--primary)'; }}
                      onBlur={(e) => { (e.target as HTMLElement).style.borderColor = 'rgba(255,255,255,0.1)'; }}
                    />
                  </div>
                  <button type="submit" className="btn-primary" style={{ justifyContent: 'center', padding: '1rem' }}>Send Message</button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
      <style>{`
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
