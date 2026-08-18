// src/pages/Blog.jsx

import { Link } from "react-router-dom";
import "./Blog.css";

// Sample/placeholder articles — replace with real content and images later
const featuredArticle = {
  title: "Your Bridal Beauty Timeline",
  category: "Bridal",
  excerpt:
    "A helpful guide to preparing your skin, hair, and makeup in the weeks leading up to your wedding day.",
};

const articles = [
  {
    title: "What Is a Korean Glass Skin Facial?",
    category: "Skincare",
    excerpt:
      "A simple look at this popular multi-step facial and what the experience is generally like.",
  },
  {
    title: "Hydra Facial: What to Expect",
    category: "Skincare",
    excerpt:
      "A guide to the general salon experience and who might enjoy trying this treatment.",
  },
  {
    title: "Hair Spa vs Hair Treatment",
    category: "Hair",
    excerpt:
      "Understanding the general difference between a hair spa session and a targeted hair treatment.",
  },
  {
    title: "How to Prepare for Your Salon Appointment",
    category: "Beauty",
    excerpt:
      "Simple, practical tips to help you get the most out of your next salon visit.",
  },
  {
    title: "The Glow Affairs Beauty Ritual",
    category: "Beauty",
    excerpt:
      "An editorial look at personalized beauty, self-care, and what confidence means to us.",
  },
];

const categories = ["Beauty", "Makeup", "Hair", "Skincare", "Bridal"];

function Blog() {
  return (
    <main className="blog-page">

      {/* 1. Hero */}
      <section className="blog-hero">
        <h1 className="blog-hero-heading">The Glow Journal</h1>
        <p className="blog-hero-text">
          Notes on beauty, self-care, and confidence from The Glow Affairs —
          our journal of guides, insights, and stories from the studio.
        </p>
      </section>

      {/* 2. Featured Article */}
      <section className="blog-featured">
        <div className="blog-featured-image-placeholder"></div>
        <div className="blog-featured-content">
          <span className="blog-article-category">
            {featuredArticle.category}
          </span>
          <h2 className="blog-featured-title">{featuredArticle.title}</h2>
          <p className="blog-featured-excerpt">{featuredArticle.excerpt}</p>
          <span className="blog-featured-tag">Sample Article</span>
        </div>
      </section>

      {/* 3. Article Grid */}
      <section className="blog-articles">
        <h2 className="blog-section-heading">More From the Journal</h2>

        <div className="blog-articles-grid">
          {articles.map((article) => (
            <article className="blog-article-card" key={article.title}>
              <div className="blog-article-image-placeholder"></div>
              <span className="blog-article-category">
                {article.category}
              </span>
              <h3 className="blog-article-title">{article.title}</h3>
              <p className="blog-article-excerpt">{article.excerpt}</p>
              <span className="blog-article-tag">Sample Article</span>
            </article>
          ))}
        </div>
      </section>

      {/* 4. Categories */}
      <section className="blog-categories">
        <h2 className="blog-section-heading">Browse by Category</h2>
        <ul className="blog-categories-list">
          {categories.map((category) => (
            <li key={category} className="blog-category-item">
              {category}
            </li>
          ))}
        </ul>
      </section>

      {/* 5. Final CTA */}
      <section className="blog-final-cta">
        <h2 className="blog-final-cta-heading">Ready for Your Glow?</h2>
        <Link to="/contact" className="blog-final-cta-btn">
          Book an Appointment
        </Link>
      </section>

    </main>
  );
}

export default Blog;