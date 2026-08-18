import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <p className="footer-brand">The Glow Affairs</p>

        <p className="footer-description">
          Beauty, elegance and confidence.
        </p>

        <p className="footer-location">
          Udaipur, Rajasthan
        </p>

        <div className="footer-nav">
          <Link to="/" className="footer-nav-link">Home</Link>
          <Link to="/about" className="footer-nav-link">About</Link>
          <Link to="/services" className="footer-nav-link">Services</Link>
          <Link to="/blog" className="footer-nav-link">Blog</Link>
          <Link to="/contact" className="footer-nav-link">Contact</Link>
        </div>

        <div className="footer-social">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social-link"
          >
            Instagram
          </a>

          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social-link"
          >
            Facebook
          </a>
        </div>

        <p className="footer-copyright">
          &copy; {new Date().getFullYear()} The Glow Affairs. All rights reserved.
        </p>

      </div>
    </footer>
  );
}

export default Footer;
