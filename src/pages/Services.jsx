// src/pages/Services.jsx

import { Link } from "react-router-dom";
import ServiceCard from "../components/servicecard";
import "./Services.css";

function Services() {
  return (
    <main className="services-page">

      {/* 1. Hero */}
      <section className="services-hero">
        <h1 className="services-hero-heading">Beauty, Reimagined.</h1>
        <p className="services-hero-text">
          From everyday essentials to premium treatments, explore the full
          range of beauty, hair, and skincare experiences at The Glow
          Affairs — all under one roof in Udaipur, Rajasthan.
        </p>
        <Link to="/contact" className="services-hero-btn">
          Book an Appointment
        </Link>
      </section>

      {/* 2. Services Intro */}
      <section className="services-intro">
        <p className="services-intro-text">
          Whether you're here for a quick touch-up or a complete
          transformation, our studio brings together everyday beauty
          care and premium, modern treatments — each delivered with
          the same attention to detail and personal care.
        </p>
      </section>

      {/* 3. Makeup */}
      <section className="services-category">
        <span className="services-eyebrow">Makeup</span>
        <h2 className="services-category-heading">Makeup Artistry</h2>
        <p className="services-category-intro">
          Professional makeup tailored to your features and the occasion,
          from soft everyday looks to full glam.
        </p>

        <div className="services-grid">
          <ServiceCard
            title="Bridal Makeup"
            description="Timeless, long-lasting bridal looks crafted around your story."
            price=""
            image=""
          />
          <ServiceCard
            title="Party Makeup"
            description="Glamorous, event-ready makeup for celebrations and nights out."
            price=""
            image=""
          />
          <ServiceCard
            title="Engagement & Occasion Makeup"
            description="Elegant makeup designed for engagements and special milestones."
            price=""
            image=""
          />
        </div>

        <p className="services-also-available">
          Also available: everyday makeup, photoshoot makeup, and touch-up
          services.
        </p>
      </section>

      {/* 4. Hair */}
      <section className="services-category">
        <span className="services-eyebrow">Hair</span>
        <h2 className="services-category-heading">Hair Care & Styling</h2>
        <p className="services-category-intro">
          From precision cuts to nourishing treatments, our hair services
          are designed around the health and style of your hair.
        </p>

        <div className="services-grid">
          <ServiceCard
            title="Hair Styling"
            description="Elegant styling for everyday wear, events, and special occasions."
            price=""
            image=""
          />
          <ServiceCard
            title="Haircuts"
            description="Precision cuts tailored to your face shape and personal style."
            price=""
            image=""
          />
          <ServiceCard
            title="Hair Treatments"
            description="Nourishing treatments that restore strength and shine to your hair."
            price=""
            image=""
          />
        </div>

        <p className="services-also-available">
          Also available: professional hair-care consultations and
          maintenance services.
        </p>
      </section>

      {/* 5. Premium Hair & Spa Treatments */}
      <section className="services-category services-category-premium">
        <span className="services-eyebrow">Premium</span>
        <h2 className="services-category-heading">
          Premium Hair & Spa Treatments
        </h2>
        <p className="services-category-intro">
          A step beyond everyday hair care — deeply nourishing treatments
          designed for lasting results.
        </p>

        <div className="services-grid">
          <ServiceCard
            title="Korean Hair Spa"
            description="A specialized, deeply nourishing hair spa treatment for healthier hair."
            price=""
            image=""
          />
          <ServiceCard
            title="Specialized Hair Spa"
            description="Targeted spa treatments addressing specific hair and scalp needs."
            price=""
            image=""
          />
        </div>
      </section>

      {/* 6. Facial & Skincare */}
      <section className="services-category">
        <span className="services-eyebrow">Skincare</span>
        <h2 className="services-category-heading">Facial & Skincare</h2>
        <p className="services-category-intro">
          Professional facials and skincare treatments to refresh, hydrate,
          and care for your skin.
        </p>

        <div className="services-grid">
          <ServiceCard
            title="Classic Facial"
            description="A relaxing, professional facial for refreshed, healthy-looking skin."
            price=""
            image=""
          />
          <ServiceCard
            title="Korean Glass Skin Facial"
            description="A premium multi-step facial designed for a smooth, radiant glow."
            price=""
            image=""
          />
          <ServiceCard
            title="Hydra Facial"
            description="A deeply hydrating facial treatment for refreshed, nourished skin."
            price=""
            image=""
          />
        </div>

        <p className="services-also-available">
          Also available: additional professional skincare treatments —
          ask our team for recommendations suited to your skin.
        </p>
      </section>

      {/* 7. Beauty & Self-Care */}
      <section className="services-category">
        <span className="services-eyebrow">Self-Care</span>
        <h2 className="services-category-heading">Beauty & Self-Care</h2>
        <p className="services-category-intro">
          The everyday essentials that keep you looking and feeling your
          best.
        </p>

        <div className="services-grid">
          <ServiceCard
            title="Manicure & Pedicure"
            description="Classic and gel manicures and pedicures for well-groomed hands and feet."
            price=""
            image=""
          />
          <ServiceCard
            title="Waxing & Threading"
            description="Precise, professional waxing and threading services."
            price=""
            image=""
          />
          <ServiceCard
            title="Bleach & Cleanup"
            description="Quick refresh treatments for smoother, brighter-looking skin."
            price=""
            image=""
          />
        </div>
      </section>

      {/* 8. Premium Treatments Feature */}
      <section className="services-premium-feature">
        <span className="services-eyebrow services-eyebrow-light">
          Signature Treatments
        </span>
        <h2 className="services-premium-feature-heading">
          Our Most-Loved Premium Treatments
        </h2>
        <p className="services-premium-feature-text">
          For clients looking to elevate their routine, these treatments
          are among our most requested — the Korean Glass Skin Facial,
          the Hydra Facial, and the Korean Hair Spa each offer a more
          indulgent, results-focused experience.
        </p>
        <Link to="/contact" className="services-premium-feature-btn">
          Enquire About Premium Treatments
        </Link>
      </section>

      {/* 9. Bridal & Special Occasions */}
      <section className="services-bridal">
        <span className="services-eyebrow">Bridal & Occasions</span>
        <h2 className="services-bridal-heading">
          Bridal & Special Occasion Beauty
        </h2>
        <p className="services-bridal-text">
          For weddings, engagements, and milestone celebrations, we offer
          complete beauty preparation — bringing together makeup, hair
          styling, and skincare into one seamless, personalized experience
          for your special day.
        </p>
        <Link to="/contact" className="services-bridal-btn">
          Plan Your Bridal Look
        </Link>
      </section>

      {/* 10. Final CTA */}
      <section className="services-final-cta">
        <h2 className="services-final-cta-heading">Ready for Your Glow?</h2>
        <Link to="/contact" className="services-final-cta-btn">
          Book an Appointment
        </Link>
      </section>

    </main>
  );
} 

export default Services;