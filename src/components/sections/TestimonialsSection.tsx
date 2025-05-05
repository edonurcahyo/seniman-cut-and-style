
import React from 'react';
import TestimonialCard from '@/components/TestimonialCard';

const TestimonialsSection = () => {
  // Sample data - in a real app this would come from an API
  const testimonials = [
    {
      id: 1,
      name: 'John Williams',
      date: 'April 15, 2025',
      rating: 5,
      review: "Best haircut I've ever had. The atmosphere is great and the staff is friendly and professional.",
      image: 'https://randomuser.me/api/portraits/men/32.jpg'
    },
    {
      id: 2,
      name: 'Robert Chen',
      date: 'March 28, 2025',
      rating: 5,
      review: "Alex is an amazing barber! I've been going to him for years and he never disappoints.",
      image: 'https://randomuser.me/api/portraits/men/44.jpg'
    },
    {
      id: 3,
      name: 'Sam Taylor',
      date: 'February 10, 2025',
      rating: 4,
      review: "Great experience overall. Love the complimentary drinks and the hot towel service.",
      image: 'https://randomuser.me/api/portraits/men/51.jpg'
    }
  ];

  return (
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
  );
};

export default TestimonialsSection;
