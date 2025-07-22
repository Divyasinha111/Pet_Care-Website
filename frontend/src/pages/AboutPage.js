import React from "react";
import "./AboutPage.css";

const AboutPage = () => {
  return (
    <main className="about-main">
      {/* Hero Section */}
      <section className="about-hero">
        <h1 className="about-title">About Us</h1>
        <p className="about-tagline">Where Every Paw Finds a Home</p>
      </section>

      {/* Mission Statement */}
      <section className="about-section about-mission">
        <h2 className="about-heading">Our Mission</h2>
        <p>
          At <span className="about-brand">Pawsitive</span>, our mission is to
          connect loving families with pets in need, while providing trusted
          resources and a supportive community for all pet lovers. We believe
          every animal deserves a safe, happy home and every adopter deserves
          guidance and support on their journey.
        </p>
      </section>

      {/* Features/Services */}
      <section className="about-section about-features">
        <h2 className="about-heading">What We Offer</h2>
        <div className="about-features-grid">
          <div className="about-card">
            <img
              src="/images/adopt.jpg"
              alt="Adopt a Pet"
              className="about-card-img"
            />
            <h3>Pet Adoption Listings</h3>
            <p>
              Browse available pets, read their stories, and find your perfect
              companion. Our listings are updated regularly with animals looking
              for loving homes.
            </p>
          </div>
          <div className="about-card">
            <img
              src="/images/pethealth.jpg"
              alt="Pet Care"
              className="about-card-img"
            />
            <h3>Pet Care Resources</h3>
            <p>
              Access expert advice, health tips, and training guides to help you
              care for your furry, feathered, or finned friends at every stage
              of life.
            </p>
          </div>
          <div className="about-card">
            <img
              src="/images/gallery.jpg"
              alt="Interactive Features"
              className="about-card-img"
            />
            <h3>Interactive Features</h3>
            <p>
              Enjoy pet galleries, interactive pet cards, and easy-to-use
              contact forms to connect with our team and community.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="about-section about-why">
        <h2 className="about-heading">Why Choose Pawsitive?</h2>
        <ul className="about-why-list">
          <li>Responsive, mobile-friendly design for easy browsing anywhere</li>
          <li>Secure backend powered by Node.js, Express.js, and MongoDB</li>
          <li>User-first UI with clear navigation and helpful features</li>
          <li>Compassionate, knowledgeable support team</li>
          <li>Community-driven: share your stories, reviews, and photos</li>
        </ul>
      </section>

      {/* Team Introduction */}
      <section className="about-section about-team">
        <h2 className="about-heading">Meet Our Team</h2>
        <div className="about-team-grid">
          <div className="about-team-card">
            <img
              src="/images/team1.jpg"
              alt="Dr. Maya Sharma"
              className="about-team-img"
            />
            <h3>Dr. Maya Sharma</h3>
            <p className="about-team-role">Founder & Veterinarian</p>
            <p>
              Passionate about animal welfare and community education, Dr. Maya
              leads Pawsitive with heart and expertise.
            </p>
          </div>
          <div className="about-team-card">
            <img
              src="/images/team2.jpg"
              alt="Alex Patel"
              className="about-team-img"
            />
            <h3>Alex Patel</h3>
            <p className="about-team-role">Adoption Coordinator</p>
            <p>
              Alex connects pets with families and ensures every adoption is a
              perfect match.
            </p>
          </div>
          <div className="about-team-card">
            <img
              src="/images/team3.jpg"
              alt="Priya Singh"
              className="about-team-img"
            />
            <h3>Priya Singh</h3>
            <p className="about-team-role">Community Manager</p>
            <p>
              Priya builds our online community and supports users with
              resources and events.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="about-section about-testimonials">
        <h2 className="about-heading">Success Stories</h2>
        <div className="about-testimonials-grid">
          <div className="about-testimonial-card">
            <p className="about-quote">
              “We found our best friend through Pawsitive! The process was
              smooth and the team was so supportive.”
            </p>
            <p className="about-cite">— The Mehra Family</p>
          </div>
          <div className="about-testimonial-card">
            <p className="about-quote">
              “The pet care guides helped us so much as first-time adopters.
              Thank you, Pawsitive!”
            </p>
            <p className="about-cite">— Ritu & Aman</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="about-section about-cta">
        <h2 className="about-heading">Ready to Make a Difference?</h2>
        <div className="about-cta-buttons">
          <a href="/CatAdopt" className="about-btn about-btn-orange">
            Adopt a Pet
          </a>
          <a href="/contact" className="about-btn about-btn-blue">
            Contact Us
          </a>
          <a href="/donate" className="about-btn about-btn-green">
            Donate
          </a>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
