// src/pages/Contact.jsx

import { Link } from "react-router-dom";
import "./Contact.css";
import ContactForm from "../components/ContactForm";

function Contact() {
  return (
    <main className="contact-page">

      {/* 1. Hero / Introduction */}
      <section className="contact-hero">
        <h1 className="contact-hero-heading">Let's Create Your Glow.</h1>
        <p className="contact-hero-text">
          Reach out to The Glow Affairs for beauty, makeup, hair, and
          skincare appointments. We'd love to help you plan your next
          visit.
        </p>
      </section>

      {/* 2. Contact Information */}
      <section className="contact-info">
        <h2 className="contact-section-heading">Contact Information</h2>

        <ul className="contact-info-list">
          <li>
            <span className="contact-info-label">Studio</span>
            <span className="contact-info-value">The Glow Affairs</span>
          </li>
          <li>
            <span className="contact-info-label">Location</span>
            <span className="contact-info-value">Udaipur, Rajasthan</span>
          </li>
          <li>
            <span className="contact-info-label">Phone</span>
            <span className="contact-info-value">+91 XXXXX XXXXX</span>
          </li>
          <li>
            <span className="contact-info-label">Email</span>
            <span className="contact-info-value">hello@theglowaffairs.com</span>
          </li>
        </ul>
      </section>

      {/* 3. Appointment Section */}
      <section className="contact-appointment">
        <h2 className="contact-section-heading">Book an Appointment</h2>
        <p className="contact-appointment-text">
          Share a few details about what you're looking for, and our team
          will get back to you to confirm your appointment.
        </p>

        <ContactForm />
      </section>

      {/* 4. Visit Us */}
      <section className="contact-visit">
        <h2 className="contact-section-heading">Visit Us</h2>
        <p className="contact-visit-text">
          Our studio is based in Udaipur, Rajasthan. We look forward to
          welcoming you and helping you feel your most confident, radiant
          self.
        </p>
      </section>

      {/* 5. Final CTA */}
      <section className="contact-final-cta">
        <h2 className="contact-final-cta-heading">Your Glow Awaits.</h2>
        <Link to="/services" className="contact-final-cta-btn">
          Explore Our Services
        </Link>
      </section>

    </main>
  );
}

export default Contact;