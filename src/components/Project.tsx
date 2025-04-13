
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

interface ProjectProps {
  number: number;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  isReversed?: boolean;
}

const Project = ({ number, title, description, imageSrc, imageAlt, isReversed = false }: ProjectProps) => {
  return (
    <div className="project-card">
      <div className={`flex flex-col ${isReversed ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8`}>
        <div className="w-full md:w-1/2">
          <p className="text-theme-highlight blue-glow font-medium mb-2">PROJECT {number}</p>
          <h3 className="text-2xl font-bold mb-4">{title}</h3>
          <p className="text-white/80 mb-6">{description}</p>
          
          <Button variant="ghost" className="p-0 flex items-center gap-2 text-theme-highlight blue-glow group">
            <span>Read more</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
        
        <div className="w-full md:w-1/2">
          <img 
            src={imageSrc} 
            alt={imageAlt} 
            className="w-full h-auto rounded-lg border-4 border-theme-accent-blue/30"
          />
        </div>
      </div>
    </div>
  );
};

export default Project;
