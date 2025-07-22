import React from "react";
import HeroSection from "../components/main";
import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";
import PetCareInfoSection from "../components/PetCareInfoSection"; // Make sure this exists
import CustomCareSection from "../components/CustomCareSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <ServicesSection />
      <PetCareInfoSection />
      <CustomCareSection />
      <AboutSection />
      <ContactSection />
    </div>
  );
};

export default HomePage;
