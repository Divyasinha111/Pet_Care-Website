import React, { useState } from "react";

const servicesList = [
  {
    title: "Pet Adoption",
    desc: "Find your perfect companion from our wide range of pets.",
    icon: "🐾",
    category: "Adoption",
  },
  {
    title: "Pet Grooming",
    desc: "Professional grooming to keep your pet looking and feeling great.",
    icon: "✂️",
    category: "Care",
  },
  {
    title: "Pet Training",
    desc: "Expert trainers for obedience, tricks, and socialization.",
    icon: "🎓",
    category: "Care",
  },
  {
    title: "Daycare & Boarding",
    desc: "Safe, fun, and loving environment for your pet while you’re away.",
    icon: "🏠",
    category: "Care",
  },
  {
    title: "Pet Health & Wellness",
    desc: "Routine checkups, vaccinations, and health advice.",
    icon: "🩺",
    category: "Health",
  },
  {
    title: "Custom Pet Food",
    desc: "Tailored nutrition plans and premium pet food.",
    icon: "🍖",
    category: "Health",
  },
  {
    title: "Pet Toys & Accessories",
    desc: "A curated selection of toys and accessories for all pets.",
    icon: "🧸",
    category: "Shop",
  },
  {
    title: "Pet Spa",
    desc: "Relaxing spa treatments for your furry friends.",
    icon: "🛁",
    category: "Care",
  },
];

const testimonials = [
  {
    quote:
      "The adoption process was smooth and the staff truly care about the animals!",
    name: "Priya S.",
  },
  {
    quote: "My dog loves the daycare and always comes home happy and clean!",
    name: "Rahul M.",
  },
  {
    quote: "The trainers helped my cat adjust so well. Highly recommend!",
    name: "Aditi K.",
  },
];

const faqs = [
  {
    q: "How do I book a service?",
    a: "You can book any service using the form below or by calling our helpline.",
  },
  {
    q: "What are your working hours?",
    a: "We are open from 9am to 8pm, 7 days a week.",
  },
  {
    q: "Do you offer emergency care?",
    a: "Yes, we have 24/7 emergency support for all registered pets.",
  },
];

const categories = ["All", "Adoption", "Care", "Health", "Shop"];

