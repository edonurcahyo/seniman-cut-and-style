
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="hero-section min-h-[80vh] flex items-center justify-center text-white">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Craft Your Style</h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">Experience premium grooming services at Barbershop Seniman. Where style meets tradition.</p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link to="/booking">
            <Button className="px-8 py-6 text-lg bg-barber-gold hover:bg-barber-gold/90 text-black">
              Book Appointment
            </Button>
          </Link>
          <Link to="/services">
            <Button variant="outline" className="px-8 py-6 text-lg border-white text-white hover:bg-white/10">
              Our Services
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
