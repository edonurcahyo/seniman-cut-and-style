
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServiceCard from '@/components/ServiceCard';
import BarberCard from '@/components/BarberCard';
import TestimonialCard from '@/components/TestimonialCard';

const Index = () => {
  // Sample data - in a real app this would come from an API
  const services = [
    {
      id: 1,
      title: 'Haircut',
      price: '$30',
      description: 'Precision haircut tailored to your style and preference.',
      duration: '30 min',
      image: 'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
    },
    {
      id: 2,
      title: 'Beard Trim',
      price: '$20',
      description: 'Expert beard shaping and styling to enhance your look.',
      duration: '20 min',
      image: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
    },
    {
      id: 3,
      title: 'Hot Towel Shave',
      price: '$35',
      description: 'Luxurious hot towel traditional straight razor shave.',
      duration: '45 min',
      image: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
    }
  ];

  const barbers = [
    {
      id: 1,
      name: 'Alex Rodriguez',
      position: 'Master Barber',
      experience: '10 years',
      image: 'https://images.unsplash.com/photo-1565022536102-f7645d84354a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
    },
    {
      id: 2,
      name: 'David Smith',
      position: 'Senior Barber',
      experience: '8 years',
      image: 'https://images.unsplash.com/photo-1567894340315-735d7c361db0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
    },
    {
      id: 3,
      name: 'Michael Johnson',
      position: 'Style Specialist',
      experience: '5 years',
      image: 'https://images.unsplash.com/photo-1584535762696-50849ebe228c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: 'John Williams',
      date: 'April 15, 2025',
      rating: 5,
      review: 'Best haircut I've ever had. The atmosphere is great and the staff is friendly and professional.',
      image: 'https://randomuser.me/api/portraits/men/32.jpg'
    },
    {
      id: 2,
      name: 'Robert Chen',
      date: 'March 28, 2025',
      rating: 5,
      review: 'Alex is an amazing barber! I've been going to him for years and he never disappoints.',
      image: 'https://randomuser.me/api/portraits/men/44.jpg'
    },
    {
      id: 3,
      name: 'Sam Taylor',
      date: 'February 10, 2025',
      rating: 4,
      review: 'Great experience overall. Love the complimentary drinks and the hot towel service.',
      image: 'https://randomuser.me/api/portraits/men/51.jpg'
    }
  ];

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
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

      {/* About Section */}
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
                  src="https://images.unsplash.com/photo-1635273051143-53a5329ce01b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                  alt="Barbershop detail" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
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

      {/* Barbers Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 section-title inline-block">Meet Our Barbers</h2>
            <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
              Our team of skilled professionals is dedicated to providing you with the best grooming experience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {barbers.map((barber) => (
              <BarberCard 
                key={barber.id}
                name={barber.name}
                position={barber.position}
                experience={barber.experience}
                image={barber.image}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 section-title inline-block">Client Reviews</h2>
            <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
              Don't take our word for it. Here's what our clients have to say.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <TestimonialCard 
                key={testimonial.id}
                name={testimonial.name}
                date={testimonial.date}
                rating={testimonial.rating}
                review={testimonial.review}
                image={testimonial.image}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
      
      <Footer />
    </>
  );
};

export default Index;
