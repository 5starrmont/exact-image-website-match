
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  Icon: LucideIcon;
}

const ServiceCard = ({ title, description, Icon }: ServiceCardProps) => {
  return (
    <div className="bg-theme-card-bg p-6 rounded-lg border border-theme-light-blue/20 transition-transform duration-300 hover:transform hover:scale-105">
      <div className="w-12 h-12 bg-theme-light-blue/20 rounded-full flex items-center justify-center mb-4">
        <Icon className="w-6 h-6 text-theme-highlight" />
      </div>
      
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-white/80">{description}</p>
    </div>
  );
};

export default ServiceCard;
