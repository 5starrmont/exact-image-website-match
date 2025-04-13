
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import AboutMe from '@/components/AboutMe';
import Portfolio from '@/components/Portfolio';
import Services from '@/components/Services';
import Experience from '@/components/Experience';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="bg-theme-dark-blue min-h-screen">
      <div className="relative">
        {/* Background overlay effect */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          <div className="absolute top-[20%] right-[5%] w-96 h-96 bg-theme-light-blue/10 rounded-full filter blur-[80px]"></div>
          <div className="absolute top-[50%] left-[10%] w-72 h-72 bg-theme-highlight/5 rounded-full filter blur-[60px]"></div>
          <div className="absolute bottom-[10%] right-[20%] w-80 h-80 bg-purple-500/5 rounded-full filter blur-[70px]"></div>
          <div className="hidden md:block absolute -top-10 -left-10 text-[300px] font-bold text-white/[0.02] select-none">
            PORTFOLIO
          </div>
        </div>
        
        <div className="relative z-10">
          <Navbar />
          <Hero />
          <AboutMe />
          <Portfolio />
          <Services />
          <Experience />
          <Contact />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Index;
