import { useEffect, useState } from 'react';
import { Link } from 'react-router';

const navLinks = [
  { label: 'Experiences', href: '#experiences' },
  { label: 'Why us', href: '#why-us' },
  { label: 'Visit', href: '#visit' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`landing-nav ${scrolled ? 'landing-nav-scrolled' : ''}`}>
      <div className="landing-shell landing-nav-inner">
        <Link to="/" className="landing-logo">
          <span>BG</span>
          <div>
            <strong>BURTEX GAMES</strong>
            <small>Chennai</small>
          </div>
        </Link>
        <nav className="landing-nav-links">
          {navLinks.map((link) => (
            <a href={link.href} key={link.label}>{link.label}</a>
          ))}
        </nav>
        <a className="landing-nav-contact" href="tel:+919999999999">Call us <span>↗</span></a>
      </div>
    </header>
  );
}
