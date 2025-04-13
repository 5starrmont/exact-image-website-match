
import React from 'react';

const Experience = () => {
  const technologies = [
    { 
      name: "AWS", 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" 
    },
    { 
      name: "CSS3", 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" 
    },
    { 
      name: "React.js", 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" 
    },
    { 
      name: "HTML", 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" 
    },
    { 
      name: "Java", 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" 
    },
    { 
      name: "JavaScript", 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" 
    },
    { 
      name: "Node.js", 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" 
    },
    { 
      name: "Python", 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" 
    }
  ];
  
  return (
    <section className="py-16 container-custom">
      <h2 className="text-2xl font-bold mb-14">EXPERIENCE</h2>
      
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-12">
        {technologies.map((tech, index) => (
          <div key={index} className="flex flex-col items-center group">
            <div className="w-16 h-16 flex items-center justify-center mb-3 rounded-full bg-theme-light-blue/10 p-2 transition-all duration-300 group-hover:bg-theme-light-blue/20">
              <img src={tech.icon} alt={tech.name} className="w-10 h-10 object-contain" />
            </div>
            <p className="text-white/80 text-sm">{tech.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
