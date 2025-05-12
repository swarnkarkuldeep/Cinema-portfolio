import React from 'react';
import { ProjectType } from '../types';

interface ProjectGridProps {
  projects: ProjectType[];
  openModal: (project: ProjectType) => void;
}

const ProjectGrid: React.FC<ProjectGridProps> = ({ projects, openModal }) => {
  return (
    <section id="projects" className="px-6 py-20 md:py-32">
      <div className="container mx-auto">
        <h2 className="text-6xl md:text-8xl font-bold mb-2 text-[#d60209]">Featured Projects</h2>
        <p className="text-2xl text-gray-400 mb-12">A selection of our award-winning films and commercial work</p>
        
        <div className="grid grid-cols-12 auto-rows-[400px] gap-0">
          {projects.map((project, index) => {
            // Determine grid size based on index
            const isLarge = index % 5 === 0;
            const gridClass = isLarge ? 'col-span-8 row-span-2' : 'col-span-4 row-span-1';
            
            return (
              <div 
                key={project.id} 
                className={`group cursor-pointer overflow-hidden relative ${gridClass}`}
                onClick={() => openModal(project)}
              >
                <div className="relative w-full h-full overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="object-cover w-full h-full transform transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 p-6 w-full transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                      <span className="inline-block text-sm tracking-wider mb-2 text-[#d60209]">
                        {project.category}
                      </span>
                      <h3 className="text-4xl font-bold transform group-hover:translate-x-4 transition-transform duration-500">
                        {project.title}
                      </h3>
                      <p className="text-xl text-gray-300 mt-2 max-w-[90%] opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                        {project.year} • {project.director}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectGrid;