
import React from 'react';
import ServiceCard from './ServiceCard';
import { Video, Smartphone, Monitor, Code } from 'lucide-react';

const Services = () => {
  const services = [
    {
      id: 1,
      title: "VIDEO EDITING",
      description: "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.",
      icon: Video
    },
    {
      id: 2,
      title: "MOBILE APP DEVELOPMENT",
      description: "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.",
      icon: Smartphone
    },
    {
      id: 3,
      title: "DESKTOP APP DEVELOPMENT",
      description: "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.",
      icon: Monitor
    },
    {
      id: 4,
      title: "PROGRAMMING LANGUAGES",
      description: "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.",
      icon: Code
    }
  ];
  
  return (
    <section id="services" className="py-16 container-custom">
      <h2 className="text-2xl font-bold mb-14">SERVICES</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map(service => (
          <ServiceCard 
            key={service.id}
            title={service.title}
            description={service.description}
            Icon={service.icon}
          />
        ))}
      </div>
    </section>
  );
};

export default Services;
