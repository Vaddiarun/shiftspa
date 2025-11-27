import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import Services from './components/Services';
import Benefits from './components/Benefits';
import Safety from './components/Safety';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import BookingForm from './components/BookingForm';
import Footer from './components/Footer';
import StickyCTA from './components/StickyCTA';

function App() {
  return (
    <div className="min-h-screen bg-light text-dark font-sans selection:bg-primary/30">
      <Navbar />

      <main>
        <Hero />
        <HowItWorks />
        <Services />
        <Benefits />
        <Safety />
        <Testimonials />
        <FAQ />
        <BookingForm />
      </main>

      <Footer />
      <StickyCTA />
    </div>
  );
}

export default App;
