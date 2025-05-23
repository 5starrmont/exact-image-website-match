
import React from 'react';
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="py-16 container-custom">
      <div className="max-w-3xl">
        <p className="text-xl mb-3 text-theme-highlight blue-glow">I'm a</p>
        <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8">
          FULL STACK <br />
          SOFTWARE <br />
          DEVELOPER<span className="text-theme-highlight blue-glow">.</span>
        </h1>
        
        <Button className="btn-primary text-sm" asChild>
          <a href="#portfolio">Previous Projects</a>
        </Button>
      </div>
    </section>
  );
};

export default Hero;
