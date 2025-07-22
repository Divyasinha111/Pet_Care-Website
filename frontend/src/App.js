// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Register from "./pages/Register";
// import Login from "./pages/LoginPage";
// import HomePage from "./pages/HomePage";
// import AboutPage from "./pages/AboutPage";
// import ServicesPage from "./pages/ServicesPage";
// import ContactPage from "./pages/ContactPage";
// import CatPage from "./pages/CatPage";
// import DogPage from "./pages/DogPage";
// import BirdPage from "./pages/BirdPage";
// import FishPage from "./pages/FishPage";
// import HamsterPage from "./pages/HamsterPage";
// // import Register from './pages/Register';
// // import Login from './pages/LoginPage';
// import CartPage from "./pages/CartPage";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import CatAdopt from "./pages/CatAdopt"; // 👈 added
// import ContactForm from "./components/ContactForm";

// function App() {
//   return (
//     <Router>
//       <Navbar />
//       <Routes>
//         <Route path="/register" element={<Register />} />
//         <Route path="/" element={<HomePage />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/Register" element={<Register />} />
//         <Route path="/about" element={<AboutPage />} />
//         <Route path="/services" element={<ServicesPage />} />
//         <Route path="/contact" element={<ContactForm />} />
//         <Route path="/cat" element={<CatPage />} />
//         <Route path="/dog" element={<DogPage />} />
//         <Route path="/bird" element={<BirdPage />} />
//         <Route path="/fish" element={<FishPage />} />
//         <Route path="/hamster" element={<HamsterPage />} />
//         {/* <Route path="/register" element={<Register />} /> */}
//         {/* <Route path="/login" element={<Login />} /> */}
//         <Route path="/cart" element={<CartPage />} />
//         <Route path="/CatAdopt" element={<CatAdopt />} /> {/* 👈 added this */}
//       </Routes>
//       <Footer />
//     </Router>
//   );
// }

// export default App;




















import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";

import Register from "./pages/Register";
import LoginPage from "./pages/LoginPage"; 
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import ContactForm from "./components/ContactForm";
import CatPage from "./pages/CatPage";
import DogPage from "./pages/DogPage";
import BirdPage from "./pages/BirdPage";
import FishPage from "./pages/FishPage";
import HamsterPage from "./pages/HamsterPage";
import CartPage from "./pages/CartPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CatAdopt from "./pages/CatAdopt";
import HorsePage from "./pages/HorsePage";
import RabbitPage from "./pages/RabbitPage";
import ReptilePage from "./pages/ReptilePage"; // Import ReptilePage
import Logout from "./pages/Logout";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const location = useLocation();
  const hideNavbar =
    location.pathname === "/login" || location.pathname === "/register";
  const hideFooter =
    location.pathname === "/login" || location.pathname === "/register";
  return (
    <>
      {!hideNavbar && <Navbar />}
      <Routes>
        {/* Redirect root to login */}
        <Route path="/" element={<Navigate to="/login" />} />
        {/* Auth routes */}
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/logout" element={<Logout />} />
        {/* Protected homepage route */}
        <Route
          path="/homepage"
          element={
            <PrivateRoute>
              <HomePage />
            </PrivateRoute>
          }
        />
        {/* Public routes */}
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contact" element={<ContactForm />} />
        <Route path="/cat" element={<CatPage />} />
        <Route path="/dog" element={<DogPage />} />
        <Route path="/bird" element={<BirdPage />} />
        <Route path="/fish" element={<FishPage />} />
        <Route path="/Horse" element={<HorsePage />} />
        <Route path="/rabbit" element={<RabbitPage />} />
        <Route path="/reptile" element={<ReptilePage />} /> {/* Route for ReptilePage added */}
        <Route path="/hamster" element={<HamsterPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/CatAdopt" element={<CatAdopt />} />
      </Routes>
      {!hideFooter && <Footer />}
    </>
  );
}

export default App;
