
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const CTASection = () => {
  return (
    <section className="py-20 bg-barber-brown text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready for a Fresh Look?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Book your appointment today and experience the Barbershop Seniman difference.
        </p>
        <Link to="/booking">
          <Button className="px-8 py-3 text-lg bg-barber-gold hover:bg-barber-gold/90 text-black">
            Book Your Appointment
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default CTASection;
