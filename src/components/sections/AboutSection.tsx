
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const AboutSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About Barbershop Seniman</h2>
            <p className="text-gray-600 mb-6">
              Founded in 2015, Barbershop Seniman has been dedicated to providing exceptional grooming services for the modern gentleman. Our skilled barbers combine traditional techniques with contemporary styles to create a look that's uniquely yours.
            </p>
            <p className="text-gray-600 mb-6">
              We pride ourselves on creating a welcoming atmosphere where clients can relax and enjoy premium service. From classic cuts to modern styles, hot towel shaves to beard grooming, we offer a comprehensive range of services to meet all your grooming needs.
            </p>
            <Link to="/about">
              <Button variant="outline" className="border-barber-brown text-barber-brown hover:bg-barber-brown hover:text-white">
                Learn More About Us
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="aspect-square overflow-hidden rounded-lg">
              <img 
                src="https://images.unsplash.com/photo-1587270613291-b5c7042fc104?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                alt="Barbershop interior" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-square overflow-hidden rounded-lg mt-8">
              <img 
                src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                alt="Barber tools" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-square overflow-hidden rounded-lg">
              <img 
                src="https://images.unsplash.com/photo-1634302086738-c398a3512cd0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                alt="Haircut in progress" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-square overflow-hidden rounded-lg mt-8">
              <img 
                src="https://images.unsplash.com/photo-1635273051143-53a5329ce01b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                alt="Barbershop detail" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
