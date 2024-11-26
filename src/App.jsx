// frontend/src/App.jsx

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/comman/Header";
import Hero from "./components/comman/Hero";
import EasySteps from "./components/comman/EasySteps";
import ServingCommunities from "./components/comman/ServingCommunities";
import FeaturesSection from "./components/comman/FeaturesSection";
import Footer from "./components/comman/Footer";
import Contact from "./components/comman/contact";
import AboutUs from "./components/comman/AboutUs";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import UserProfile from "./components/user/UserProfile";
import AdminDashboard from "./components/admin/AdminDashboard"; // Fixed path
import ForgotPassword from "./components/auth/ForgotPassword";
import ResetPassword from "./components/auth/ResetPassword";
// If CreateProfile does not exist, remove the import
import ProfileForm from "./components/comman/ProfileForm";

import "./App.css";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <EasySteps />
              <ServingCommunities />
              <FeaturesSection />
            </>
          }
        />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/user/profile" element={<UserProfile />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password/:token" element={<ResetPassword />} />
        {/* Remove this if CreateProfile doesn't exist */}
        <Route path="/create-profile" element={<ProfileForm />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
