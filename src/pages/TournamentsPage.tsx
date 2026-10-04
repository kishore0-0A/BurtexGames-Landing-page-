import { useState } from 'react';
import { Link } from 'react-router';

const tabs = ['UPCOMING', 'ONGOING', 'COMPLETED'];

const tournaments = {
  UPCOMING: [
    { id: 1, name: 'Chennai Bowling Open', sport: 'Bowling', date: '20 Sep 2026', time: '10:00 AM', fee: '₹499', registered: 32, total: 64, prize: '₹10,000', format: 'Singles, 3 games', status: 'open' },
    { id: 2, name: 'Pickleball Slam 2026', sport: 'Pickleball', date: '28 Sep 2026', time: '9:00 AM', fee: '₹299', registered: 14, total: 32, prize: '₹5,000', format: 'Doubles', status: 'open' },
    { id: 3, name: 'Snooker Masters Cup', sport: 'Snooker', date: '05 Oct 2026', time: '11:00 AM', fee: '₹399', registered: 8, total: 16, prize: '₹6,000', format: 'Best of 5 frames', status: 'open' },
    { id: 4, name: 'TT Rapid Fire', sport: 'Table Tennis', date: '12 Oct 2026', time: '2:00 PM', fee: '₹199', registered: 10, total: 24, prize: '₹3,000', format: 'Singles', status: 'open' },
  ],
  ONGOING: [
    { id: 5, name: 'Badminton League Sep', sport: 'Badminton', date: '01–15 Sep 2026', time: 'Various', fee: '₹349', registered: 16, total: 16, prize: '₹8,000', format: 'Round Robin + Finals', status: 'ongoing' },
  ],
  COMPLETED: [
    { id: 6, name: 'Bowling Slam Jul 2026', sport: 'Bowling', date: '15 Jul 2026', time: '10:00 AM', fee: '₹499', registered: 64, total: 64, prize: '₹12,000', format: 'Singles', status: 'done', winner: 'Arjun K.', runnerUp: 'Priya S.' },
    { id: 7, name: 'Arcade Challenge Jun 2026', sport: 'Arcade', date: '20 Jun 2026', time: '3:00 PM', fee: '₹149', registered: 32, total: 32, prize: '₹3,000', format: 'Elimination', status: 'done', winner: 'Karthik R.', runnerUp: 'Deepa N.' },
  ],
};

