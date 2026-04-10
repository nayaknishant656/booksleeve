import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Courses from './components/Courses';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import MultiStepForm from './components/MultiStepForm';

const App = () => {
  const [step, setStep] = useState(1);
  const [scrolled, setScrolled] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    contractType: '299'
  });

  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Sync step with route
  useEffect(() => {
    if (location.pathname === '/') {
      setStep(1);
    } else if (location.pathname === '/contract' && step === 1) {
      setStep(2);
    }
  }, [location, step]);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const LandingPage = () => (
    <>
      <Hero />
      <About />
      <Courses />
      <Pricing setContractType={(price) => setFormData({ ...formData, contractType: price })} />
      <Testimonials />
    </>
  );

  return (
    <div className="App">
      <Navbar scrolled={scrolled} />

      <main style={{ minHeight: '100vh' }}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route
            path="/contract"
            element={
              <MultiStepForm
                step={step}
                formData={formData}
                handleInputChange={handleInputChange}
                nextStep={nextStep}
                prevStep={prevStep}
                setStep={setStep}
              />
            }
          />
        </Routes>
      </main>

      <Footer />
    </div>
  );
};

export default App;
