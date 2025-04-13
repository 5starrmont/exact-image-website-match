
import React from 'react';
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="py-16 container-custom">
      <div className="max-w-3xl">
        <p className="text-xl mb-3">I'm a</p>
        <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-8">
          FULL STACK <br />
          SOFTWARE <br />
          DEVELOPER<span className="text-theme-highlight">.</span>
        </h1>
        
        <Button className="btn-primary" asChild>
          <a href="#portfolio">Previous Projects</a>
        </Button>
      </div>
    </section>
  );
};

export default Hero;
