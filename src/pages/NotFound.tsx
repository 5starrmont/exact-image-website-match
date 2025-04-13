
import React from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-theme-dark-blue">
      <div className="relative z-10 text-center px-4">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          <div className="absolute top-[20%] right-[5%] w-96 h-96 bg-theme-light-blue/10 rounded-full filter blur-[80px]"></div>
          <div className="absolute top-[50%] left-[10%] w-72 h-72 bg-theme-highlight/5 rounded-full filter blur-[60px]"></div>
        </div>
        
        <h1 className="text-8xl font-bold mb-4 text-theme-highlight">404</h1>
        <p className="text-2xl text-white mb-8">Oops! Page not found</p>
        <Button className="btn-primary" asChild>
          <a href="/">Return to Home</a>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
