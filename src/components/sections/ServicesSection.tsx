
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import ServiceCard from '@/components/ServiceCard';

const ServicesSection = () => {
  // Sample data - in a real app this would come from an API
  const services = [
    {
      id: 1,
      title: 'Haircut',
      price: 'Rp. 40.000',
      description: 'Precision haircut tailored to your style and preference.',
      duration: '30 min',
      image: 'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
    },
    {
      id: 2,
      title: 'Beard Trim',
      price: 'Rp. 20.000',
      description: 'Expert beard shaping and styling to enhance your look.',
      duration: '20 min',
      image: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
    },
    {
      id: 3,
      title: 'Hair Coloring',
      price: 'Rp. 100.000',
      description: 'Vibrant color, expert touch — professional hair coloring with a luxurious finish.',
      duration: '60 min',
      image: 'https://media.istockphoto.com/id/1182128730/photo/hairdresser-hand-in-black-gloves-paints-the-womans-hair-in-a-pink-color.webp?a=1&b=1&s=612x612&w=0&k=20&c=mVxgN3ejZb51InyKsTLENVePhhyEjlndVaowyF9N3WY='
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 section-title inline-block">Our Services</h2>
          <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
            We offer a wide range of grooming services to keep you looking your best.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard 
              key={service.id}
              title={service.title}
              price={service.price}
              description={service.description}
              duration={service.duration}
              image={service.image}
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link to="/services">
            <Button className="bg-barber-brown hover:bg-barber-brown/90">
              View All Services
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
