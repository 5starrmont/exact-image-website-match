
import React from 'react';

const Experience = () => {
  const technologies = [
    { name: "AWS", icon: "https://placehold.co/80/orange/white?text=AWS" },
    { name: "CSS3", icon: "https://placehold.co/80/1e90ff/white?text=CSS3" },
    { name: "React.js", icon: "https://placehold.co/80/61dafb/white?text=React" },
    { name: "HTML", icon: "https://placehold.co/80/e34c26/white?text=HTML" },
    { name: "Java", icon: "https://placehold.co/80/f89820/white?text=Java" },
    { name: "JavaScript", icon: "https://placehold.co/80/f7df1e/black?text=JS" },
    { name: "Node.js", icon: "https://placehold.co/80/3c873a/white?text=Node" },
    { name: "Python", icon: "https://placehold.co/80/3776ab/white?text=Python" }
  ];
  
  return (
    <section className="py-16 container-custom">
      <h2 className="text-2xl font-bold mb-14">EXPERIENCE</h2>
      
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-12">
        {technologies.map((tech, index) => (
          <div key={index} className="flex flex-col items-center">
            <img src={tech.icon} alt={tech.name} className="w-16 h-16 object-contain mb-3" />
            <p className="text-white/80 text-sm">{tech.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
