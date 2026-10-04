import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const experiences = [
  {
    number: '01',
    title: 'Bowl',
    description: 'Premium lanes, neon lights and just enough friendly competition to make every frame count.',
    image: 'https://images.unsplash.com/photo-1570472456561-ad238153dc4c?w=1200&h=900&fit=crop&auto=format',
  },
  {
    number: '02',
    title: 'Play',
    description: 'Arcade classics, VR worlds and table games built for big laughs and bigger rematches.',
    image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=1200&h=900&fit=crop&auto=format',
  },
  {
    number: '03',
    title: 'Celebrate',
    description: 'Birthdays, team nights and milestones with room to make memories your way.',
    image: 'https://images.unsplash.com/photo-1515169067868-5387ec356754?w=1200&h=900&fit=crop&auto=format',
  },
];

const reasons = [
  { value: '8', label: 'Premium bowling lanes' },
  { value: '50+', label: 'Arcade & game experiences' },
  { value: '7', label: 'Days open every week' },
];

const atmosphere = [
  { label: 'Neon nights', image: 'https://images.unsplash.com/photo-1511882150382-421056c89033?w=900&h=1100&fit=crop&auto=format' },
  { label: 'Big celebrations', image: 'https://images.unsplash.com/photo-1763951778440-13af353b122a?w=900&h=1100&fit=crop&auto=format' },
  { label: 'Good food', image: 'https://images.unsplash.com/photo-1481833761820-0509d3217039?w=900&h=1100&fit=crop&auto=format' },
  { label: 'One more game', image: 'https://images.unsplash.com/photo-1593508512255-86ab42a8e620?w=900&h=1100&fit=crop&auto=format' },
];

const nightPlan = [
  { step: '01', title: 'Arrive', text: 'Walk into the lights, choose your crew and let the evening take its own shape.' },
  { step: '02', title: 'Choose your game', text: 'Take the lanes, chase a high score or jump into a world of virtual reality.' },
  { step: '03', title: 'Take a break', text: 'Refuel with easy food, cold drinks and a table full of stories from the last round.' },
  { step: '04', title: 'Play it again', text: 'Because the best nights never end after one game. They end when the lights come up.' },
];

