import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';
import CatPage from './pages/CatPage';
import DogPage from './pages/DogPage';
import BirdPage from './pages/BirdPage';
import FishPage from './pages/FishPage';
import HamsterPage from './pages/HamsterPage';
import Register from './pages/Register';
import Login from './pages/LoginPage';
import CartPage from './pages/CartPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CatAdopt from './pages/CatAdopt'; // 👈 added
import ContactForm from './components/ContactForm';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contact" element={<ContactForm />} />
        <Route path="/cat" element={<CatPage />} />
        <Route path="/dog" element={<DogPage />} />
        <Route path="/bird" element={<BirdPage />} />
        <Route path="/fish" element={<FishPage />} />
        <Route path="/hamster" element={<HamsterPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/CatAdopt" element={<CatAdopt />} /> {/* 👈 added this */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