export default function TournamentsPage() {
  const [activeTab, setActiveTab] = useState('UPCOMING');

  const current = tournaments[activeTab as keyof typeof tournaments];

  return (
    <div style={{ background: 'var(--background)', paddingTop: '80px' }}>
      {/* Hero */}
      <section style={{ position: 'relative', overflow: 'hidden', height: '420px' }}>
        <img src="https://images.unsplash.com/photo-1578269174936-2709b6aeb913?w=1400&h=500&fit=crop&auto=format" alt="Tournaments" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(11,11,15,0.85)' }} />
        <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '2rem' }}>
          <div className="section-label" style={{ marginBottom: '1rem' }}>Compete</div>
          <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 800, color: '#fff', letterSpacing: '-0.02em', marginBottom: '1rem' }}>
            PLAY FOR THE WIN.
          </h1>
          <p style={{ color: 'var(--secondary-foreground)', fontSize: '1.1rem', maxWidth: '500px' }}>
            Register for upcoming tournaments, follow ongoing battles, and relive past champions.
          </p>
        </div>
      </section>

      <section style={{ padding: 'clamp(3rem, 6vw, 5rem) 2rem' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          {/* Tabs */}
          <div style={{ display: 'flex', gap: '0.5rem', background: 'var(--card)', borderRadius: '10px', padding: '0.375rem', maxWidth: '400px', margin: '0 auto 3rem' }}>
            {tabs.map((tab) => (
              <button key={tab} onClick={() => setActiveTab(tab)} style={{ flex: 1, padding: '0.625rem', borderRadius: '8px', border: 'none', cursor: 'pointer', fontFamily: 'Cormorant Garamond, serif', fontWeight: 700, fontSize: '0.75rem', letterSpacing: '0.05em', transition: 'all 0.2s', background: activeTab === tab ? 'var(--primary)' : 'transparent', color: activeTab === tab ? '#0B0B0F' : 'var(--secondary-foreground)' }}>
                {tab}
              </button>
            ))}
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {current.map((t) => (
              <div key={t.id} className="card-hover" style={{ background: 'var(--card)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '16px', padding: '1.75rem' }}>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', alignItems: 'flex-start', justifyContent: 'space-between' }}>
                  <div style={{ flex: 1, minWidth: '240px' }}>
                    <div style={{ display: 'flex', gap: '0.625rem', marginBottom: '0.75rem', flexWrap: 'wrap' }}>
                      <div style={{ background: t.status === 'open' ? 'rgba(59,130,246,0.1)' : t.status === 'ongoing' ? 'rgba(249,115,22,0.1)' : 'rgba(255,255,255,0.06)', color: t.status === 'open' ? 'var(--primary)' : t.status === 'ongoing' ? '#F97316' : 'var(--muted-foreground)', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', padding: '0.25rem 0.625rem', borderRadius: '4px' }}>
                        {t.status === 'open' ? 'Registrations Open' : t.status === 'ongoing' ? 'In Progress' : 'Completed'}
                      </div>
                      <div style={{ background: 'rgba(255,255,255,0.06)', color: 'var(--secondary-foreground)', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', padding: '0.25rem 0.625rem', borderRadius: '4px' }}>{t.sport}</div>
                    </div>
                    <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 800, fontSize: '1.2rem', color: '#fff', marginBottom: '1rem' }}>{t.name}</h3>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, auto)', gap: '1rem 2rem', justifyContent: 'start' }}>
                      {[
                        ['📅 Date', t.date],
                        ['🕐 Time', t.time],
                        ['💰 Entry', t.fee],
                        ['🏆 Prize', t.prize],
                        ['📋 Format', t.format],
                        ['👥 Players', `${t.registered} / ${t.total}`],
                      ].map(([label, val]) => (
                        <div key={label as string}>
                          <div style={{ color: 'var(--muted-foreground)', fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.2rem' }}>{label}</div>
                          <div style={{ color: '#fff', fontWeight: 600, fontSize: '0.875rem' }}>{val}</div>
                        </div>
                      ))}
                    </div>
                    {t.status === 'open' && (
                      <div style={{ marginTop: '1rem' }}>
                        <div style={{ height: '4px', background: 'rgba(255,255,255,0.08)', borderRadius: '2px', overflow: 'hidden' }}>
                          <div style={{ height: '100%', width: `${(t.registered / t.total) * 100}%`, background: 'var(--primary)', borderRadius: '2px' }} />
                        </div>
                        <div style={{ color: 'var(--muted-foreground)', fontSize: '0.75rem', marginTop: '0.375rem' }}>{t.total - t.registered} slots remaining</div>
                      </div>
                    )}
                    {t.status === 'done' && 'winner' in t && (
                      <div style={{ marginTop: '1rem', display: 'flex', gap: '1.5rem' }}>
                        <div>
                          <div style={{ color: 'var(--muted-foreground)', fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.2rem' }}>🥇 Winner</div>
                          <div style={{ color: 'var(--primary)', fontWeight: 700 }}>{(t as { winner: string }).winner}</div>
                        </div>
                        <div>
                          <div style={{ color: 'var(--muted-foreground)', fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.2rem' }}>🥈 Runner-up</div>
                          <div style={{ color: 'var(--secondary-foreground)', fontWeight: 700 }}>{(t as { runnerUp: string }).runnerUp}</div>
                        </div>
                      </div>
                    )}
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', minWidth: '160px' }}>
                    {t.status === 'open' && (
                      <Link to="/book" className="btn-primary" style={{ textDecoration: 'none', justifyContent: 'center' }}>Register Now</Link>
                    )}
                    {t.status === 'ongoing' && (
                      <button className="btn-outline">View Bracket</button>
                    )}
                    {t.status === 'done' && (
                      <button className="btn-outline">View Results</button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
