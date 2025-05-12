import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ParallaxSection } from './components/ParallaxWrapper';
import Hero from './components/Hero';
import Navigation from './components/Navigation';
import ProjectGrid from './components/ProjectGrid';
import ProjectModal from './components/ProjectModal';
import About from './components/About';
import Services from './components/Services';
import Team from './components/Team';
import Footer from './components/Footer';
import { ProjectType } from './types';
import { projects } from './data/projects';
import Grain from './components/Grain';
import InteractiveBackground from './components/InteractiveBackground';
import ScrollTabsShowcase from './components/ScrollTabsShowcase';
import './styles/animations.css';
import './styles/scroll-animations.css';

function App() {
  const [selectedProject, setSelectedProject] = useState<ProjectType | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 1200); // Simulate loading spinner
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const pageVariants = {
    initial: { opacity: 0, scale: 0.95 },
    in: { opacity: 1, scale: 1 },
    out: { opacity: 0, scale: 1.05 }
  };

  const pageTransition = {
    type: 'tween',
    ease: 'anticipate',
    duration: 0.5
  };

  const nextProject = () => {
    if (selectedProject) {
      const currentIndex = projects.findIndex(p => p.id === selectedProject.id);
      const nextIndex = (currentIndex + 1) % projects.length;
      setSelectedProject(projects[nextIndex]);
    }
  };

  const prevProject = () => {
    if (selectedProject) {
      const currentIndex = projects.findIndex(p => p.id === selectedProject.id);
      const prevIndex = (currentIndex - 1 + projects.length) % projects.length;
      setSelectedProject(projects[prevIndex]);
    }
  };

  return (
    <>
      {!isLoaded && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black">
          <div className="w-16 h-16 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
      <AnimatePresence mode='wait'>
        {isLoaded && (
          <motion.div 
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
            className="bg-black text-white"
          >
            <InteractiveBackground />
            <Navigation />
            <ParallaxSection>
              <Hero />
            </ParallaxSection>
            <ParallaxSection offset={60}>
              <ProjectGrid 
                projects={projects}
                openModal={(project: ProjectType) => {
                  setSelectedProject(project);
                  setIsModalOpen(true);
                }}
              />
            </ParallaxSection>
            <ParallaxSection offset={80}>
              <About />
            </ParallaxSection>
            <ScrollTabsShowcase />
            <ParallaxSection offset={100}>
              <Services />
            </ParallaxSection>
            <ParallaxSection offset={60}>
              <Team />
            </ParallaxSection>
            <Footer />
            <Grain />
            {isModalOpen && selectedProject && (
              <ProjectModal 
                project={selectedProject}
                onClose={() => setIsModalOpen(false)}
                onNext={nextProject}
                onPrev={prevProject}
              />
            )}
            {showBackToTop && (
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="fixed bottom-8 right-8 z-50 bg-white text-black rounded-full shadow-lg p-4 hover:bg-white/80 transition-all border-2 border-white/30"
                aria-label="Back to Top"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                </svg>
              </button>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default App;