export default function HomePage() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const { scrollYProgress: pageProgress } = useScroll();
  const heroImageY = useTransform(scrollYProgress, [0, 1], ['0%', '18%']);
  const heroContentY = useTransform(scrollYProgress, [0, 1], ['0%', '35%']);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  return (
    <div>
      <motion.div className="landing-progress" style={{ scaleX: pageProgress }} />
      <section className="landing-hero" id="top" ref={heroRef}>
        <motion.div className="landing-hero-image" style={{ y: heroImageY }} />
        <div className="landing-hero-grid" />
        <motion.div className="landing-hero-glow" style={{ opacity: heroOpacity }} />
        <motion.div className="landing-shell landing-hero-content" style={{ y: heroContentY, opacity: heroOpacity }}>
          <motion.p
            className="section-label"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
          >
            Chennai&apos;s home for good times
          </motion.p>
          <motion.h1
            className="landing-title"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.7 }}
          >
            Make some
            <br />
            <span>noise.</span>
          </motion.h1>
          <motion.p
            className="landing-hero-copy"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Bowling, games, food and the kind of energy that turns a regular day into a story worth telling.
          </motion.p>
          <motion.div
            className="landing-actions"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <a className="btn-primary" href="#experiences">
              Explore the experience <span>↘</span>
            </a>
            <a className="landing-text-link" href="#visit">
              Find us in Chennai <span>↗</span>
            </a>
          </motion.div>
        </motion.div>
        <div className="landing-hero-meta">
          <span>13° 02&apos; N</span>
          <span className="landing-hero-meta-line" />
          <span>80° 15&apos; E</span>
        </div>
        <div className="landing-scroll-hint">
          <span>Scroll to explore</span>
          <i />
        </div>
      </section>

      <div className="landing-marquee" aria-label="Burtex Games experiences">
        <div className="landing-marquee-track">
          <span>Bowling</span><b>✦</b><span>Arcade</span><b>✦</b><span>VR</span><b>✦</b><span>Good food</span><b>✦</b><span>Big energy</span><b>✦</b>
          <span>Bowling</span><b>✦</b><span>Arcade</span><b>✦</b><span>VR</span><b>✦</b><span>Good food</span><b>✦</b><span>Big energy</span><b>✦</b>
        </div>
      </div>

      <section className="landing-intro landing-shell">
        <div>
          <p className="section-label">Not just a bowling alley</p>
          <h2 className="landing-section-title">
            Your next
            <br />
            <em>great</em> night out.
          </h2>
        </div>
        <div className="landing-intro-copy">
          <p>
            Whether you are chasing a personal best, planning a team hangout or simply looking for somewhere different to spend the evening, Let&apos;s Bowl brings everyone into the game.
          </p>
          <a className="landing-arrow-link" href="#experiences">
            See what&apos;s waiting <span>→</span>
          </a>
        </div>
      </section>

      <section className="landing-experiences" id="experiences">
        <div className="landing-shell">
          <div className="landing-section-heading">
            <p className="section-label">Pick your kind of fun</p>
            <h2 className="landing-section-title">There&apos;s always<br /><em>another</em> game.</h2>
          </div>
          <div className="experience-grid">
            {experiences.map((experience, index) => (
              <motion.a
                className="experience-card"
                href="#visit"
                key={experience.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ delay: index * 0.12 }}
              >
                <img src={experience.image} alt={experience.title} />
                <div className="experience-overlay" />
                <div className="experience-content">
                  <span className="experience-number">{experience.number}</span>
                  <h3>{experience.title}</h3>
                  <p>{experience.description}</p>
                  <span className="experience-link">Discover <b>↗</b></span>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      <section className="landing-atmosphere">
        <div className="landing-shell">
          <div className="landing-section-heading">
            <p className="section-label">A little bit of everything</p>
            <h2 className="landing-section-title">The night is<br /><em>yours.</em></h2>
          </div>
          <div className="atmosphere-grid">
            {atmosphere.map((item, index) => (
              <motion.div
                className={`atmosphere-card atmosphere-card-${index + 1}`}
                key={item.label}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
              >
                <img src={item.image} alt={item.label} />
                <div className="atmosphere-card-overlay" />
                <span>{item.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="landing-night-plan">
        <div className="landing-shell">
          <div className="landing-section-heading">
            <p className="section-label">No two nights are the same</p>
            <h2 className="landing-section-title">Make a night<br /><em>of it.</em></h2>
          </div>
          <div className="night-plan-grid">
            {nightPlan.map((item, index) => (
              <motion.div
                className="night-plan-item"
                key={item.step}
                initial={{ opacity: 0, x: index % 2 === 0 ? -24 : 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.55, delay: index * 0.1 }}
              >
                <span>{item.step}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="landing-food landing-shell">
        <motion.div
          className="landing-food-image"
          initial={{ opacity: 0, scale: 1.08 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-120px' }}
          transition={{ duration: 1 }}
        >
          <img src="https://images.unsplash.com/photo-1544025162-d76694265947?w=1200&h=1300&fit=crop&auto=format" alt="Food and drinks at Burtex Games" />
          <span className="landing-food-stamp">Fuel<br />the fun</span>
        </motion.div>
        <div className="landing-food-copy">
          <p className="section-label">Keep the good times going</p>
          <h2 className="landing-section-title">Good games.<br /><em>Great bites.</em></h2>
          <p>From quick snacks between frames to a proper table full of friends, our café keeps the energy up and the conversation going.</p>
          <div className="landing-detail-list">
            <span><b>01</b> Easy-to-share plates</span>
            <span><b>02</b> Cold drinks &amp; fresh pours</span>
            <span><b>03</b> A table for every kind of crew</span>
          </div>
          <a className="landing-arrow-link" href="#visit">Come hungry <span>→</span></a>
        </div>
      </section>

      <section className="landing-proof landing-shell" id="why-us">
        <div className="landing-proof-copy">
          <p className="section-label">The Let&apos;s Bowl difference</p>
          <h2 className="landing-section-title">Come for the game.<br /><em>Stay for the feeling.</em></h2>
          <p>Good spaces make good nights. We sweat the details so you can focus on the people, the play and the moments in between.</p>
        </div>
        <div className="landing-stats">
          {reasons.map((reason) => (
            <div className="landing-stat" key={reason.label}>
              <strong>{reason.value}</strong>
              <span>{reason.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="landing-quote">
        <div className="landing-shell">
          <p className="section-label">The word on the street</p>
          <blockquote>“The kind of place where one game turns into three hours — and nobody wants to leave.”</blockquote>
          <div className="landing-quote-author"><span /> Priya S. · Chennai</div>
        </div>
      </section>

      <section className="landing-details landing-shell">
        <div>
          <p className="section-label">Before you arrive</p>
          <h2 className="landing-section-title">Everything<br /><em>you need to know.</em></h2>
        </div>
        <div className="landing-faq-list">
          <details open>
            <summary>When are you open? <span>+</span></summary>
            <p>We are open every day from 11:00 AM to 11:00 PM, with the best atmosphere after sunset.</p>
          </details>
          <details>
            <summary>Where can we find you? <span>+</span></summary>
            <p>We are located on Thoraipakkam OMR in Chennai, with easy access for groups and families.</p>
          </details>
          <details>
            <summary>Who is it for? <span>+</span></summary>
            <p>Friends, families, first dates, work crews and anyone who believes a little competition makes a night better.</p>
          </details>
        </div>
      </section>

      <section className="landing-cta" id="visit">
        <div className="landing-cta-image" />
        <div className="landing-shell landing-cta-content">
          <p className="section-label">Your next plan is sorted</p>
          <h2 className="landing-section-title">Meet us<br /><em>on the lanes.</em></h2>
          <p>Thoraipakkam OMR, Chennai<br />Open daily · 11:00 AM – 11:00 PM</p>
          <div className="landing-actions">
            <a className="btn-primary" href="tel:+919999999999">Call to plan your visit <span>↗</span></a>
            <a className="landing-text-link" href="mailto:hello@burtexgames.in">hello@burtexgames.in</a>
          </div>
        </div>
      </section>
    </div>
  );
}
