
import React from 'react';
import { Button } from "@/components/ui/button";

const AboutMe = () => {
  return (
    <section id="about" className="py-16 container-custom">
      <div className="flex flex-col md:flex-row items-start gap-10">
        <div className="w-full md:w-1/3">
          <img 
            src="/lovable-uploads/24fd250f-67d8-4d67-a140-c37bf8e0686b.png" 
            alt="Profile" 
            className="w-64 h-64 object-cover rounded-lg"
          />
        </div>
        
        <div className="w-full md:w-2/3">
          <h2 className="text-2xl font-bold mb-4">ABOUT ME</h2>
          <p className="text-white/80 mb-6 leading-relaxed">
            Lorem ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled it to make a type 
            specimen book. It has survived not only five centuries, but also the leap into 
            electronic typesetting, remaining essentially unchanged. It was popularised in 
            the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
            and more recently with desktop publishing software like.
          </p>
          
          <div className="flex gap-4">
            <Button className="btn-primary">HIRE ME</Button>
            <Button variant="outline" className="btn-secondary">RESUME</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
