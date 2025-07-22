import React, { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhoneAlt, FaArrowUp } from "react-icons/fa";
import "./Footer.css"; // Import the CSS file

const currentYear = new Date().getFullYear();

const Footer = () => {
  const [showTop, setShowTop] = useState(false);
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("darkMode");
    if (saved === "true") setDark(true);

    const handleScroll = () => setShowTop(window.scrollY > 200);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("darkMode", "true");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("darkMode", "false");
    }
  }, [dark]);

  const handleSubscribe = (e) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setMsg("Please enter a valid email address.");
      setTimeout(() => setMsg(""), 2500);
      return;
    }
    setMsg("Thank you for subscribing!");
    setEmail("");
    setTimeout(() => setMsg(""), 2500);
  };

  return (
    <footer className="footer">
      <div className="footer-grid">
        <div className="footer-branding">
          <h2>Pawsitive</h2>
          <p>Caring for your pets, one paw at a time.</p>
        </div>
        <div className="footer-contact">
          <h3>Contact</h3>
          <div className="contact-item">
            <FaEnvelope className="icon blue" aria-hidden="true" />
            <a href="mailto:divyasinha111@gmail.com">divyasinha111@gmail.com</a>
          </div>
          <div className="contact-item">
            <FaPhoneAlt className="icon green" aria-hidden="true" />
            <a href="tel:+917667707362">+91 76677 07362</a>
          </div>
        </div>
        <div className="footer-social">
          <h3>Connect</h3>
          <div className="social-icons">
            <a href="https://github.com/Divyasinha111" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover-white">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/divya-sinha-34a6b6270/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover-blue">
              <FaLinkedin />
            </a>
            <a href="mailto:divyasinha111@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="Email" className="hover-red">
              <FaEnvelope />
            </a>
            <a href="tel:+917667707362" aria-label="Phone" className="hover-green">
              <FaPhoneAlt />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-newsletter-links">
        <form onSubmit={handleSubscribe} className="newsletter-form">
          <input
            type="email"
            aria-label="Email address for newsletter subscription"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Subscribe to our newsletter"
            className="newsletter-input"
          />
          <button type="submit" className="subscribe-btn">Subscribe</button>
          {msg && <span className="subscribe-msg">{msg}</span>}
        </form>

        <nav className="footer-links">
          <a href="/" className="hover-white">Home</a>
          <a href="/services" className="hover-white">Services</a>
          <a href="/cat" className="hover-white">Adoption</a>
          <a href="/about" className="hover-white">About Us</a>
        </nav>

        <button
          aria-label="Toggle dark mode"
          onClick={() => setDark((d) => !d)}
          className="dark-mode-btn"
        >
          {dark ? "Light Mode" : "Dark Mode"}
        </button>
      </div>

      <div className="footer-privacy">
        <a href="#" className="hover-white">Privacy Policy</a>
        <a href="#" className="hover-white">Terms of Service</a>
      </div>

      <div className="footer-copyright">
        Made with <span className="heart">❤️</span> by Divya Sinha © {currentYear} Pawsitive. All rights reserved.
      </div>

      {showTop && (
        <button
          aria-label="Scroll to top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="scroll-top-btn"
        >
          <FaArrowUp size={20} />
        </button>
      )}
    </footer>
  );
};

export default Footer;
