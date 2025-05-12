import React, { useState, useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight, Trophy } from 'lucide-react';
import { ProjectType } from '../types';
import { motion } from 'framer-motion';

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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 overflow-y-auto" onClick={onClose}>
      {/* Floating Prev Button */}
      <button 
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        className="hidden md:flex items-center justify-center absolute left-6 top-1/2 -translate-y-1/2 bg-black/80 hover:bg-black/90 text-white rounded-full p-3 z-50 shadow-lg border border-white/10 transition"
        aria-label="Previous Project"
      >
        <ChevronLeft size={32} />
      </button>
      {/* Floating Next Button */}
      <button 
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        className="hidden md:flex items-center justify-center absolute right-6 top-1/2 -translate-y-1/2 bg-black/80 hover:bg-black/90 text-white rounded-full p-3 z-50 shadow-lg border border-white/10 transition"
        aria-label="Next Project"
      >
        <ChevronRight size={32} />
      </button>
      <motion.div 
        className={`max-w-6xl w-full h-full md:h-auto mx-auto p-0 md:p-0 flex flex-col md:flex-row bg-black rounded-2xl shadow-2xl border border-white/10 relative ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ willChange: 'transform, opacity' }}
        onClick={e => e.stopPropagation()}
        initial={{ opacity: 0, y: 20, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -20, scale: 0.98 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
      >
        {/* Left: Image with overlays */}
        <div className="relative md:w-[420px] w-full min-h-[220px] md:min-h-[600px] flex-shrink-0 flex items-stretch overflow-hidden border-r border-white/10">
          <img 
            src={project.image} 
            alt={project.title + ' main image'}
            loading="lazy"
            className="w-full h-full object-cover object-center"
            style={{ minHeight: 220 }}
          />
          {/* Top-left overlay: title/year/category */}
          <div className="absolute top-0 left-0 m-6 bg-black/70 px-5 py-3 rounded-lg shadow-lg">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-1 leading-tight">{project.title}</h2>
            <div className="flex flex-wrap items-center gap-2 text-gray-300 text-base mb-1">
              <span className="uppercase tracking-widest text-xs text-[#d60209] font-semibold">{project.category}</span>
              <span className="text-[#d60209]">•</span>
              <span>{project.year}</span>
            </div>
          </div>
          {/* Bottom overlay: director/quick credits */}
          <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-6 flex flex-col gap-1">
            <div className="text-gray-300 text-sm">Directed by <span className="text-white font-semibold">{project.director}</span></div>
            <div className="flex flex-wrap gap-4 text-xs text-gray-400 mt-1">
              <span>Cinematographer: <span className="text-white">{project.cinematographer}</span></span>
              <span>Producer: <span className="text-white">{project.producer}</span></span>
            </div>
          </div>
          {/* Sticky Close Button */}
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-black/80 hover:bg-black/90 rounded-full transition-colors z-20 border border-white/10 hover-scale glow-on-hover"
            aria-label="Close"
          >
            <X size={26} />
          </button>
        </div>
        {/* Right: Scrollable content */}
        <div className="md:w-[calc(100%-420px)] w-full flex flex-col max-h-[90vh] overflow-y-auto p-6 md:p-12 scrollbar-hide">
          <div className="mb-10">
            <h3 className="text-3xl font-extrabold text-white mb-4 uppercase tracking-wider">About</h3>
            <p className="text-gray-300 leading-relaxed text-lg">{project.description}</p>
          </div>
          <div className="mb-10">
            <h3 className="text-xl font-bold text-white mb-3 uppercase tracking-wider">Credits</h3>
            <div className="flex flex-wrap gap-8">
              <div className="bg-white/5 rounded-lg px-5 py-3">
                <div className="text-xs text-gray-400 uppercase mb-1">Director</div>
                <div className="text-white text-base font-semibold">{project.director}</div>
              </div>
              <div className="bg-white/5 rounded-lg px-5 py-3">
                <div className="text-xs text-gray-400 uppercase mb-1">Cinematographer</div>
                <div className="text-white text-base font-semibold">{project.cinematographer}</div>
              </div>
              <div className="bg-white/5 rounded-lg px-5 py-3">
                <div className="text-xs text-gray-400 uppercase mb-1">Producer</div>
                <div className="text-white text-base font-semibold">{project.producer}</div>
              </div>
            </div>
          </div>
          <div className="mb-10">
            <h3 className="text-xl font-bold text-white mb-3 uppercase tracking-wider">Cast</h3>
            <div className="flex flex-wrap gap-2">
              {project.cast.map((actor, index) => (
                <span 
                  key={index} 
                  className="px-3 py-1 bg-white/10 rounded-full text-sm text-white border border-white/10 hover-scale-sm transition-all duration-300"
                >
                  {actor}
                </span>
              ))}
            </div>
          </div>
          {project.awards && project.awards.length > 0 && (
            <div className="mb-2">
              <h3 className="text-xl font-bold text-white mb-3 uppercase tracking-wider flex items-center gap-2"><Trophy size={20} className="text-[#d60209]" /> Awards</h3>
              <ul className="list-disc pl-7 text-gray-300">
                {project.awards.map((award, index) => (
                  <li key={index} className="mb-1">{award}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
        {/* Mobile Next/Prev Buttons */}
        <div className="flex md:hidden justify-between items-center w-full px-6 pb-4 pt-2 bg-black/80 absolute bottom-0 left-0 z-40">
          <button 
            onClick={(e) => {
              e.stopPropagation();
              onPrev();
            }}
            className="flex items-center py-2 px-4 border border-white/20 rounded hover:bg-white/10 transition-colors"
            aria-label="Previous Project"
          >
            <ChevronLeft size={16} className="mr-2" />
            Previous
          </button>
          <button 
            onClick={(e) => {
              e.stopPropagation();
              onNext();
            }}
            className="flex items-center py-2 px-4 border border-white/20 rounded hover:bg-white/10 transition-colors"
            aria-label="Next Project"
          >
            Next
            <ChevronRight size={16} className="ml-2" />
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectModal;