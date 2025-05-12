import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ParallaxWrapper, ParallaxSection } from './components/ParallaxWrapper';
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
import './styles/animations.css';

function App() {
  const [selectedProject, setSelectedProject] = useState<ProjectType | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(true);

  useEffect(() => {
    setIsLoaded(true);
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
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default App;