const ServicesPage = () => {
  const [selected, setSelected] = useState("All");
  const [faqOpen, setFaqOpen] = useState(null);
  const [form, setForm] = useState({ name: "", service: "", date: "" });
  const [formMsg, setFormMsg] = useState("");

  const filtered =
    selected === "All"
      ? servicesList
      : servicesList.filter((s) => s.category === selected);

  const handleFaq = (idx) => {
    setFaqOpen(faqOpen === idx ? null : idx);
  };

  const handleForm = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormMsg("Thank you! We will contact you soon.");
    setForm({ name: "", service: "", date: "" });
    setTimeout(() => setFormMsg(""), 3000);
  };

  return (
    <div
      className="services-main"
      style={{
        fontFamily: "Segoe UI, Arial, sans-serif",
        background: "linear-gradient(120deg, #fff6f1 0%, #e3f2fd 100%)",
        minHeight: "100vh",
      }}
    >
      {/* Hero Section */}
      <section
        className="services-hero"
        style={{
          textAlign: "center",
          padding: "60px 20px 30px 20px",
          background: "linear-gradient(90deg, #ffecd2 0%, #fcb69f 100%)",
          boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
        }}
      >
        <h1
          style={{
            fontSize: "2.8rem",
            color: "#ff8a5b",
            fontWeight: "bold",
            marginBottom: 10,
          }}
        >
          Our Services
        </h1>
        <p
          style={{
            fontSize: "1.3rem",
            color: "#2d3a4b",
            fontWeight: 500,
            marginBottom: 0,
          }}
        >
          Everything your pet needs, all in one place.
        </p>
      </section>

      {/* Filter */}
      <div
        style={{
          display: "flex",
          gap: 16,
          justifyContent: "center",
          margin: "32px 0 18px 0",
          flexWrap: "wrap",
        }}
      >
        {categories.map((cat) => (
          <button
            key={cat}
            className={
              selected === cat ? "services-cat-btn active" : "services-cat-btn"
            }
            style={{
              background: selected === cat ? "#ff8a5b" : "#fff",
              color: selected === cat ? "#fff" : "#ff8a5b",
              border: "2px solid #ff8a5b",
              borderRadius: 22,
              padding: "8px 22px",
              fontWeight: 600,
              fontSize: "1.05rem",
              cursor: "pointer",
              transition: "all 0.2s",
            }}
            onClick={() => setSelected(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Services Grid */}
      <section
        className="services-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: 32,
          maxWidth: 1100,
          margin: "0 auto",
          padding: "0 20px",
        }}
      >
        {filtered.map((s, i) => (
          <div
            key={i}
            className="services-card"
            style={{
              background: "#fff",
              borderRadius: 16,
              boxShadow: "0 4px 18px rgba(0,0,0,0.08)",
              padding: "28px 18px",
              textAlign: "center",
              transition: "transform 0.2s, box-shadow 0.2s",
            }}
          >
            <div style={{ fontSize: 44, marginBottom: 10 }}>{s.icon}</div>
            <h3
              style={{
                color: "#ff8a5b",
                fontWeight: 700,
                fontSize: "1.3rem",
                marginBottom: 8,
              }}
            >
              {s.title}
            </h3>
            <p style={{ color: "#444", fontSize: "1.08rem" }}>{s.desc}</p>
          </div>
        ))}
      </section>

      {/* Testimonials */}
      <section
        style={{
          maxWidth: 1100,
          margin: "40px auto 0 auto",
          padding: "0 20px",
        }}
      >
        <h2
          style={{
            fontSize: "2rem",
            color: "#ff8a5b",
            marginBottom: 18,
            textAlign: "center",
          }}
        >
          What Our Clients Say
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 32,
          }}
        >
          {testimonials.map((t, i) => (
            <div
              key={i}
              style={{
                background: "#fff",
                borderRadius: 14,
                boxShadow: "0 2px 10px rgba(0,0,0,0.07)",
                padding: "22px 16px",
                textAlign: "center",
              }}
            >
              <div
                style={{ fontStyle: "italic", color: "#444", marginBottom: 8 }}
              >
                “{t.quote}”
              </div>
              <div style={{ color: "#888", fontSize: "0.95rem" }}>
                - {t.name}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section
        style={{ maxWidth: 700, margin: "40px auto 0 auto", padding: "0 20px" }}
      >
        <h2
          style={{
            fontSize: "2rem",
            color: "#ff8a5b",
            marginBottom: 18,
            textAlign: "center",
          }}
        >
          Frequently Asked Questions
        </h2>
        <div>
          {faqs.map((f, i) => (
            <div key={i} style={{ marginBottom: 14 }}>
              <button
                onClick={() => handleFaq(i)}
                style={{
                  width: "100%",
                  textAlign: "left",
                  background: "#fff",
                  border: "1.5px solid #ff8a5b",
                  borderRadius: 10,
                  padding: "12px 18px",
                  fontWeight: 600,
                  color: "#ff8a5b",
                  fontSize: "1.08rem",
                  cursor: "pointer",
                  marginBottom: 4,
                  transition: "background 0.2s",
                }}
              >
                {f.q}
              </button>
              {faqOpen === i && (
                <div
                  style={{
                    background: "#f7fafc",
                    borderRadius: 8,
                    padding: "10px 16px",
                    color: "#444",
                    fontSize: "1.05rem",
                    marginTop: 2,
                  }}
                >
                  {f.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Booking Form */}
      <section
        style={{ maxWidth: 700, margin: "40px auto 0 auto", padding: "0 20px" }}
      >
        <h2
          style={{
            fontSize: "2rem",
            color: "#ff8a5b",
            marginBottom: 18,
            textAlign: "center",
          }}
        >
          Book a Service
        </h2>
        <form
          onSubmit={handleSubmit}
          style={{
            background: "#fff",
            borderRadius: 14,
            boxShadow: "0 2px 10px rgba(0,0,0,0.07)",
            padding: "22px 16px",
            display: "flex",
            flexDirection: "column",
            gap: 14,
          }}
        >
          <input
            name="name"
            value={form.name}
            onChange={handleForm}
            required
            placeholder="Your Name"
            style={{
              padding: "10px 14px",
              borderRadius: 8,
              border: "1.5px solid #ff8a5b",
              fontSize: "1.05rem",
            }}
          />
          <select
            name="service"
            value={form.service}
            onChange={handleForm}
            required
            style={{
              padding: "10px 14px",
              borderRadius: 8,
              border: "1.5px solid #ff8a5b",
              fontSize: "1.05rem",
            }}
          >
            <option value="">Select Service</option>
            {servicesList.map((s, i) => (
              <option key={i} value={s.title}>
                {s.title}
              </option>
            ))}
          </select>
          <input
            name="date"
            value={form.date}
            onChange={handleForm}
            required
            type="date"
            style={{
              padding: "10px 14px",
              borderRadius: 8,
              border: "1.5px solid #ff8a5b",
              fontSize: "1.05rem",
            }}
          />
          <button
            type="submit"
            style={{
              background: "#ff8a5b",
              color: "#fff",
              border: "none",
              borderRadius: 22,
              padding: "12px 0",
              fontWeight: 700,
              fontSize: "1.08rem",
              cursor: "pointer",
              marginTop: 6,
              transition: "background 0.2s",
            }}
          >
            Book Now
          </button>
          {formMsg && (
            <div style={{ color: "#34d399", fontWeight: 600, marginTop: 6 }}>
              {formMsg}
            </div>
          )}
        </form>
      </section>

      {/* Live Chat Placeholder */}
      <section
        style={{
          maxWidth: 700,
          margin: "40px auto 0 auto",
          padding: "0 20px",
          textAlign: "center",
        }}
      >
        <h2 style={{ fontSize: "1.3rem", color: "#4f8cff", marginBottom: 10 }}>
          Need Help? <span style={{ fontWeight: 500 }}>Chat with us live!</span>
        </h2>
        <div
          style={{
            background: "#f7fafc",
            borderRadius: 10,
            padding: "18px 0",
            color: "#888",
            fontSize: "1.08rem",
          }}
        >
          <span role="img" aria-label="chat">
            💬
          </span>{" "}
          Live chat coming soon!
        </div>
      </section>

      {/* Sticky Mobile CTA */}
      <div
        style={{
          position: "fixed",
          bottom: 18,
          left: 0,
          width: "100%",
          zIndex: 1000,
          display: "flex",
          justifyContent: "center",
          pointerEvents: "none",
        }}
      >
        <a
          href="#"
          style={{
            background: "#ff8a5b",
            color: "#fff",
            borderRadius: 30,
            padding: "14px 38px",
            fontWeight: 700,
            fontSize: "1.1rem",
            boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
            textDecoration: "none",
            pointerEvents: "auto",
            transition: "background 0.2s",
          }}
        >
          Book a Service Now
        </a>
      </div>

      {/* Final CTA */}
      <section
        style={{ textAlign: "center", margin: "60px 0 0 0", padding: "0 20px" }}
      >
        <h2 style={{ fontSize: "2rem", color: "#ff8a5b", marginBottom: 18 }}>
          Ready to give your pet the best?
        </h2>
        <a
          href="#"
          style={{
            background: "#4f8cff",
            color: "#fff",
            borderRadius: 30,
            padding: "14px 38px",
            fontWeight: 700,
            fontSize: "1.1rem",
            boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
            textDecoration: "none",
            transition: "background 0.2s",
          }}
        >
          Contact Us
        </a>
      </section>
    </div>
  );
};

export default ServicesPage;
