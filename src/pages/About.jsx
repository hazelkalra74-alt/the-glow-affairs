// src/pages/About.jsx

import { Link } from "react-router-dom";
import "./About.css";

function About() {
  return (
    <main className="about-page">

      {/* 1. Hero / Introduction */}
      <section className="about-hero">
        <h1 className="about-hero-heading">Where Beauty Meets Confidence</h1>
        <p className="about-hero-text">
          The Glow Affairs is a premium beauty and makeup studio in Udaipur,
          Rajasthan, dedicated to helping every client look and feel their
          most radiant, confident self.
        </p>
      </section>

      {/* 2. Our Story */}
      <section className="about-story">
        <h2 className="about-section-heading">Our Story</h2>
        <p className="about-story-text">
          The Glow Affairs began with a simple belief: beauty should feel
          personal, not generic. We wanted to create a space where clients
          could feel genuinely cared for — where every look is shaped around
          who they are, not a one-size-fits-all template. Over time, that
          idea grew into a studio built on trust, craft, and a deep respect
          for each client's individuality.
        </p>
      </section>

      {/* 3. Our Philosophy */}
      <section className="about-philosophy">
        <h2 className="about-section-heading">Our Philosophy</h2>

        <div className="about-philosophy-grid">
          <div className="about-philosophy-item">
            <h3 className="about-philosophy-title">Personalized Beauty</h3>
            <p className="about-philosophy-text">
              Every service is shaped around your features, style, and the
              moment you're preparing for — never a fixed formula.
            </p>
          </div>

          <div className="about-philosophy-item">
            <h3 className="about-philosophy-title">Attention to Detail</h3>
            <p className="about-philosophy-text">
              From the first consultation to the final touch, we take care
              with every small decision that shapes your overall look.
            </p>
          </div>

          <div className="about-philosophy-item">
            <h3 className="about-philosophy-title">Confidence & Elegance</h3>
            <p className="about-philosophy-text">
              Our goal isn't just a beautiful look — it's helping you feel
              genuinely confident and at ease in your own skin.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Why The Glow Affairs */}
      <section className="about-why">
        <h2 className="about-section-heading">Why The Glow Affairs</h2>
        <p className="about-why-text">
          What sets The Glow Affairs apart is the experience as a whole —
          personalized service, a premium approach to beauty, careful
          attention to detail, and a warm, welcoming environment where you
          can relax and enjoy the process, not just the result.
        </p>
      </section>

      {/* 5. Location */}
      <section className="about-location">
        <h2 className="about-section-heading">Visit Us</h2>
        <p className="about-location-text">
          The Glow Affairs is based in Udaipur, Rajasthan. If you're ready
          to plan your visit or have questions about our services, we'd
          love to hear from you.
        </p>
        <Link to="/contact" className="about-location-link">
          Get in Touch
        </Link>
      </section>

      {/* 6. Final CTA */}
      <section className="about-final-cta">
        <h2 className="about-final-cta-heading">Your Glow Starts Here.</h2>
        <Link to="/contact" className="about-final-cta-btn">
          Book an Appointment
        </Link>
      </section>

    </main>
  );
}

export default About;