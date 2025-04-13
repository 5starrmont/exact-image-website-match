
import React from 'react';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="py-6 container-custom">
      <div className="flex justify-between items-center">
        <a href="#" className="fs-logo text-4xl font-bold text-theme-highlight">FS</a>
        
        <div className="hidden md:flex space-x-10">
          <a href="#" className="nav-link font-medium">HOME</a>
          <a href="#about" className="nav-link font-medium">ABOUT ME</a>
          <a href="#portfolio" className="nav-link font-medium">PORTFOLIO</a>
          <a href="#services" className="nav-link font-medium">SERVICES</a>
          <a href="#contact" className="nav-link font-medium">CONTACT</a>
        </div>
        
        <Button className="btn-primary text-sm">HIRE ME</Button>
      </div>
    </nav>
  );
};

export default Navbar;
