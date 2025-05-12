import React, { useState, useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { ProjectType } from '../types';

interface ProjectModalProps {
  project: ProjectType;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, onNext, onPrev }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(false);
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, [project.id]);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') onClose();
    if (e.key === 'ArrowRight') onNext();
    if (e.key === 'ArrowLeft') onPrev();
  }, [onClose, onNext, onPrev]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 overflow-y-auto">
      <div 
        className={`max-w-7xl w-full h-full md:h-auto mx-auto p-4 md:p-8 transition-all duration-500 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">{project.title}</h2>
            <p className="text-gray-400">{project.category} • {project.year}</p>
          </div>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-white/10 rounded-full transition-colors"
            aria-label="Close"
          >
            <X size={24} />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="relative">
            <div className="aspect-[16/9] overflow-hidden bg-gray-900">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div>
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-2">About the Project</h3>
              <p className="text-gray-300 leading-relaxed">{project.description}</p>
            </div>
            
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">Credits</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                <div>
                  <p className="text-gray-400 text-sm">Director</p>
                  <p>{project.director}</p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Cinematographer</p>
                  <p>{project.cinematographer}</p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Producer</p>
                  <p>{project.producer}</p>
                </div>
              </div>
            </div>
            
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">Cast</h3>
              <div className="flex flex-wrap gap-2">
                {project.cast.map((actor, index) => (
                  <span 
                    key={index} 
                    className="px-3 py-1 bg-white/10 rounded-full text-sm"
                  >
                    {actor}
                  </span>
                ))}
              </div>
            </div>
            
            {project.awards && project.awards.length > 0 && (
              <div>
                <h3 className="text-xl font-semibold mb-4">Awards</h3>
                <ul className="list-disc pl-5 text-gray-300">
                  {project.awards.map((award, index) => (
                    <li key={index} className="mb-1">{award}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
        
        <div className="mt-12 flex justify-between">
          <button 
            onClick={onPrev}
            className="flex items-center py-2 px-4 border border-white/20 rounded hover:bg-white/10 transition-colors"
          >
            <ChevronLeft size={16} className="mr-2" />
            Previous Project
          </button>
          <button 
            onClick={onNext}
            className="flex items-center py-2 px-4 border border-white/20 rounded hover:bg-white/10 transition-colors"
          >
            Next Project
            <ChevronRight size={16} className="ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;