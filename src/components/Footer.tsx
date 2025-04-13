
import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-6 bg-theme-dark-blue/80 border-t border-theme-light-blue/10">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <a href="#" className="fs-logo text-3xl font-bold text-theme-highlight blue-glow mb-4 md:mb-0">FS</a>
          
          <p className="text-white/60 text-sm mb-4 md:mb-0">
            © 2023 Portfolio. All rights reserved.
          </p>
          
          <div className="flex space-x-4">
            <a href="#" className="w-8 h-8 rounded-full bg-theme-light-blue/20 flex items-center justify-center hover:bg-theme-light-blue/30 transition-colors">
              <Facebook className="w-4 h-4 text-white" />
            </a>
            <a href="#" className="w-8 h-8 rounded-full bg-theme-light-blue/20 flex items-center justify-center hover:bg-theme-light-blue/30 transition-colors">
              <Twitter className="w-4 h-4 text-white" />
            </a>
            <a href="#" className="w-8 h-8 rounded-full bg-theme-light-blue/20 flex items-center justify-center hover:bg-theme-light-blue/30 transition-colors">
              <Linkedin className="w-4 h-4 text-white" />
            </a>
            <a href="#" className="w-8 h-8 rounded-full bg-theme-light-blue/20 flex items-center justify-center hover:bg-theme-light-blue/30 transition-colors">
              <Instagram className="w-4 h-4 text-white" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
