// src/components/ContactForm.jsx

import { useState } from "react";

function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    service: "",
    date: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Backend submission logic will be added later.
    console.log("Appointment request submitted:", formData);
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>

      <div className="contact-form-group">
        <label htmlFor="fullName" className="contact-form-label">
          Full Name
        </label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          className="contact-form-input"
          value={formData.fullName}
          onChange={handleChange}
          required
        />
      </div>

      <div className="contact-form-group">
        <label htmlFor="email" className="contact-form-label">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="contact-form-input"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>

      <div className="contact-form-group">
        <label htmlFor="phone" className="contact-form-label">
          Phone Number
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          className="contact-form-input"
          value={formData.phone}
          onChange={handleChange}
          required
        />
      </div>

      <div className="contact-form-group">
        <label htmlFor="service" className="contact-form-label">
          Service
        </label>
        <select
          id="service"
          name="service"
          className="contact-form-select"
          value={formData.service}
          onChange={handleChange}
          required
        >
          <option value="">Select a service</option>
          <option value="Bridal Makeup">Bridal Makeup</option>
          <option value="Party Makeup">Party Makeup</option>
          <option value="Hair Styling">Hair Styling</option>
          <option value="Beauty Services">Beauty Services</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <div className="contact-form-group">
        <label htmlFor="date" className="contact-form-label">
          Preferred Date
        </label>
        <input
          type="date"
          id="date"
          name="date"
          className="contact-form-input"
          value={formData.date}
          onChange={handleChange}
          required
        />
      </div>

      <div className="contact-form-group">
        <label htmlFor="message" className="contact-form-label">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows="5"
          className="contact-form-textarea"
          value={formData.message}
          onChange={handleChange}
        ></textarea>
      </div>

      <button type="submit" className="contact-form-submit-btn">
        Book Appointment
      </button>

    </form>
  );
}

export default ContactForm;