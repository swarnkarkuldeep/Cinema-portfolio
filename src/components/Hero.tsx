import React from 'react';
import { ArrowDownIcon } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.2]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.5]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, -100]);

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const title = "CINĖMA".split('');
  
  return (
    <motion.section 
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, ease: 'easeOut' }}
      style={{ scale, opacity, y }}
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-50"
      >
        <source src="https://player.vimeo.com/external/477721941.hd.mp4?s=1cd53e41e1e9b8dba989a78835781e0333a65587&profile_id=175" type="video/mp4" />
      </video>
      
      <div className="absolute inset-0 bg-black/60 z-10" />
      
      <div className="relative z-10 text-center px-6">
        <motion.h1 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
          className="text-[10rem] md:text-[15rem] lg:text-[20rem] font-bold tracking-tighter mb-6 leading-none"
        >
          {title.map((char, index) => (
            <motion.span 
              key={index} 
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              className="char-hover inline-block"
            >
              {char}
            </motion.span>
          ))}
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1, ease: 'easeOut' }}
          className="text-3xl md:text-4xl text-gray-300 max-w-4xl mx-auto mb-12"
        >
          Creating cinematic experiences that captivate, inspire, and transform.
        </motion.p>
        <motion.button 
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          onClick={scrollToProjects}
          className="border-2 border-white/30 rounded-full p-5 hover:bg-white/10 transition-all duration-300"
          aria-label="View Projects"
        >
          <ArrowDownIcon size={32} />
        </motion.button>
      </div>
      
      {/* Enhanced Marquee */}
      <motion.div 
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.5, ease: 'easeOut' }}
        className="absolute bottom-0 left-0 w-full overflow-hidden py-8 bg-black/30 backdrop-blur-sm"
      >
        <div className="marquee-container">
          <div className="marquee-content">
            <span className="text-5xl font-bold mx-8">FEATURE FILMS</span>
            <span className="text-5xl font-bold mx-8">•</span>
            <span className="text-5xl font-bold mx-8">COMMERCIALS</span>
            <span className="text-5xl font-bold mx-8">•</span>
            <span className="text-5xl font-bold mx-8">DOCUMENTARIES</span>
            <span className="text-5xl font-bold mx-8">•</span>
            <span className="text-5xl font-bold mx-8">MUSIC VIDEOS</span>
            <span className="text-5xl font-bold mx-8">•</span>
          </div>
          <div className="marquee-content" aria-hidden="true">
            <span className="text-5xl font-bold mx-8">FEATURE FILMS</span>
            <span className="text-5xl font-bold mx-8">•</span>
            <span className="text-5xl font-bold mx-8">COMMERCIALS</span>
            <span className="text-5xl font-bold mx-8">•</span>
            <span className="text-5xl font-bold mx-8">DOCUMENTARIES</span>
            <span className="text-5xl font-bold mx-8">•</span>
            <span className="text-5xl font-bold mx-8">MUSIC VIDEOS</span>
            <span className="text-5xl font-bold mx-8">•</span>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Hero;