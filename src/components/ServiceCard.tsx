
import React from 'react';
import { Card, CardContent, CardFooter } from './ui/card';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  title: string;
  price: string;
  description: string;
  duration: string;
  image: string;
}

const ServiceCard = ({ title, price, description, duration, image }: ServiceCardProps) => {
  return (
    <Card className="service-card overflow-hidden shadow-md">
      <div className="aspect-video w-full overflow-hidden">
        <img
          src={image}
          alt={title}
          className="object-cover w-full h-full"
        />
      </div>
      <CardContent className="p-5">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold">{title}</h3>
          <span className="text-barber-gold font-semibold">{price}</span>
        </div>
        <p className="text-muted-foreground mb-2">{description}</p>
        <div className="flex items-center text-sm text-muted-foreground">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          {duration}
        </div>
      </CardContent>
      <CardFooter className="p-5 pt-0">
        <Link to="/booking" className="w-full">
          <Button className="w-full bg-barber-brown hover:bg-barber-brown/90">
            Book Now
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default ServiceCard;
