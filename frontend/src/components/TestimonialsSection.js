import React from 'react';
import './TestimonialsSection.css';

function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah M.",
      feedback: "Adopting from Pawsitive was the best decision ever. The team was so helpful and loving!",
    },
    {
      name: "Rajeev K.",
      feedback: "Our puppy came groomed, happy, and healthy. We’re so grateful!",
    },
    {
      name: "Emily L.",
      feedback: "The adoption process was smooth and the staff genuinely cared. Highly recommend!",
    },
  ];

  return (
    <section className="testimonials">
      <h2>What Pet Parents Say</h2>
      <div className="testimonial-cards">
        {testimonials.map((t, index) => (
          <div className="testimonial-card" key={index}>
            <p className="feedback">“{t.feedback}”</p>
            <p className="name">— {t.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TestimonialsSection;
