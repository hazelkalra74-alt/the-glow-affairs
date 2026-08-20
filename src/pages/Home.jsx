// src/pages/Home.jsx

import { Link } from "react-router-dom";
import ServiceCard from "../components/servicecard";
import heroImage from "../assets/hero.png";
import "./Home.css";

function Home() {
  return (
    <main className="home">

      {/* 1. Hero Section */}
      <section className="home-hero">
        <div className="home-hero-content">
          <h1 className="home-hero-heading">
            Discover Your Most Radiant Self
          </h1>
          <p className="home-hero-text">
            The Glow Affairs is Udaipur's premier destination for bridal
            makeup, hairstyling, and personalized beauty experiences —
            crafted with elegance, precision, and care.
          </p>
          <div className="home-hero-buttons">
            <Link to="/contact" className="home-hero-btn-primary">
              Book an Appointment
            </Link>
            <Link to="/services" className="home-hero-btn-secondary">
              Explore Services
            </Link>
          </div>
        </div>

        <div className="home-hero-image-wrapper">
          <img
            src={heroImage}
            alt="The Glow Affairs beauty studio"
            className="home-hero-image"
          />
        </div>
      </section>

      {/* 2. Brand Introduction */}
      <section className="home-intro">
        <h2 className="home-section-heading">The Glow Affairs</h2>
        <p className="home-intro-text">
          Based in the heart of Udaipur, Rajasthan, The Glow Affairs is more
          than a beauty studio — it's a personalized experience built around
          confidence, elegance, and individuality. Every service is tailored
          to celebrate your natural beauty, whether it's your wedding day or
          a moment just for yourself.
        </p>
      </section>

      {/* 3. Services Preview */}
      <section className="home-services">
        <h2 className="home-section-heading">Our Signature Services</h2>

        <div className="home-services-grid">
          <ServiceCard
            title="Bridal Makeup"
            description="Timeless, radiant bridal looks tailored to your story."
            price="Starting at ₹8,000"
            image={heroImage}
          />
          <ServiceCard
            title="Party Makeup"
            description="Glamorous looks for every celebration and event."
            price="Starting at ₹3,500"
            image={heroImage}
          />
          <ServiceCard
            title="Hair Styling"
            description="Elegant styling for weddings, parties, and shoots."
            price="Starting at ₹2,000"
            image={heroImage}
          />
          <ServiceCard
            title="Beauty Services"
            description="Facials, skincare, and treatments for a natural glow."
            price="Starting at ₹1,500"
            image={heroImage}
          />
        </div>

        <div className="home-services-link-wrapper">
          <Link to="/services" className="home-services-link">
            View All Services
          </Link>
        </div>
      </section>

      {/* 4. Why The Glow Affairs */}
      <section className="home-why">
        <h2 className="home-section-heading">Why The Glow Affairs</h2>

        <div className="home-why-grid">
          <div className="home-why-item">
            <h3 className="home-why-title">Personalized Experience</h3>
            <p className="home-why-text">
              Every service is tailored to your features, style, and
              occasion.
            </p>
          </div>

          <div className="home-why-item">
            <h3 className="home-why-title">Professional Service</h3>
            <p className="home-why-text">
              Skilled artists with years of experience in bridal and beauty
              makeup.
            </p>
          </div>

          <div className="home-why-item">
            <h3 className="home-why-title">Premium Products</h3>
            <p className="home-why-text">
              We use only trusted, high-quality products for lasting
              results.
            </p>
          </div>

          <div className="home-why-item">
            <h3 className="home-why-title">Attention to Detail</h3>
            <p className="home-why-text">
              From the first consultation to the final look, every detail
              matters.
            </p>
          </div>
        </div>
      </section>

      {/* 5. Testimonials */}
      <section className="home-testimonials">
        <h2 className="home-section-heading">What Our Clients Say</h2>

        <div className="home-testimonials-grid">
          <div className="home-testimonial-card">
            <p className="home-testimonial-text">
              "My bridal makeup was absolutely stunning. I felt like the
              best version of myself on my wedding day."
            </p>
            <p className="home-testimonial-author">— Sample Client, Udaipur</p>
          </div>

          <div className="home-testimonial-card">
            <p className="home-testimonial-text">
              "The team was so professional and attentive. The whole
              experience felt luxurious and personal."
            </p>
            <p className="home-testimonial-author">— Sample Client, Udaipur</p>
          </div>

          <div className="home-testimonial-card">
            <p className="home-testimonial-text">
              "Best hairstyling I've ever had for an event. Highly
              recommend The Glow Affairs."
            </p>
            <p className="home-testimonial-author">— Sample Client, Udaipur</p>
          </div>
        </div>
      </section>

      {/* 6. Final Call To Action */}
      <section className="home-final-cta">
        <h2 className="home-final-cta-heading">
          Ready to Feel Your Most Beautiful?
        </h2>
        <p className="home-final-cta-text">
          Book your appointment with The Glow Affairs today and experience
          beauty, elegance, and confidence — redefined.
        </p>
        <Link to="/contact" className="home-final-cta-btn">
          Book an Appointment
        </Link>
      </section>

    </main>
  );
}

export default Home;