
import React, { useState } from 'react';
import PortfolioNav from './PortfolioNav';
import Project from './Project';

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState('mobile');
  
  const projects = [
    {
      id: 1,
      number: 1,
      title: "Dating Mobile App Design",
      description: "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      imageSrc: "https://placehold.co/600x400/pink/white?text=Dating+App",
      imageAlt: "Dating Mobile App Screenshot",
      category: "mobile"
    },
    {
      id: 2,
      number: 2,
      title: "E-Commerce Mobile App Design",
      description: "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      imageSrc: "https://placehold.co/600x400/1e90ff/white?text=E-Commerce+App",
      imageAlt: "E-Commerce Mobile App Screenshot",
      category: "mobile"
    },
    {
      id: 3,
      number: 3,
      title: "Fitness Mobile App Design",
      description: "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      imageSrc: "https://placehold.co/600x400/5271ff/white?text=Fitness+App",
      imageAlt: "Fitness Mobile App Screenshot",
      category: "mobile"
    },
    {
      id: 4,
      number: 4,
      title: "Modeling Mobile App Design",
      description: "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      imageSrc: "https://placehold.co/600x400/d580ff/white?text=Modeling+App",
      imageAlt: "Modeling Mobile App Screenshot",
      category: "mobile"
    }
  ];
  
  const filteredProjects = projects.filter(project => project.category === activeTab);
  
  return (
    <section id="portfolio" className="py-16 container-custom">
      <h2 className="text-2xl font-bold text-center mb-6">PORTFOLIO</h2>
      
      <PortfolioNav activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <div className="space-y-20">
        {filteredProjects.map((project, index) => (
          <Project 
            key={project.id}
            number={project.number}
            title={project.title}
            description={project.description}
            imageSrc={project.imageSrc}
            imageAlt={project.imageAlt}
            isReversed={index % 2 !== 0}
          />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
