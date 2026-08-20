// src/components/servicecard.jsx

import { Link } from "react-router-dom";

function ServiceCard({ title, description, price, image }) {
  return (
    <div className="service-card">
      <img
        src={image}
        alt={title}
        className="service-card-image"
      />

      <div className="service-card-content">
        <h3 className="service-card-title">{title}</h3>

        <p className="service-card-description">{description}</p>

        <p className="service-card-price">{price}</p>

        <Link to="/contact" className="service-card-btn">
          Book Now
        </Link>
      </div>
    </div>
  );
}

export default ServiceCard;