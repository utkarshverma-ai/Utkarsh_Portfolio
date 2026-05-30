import "./styles/Testimonials.css";

const Testimonials = () => {
  return (
    <div className="testimonials-section section-container">
      <h2>
        Kind <span>words</span>
      </h2>
      <div className="testimonials-empty">
        <span className="testimonials-quote" aria-hidden="true">
          &ldquo;
        </span>
        <p className="testimonials-soon">
          Great things are being said &mdash; check back soon.
        </p>
        <span className="testimonials-tag">Testimonials coming soon</span>
      </div>
    </div>
  );
};

export default Testimonials;
