import React from 'react';
import { ProjectType } from '../types';
import { motion } from 'framer-motion';

interface ProjectGridProps {
  projects: ProjectType[];
  openModal: (project: ProjectType) => void;
}

const GRID_VARIANTS = [
  'col-span-3 row-span-1',
  'col-span-4 row-span-2',
  'col-span-5 row-span-1',
  'col-span-3 row-span-2',
  'col-span-6 row-span-1',
  'col-span-4 row-span-1',
  'col-span-2 row-span-2',
  'col-span-5 row-span-2',
  'col-span-3 row-span-1',
  'col-span-4 row-span-1',
];

const ProjectGrid: React.FC<ProjectGridProps> = ({ projects, openModal }) => {
  const getVariant = (index: number) => GRID_VARIANTS[index % GRID_VARIANTS.length];

  // Calculate total columns used per row to fill last row with placeholders if needed
  const gridCols = 12;
  let colSum = 0;
  let rowItems: { project: ProjectType, gridClass: string }[] = [];
  let placeholders = 0;

  projects.forEach((project, i) => {
    const gridClass = getVariant(i);
    const colMatch = gridClass.match(/col-span-(\d+)/);
    const colSpan = colMatch ? parseInt(colMatch[1], 10) : 1;
    colSum += colSpan;
    rowItems.push({ project, gridClass });
  });

  // If the last row is not full, add placeholders
  if (colSum % gridCols !== 0) {
    placeholders = gridCols - (colSum % gridCols);
  }

  return (
    <section id="projects" className="px-6 py-20 md:py-32">
      <div className="px-6">
        <h2 className="text-6xl md:text-8xl font-bold mb-2 text-white">Featured Projects</h2>
        <p className="text-2xl text-gray-400 mb-12">A selection of our award-winning films and commercial work</p>
        <div className="columns-2 md:columns-3 lg:columns-4 gap-0 [column-fill:_balance]">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="group mb-0 break-inside-avoid cursor-pointer overflow-hidden relative w-full hover-lift"
              onClick={() => openModal(project)}
              style={{ zIndex: 1, fontFamily: 'Rubik, sans-serif', willChange: 'transform, opacity' }}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: index * 0.05, ease: 'easeOut' }}
            >
              <div className="relative w-full h-auto overflow-hidden shadow-lg img-hover-zoom">
                <img
                  src={project.image}
                  alt={project.title + ' project image'}
                  loading="lazy"
                  className="object-cover w-full h-auto transform transition-transform duration-700 group-hover:scale-110"
                  style={{ display: 'block', width: '100%' }}
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 p-6 w-full transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <span className="inline-block text-sm tracking-wider mb-2 text-white animate-fade-in-up" style={{animationDelay: '0.1s'}}>
                      {project.category}
                    </span>
                    <h3 className="text-4xl font-bold transform group-hover:translate-x-4 transition-transform duration-500 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
                      {project.title}
                    </h3>
                    <p className="text-xl text-gray-300 mt-2 max-w-[90%] opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200 animate-fade-in-up" style={{animationDelay: '0.3s'}}>
                      {project.year} • {project.director}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectGrid;