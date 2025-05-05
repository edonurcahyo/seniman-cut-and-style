
import React from 'react';
import BarberCard from '@/components/BarberCard';

const BarbersSection = () => {
  // Sample data - in a real app this would come from an API
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

  return (
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
  );
};

export default BarbersSection;
