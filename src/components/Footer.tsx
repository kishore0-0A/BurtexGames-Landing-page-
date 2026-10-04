import { Link } from 'react-router';

export default function Footer() {
  return (
    <footer className="landing-footer">
      <div className="landing-shell landing-footer-top">
        <div>
          <Link to="/" className="landing-logo">
            <span>BG</span>
            <div><strong>BURTEX GAMES</strong><small>Chennai</small></div>
          </Link>
          <p>Make some noise.<br />Make it a night.</p>
        </div>
        <div className="landing-footer-links">
          <a href="#experiences">Experiences</a>
          <a href="#why-us">Why us</a>
          <a href="#visit">Visit us</a>
          <a href="mailto:hello@burtexgames.in">Contact</a>
        </div>
        <div className="landing-footer-address">
          <span>Find us</span>
          <p>Thoraipakkam OMR<br />Chennai – 600097</p>
        </div>
      </div>
      <div className="landing-shell landing-footer-bottom">
        <span>© 2026 Burtex Games Chennai</span>
        <span>Open daily · 11 AM – 11 PM</span>
      </div>
    </footer>
  );
}
