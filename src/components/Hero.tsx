import React, { useRef, useEffect } from 'react';
import { ArrowDownIcon } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.2]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.5]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, -100]);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Load video and handle auto-play
  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.play().catch(error => {
        console.log('Auto-play was prevented:', error);
        
        // Add click event listener to play video on user interaction
        document.addEventListener('click', () => {
          video.play().catch(e => console.log('Play failed:', e));
        }, { once: true });
      });
    }
  }, []);

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
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>
      
      {/* Subtle vertical Japanese characters overlay */}
      <div className="absolute right-6 top-1/2 transform -translate-y-1/2 hidden lg:block z-10">
        <div className="writing-vertical text-8xl text-white/10 font-light pointer-events-none mix-blend-difference text-white">
          映画製作
        </div>
      </div>
      <div className="absolute left-6 top-1/2 transform -translate-y-1/2 hidden lg:block z-10">
        <div className="writing-vertical text-8xl text-white/10 font-light pointer-events-none mix-blend-difference text-white">
          シネマ
        </div>
      </div>
      
      <div className="relative z-20 text-center px-6">
        <motion.h1 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
          className="text-[8rem] md:text-[12rem] lg:text-[15rem] font-bold tracking-tighter mb-6 leading-none mix-blend-difference text-white"
        >
          {title.map((char, index) => (
            <motion.span 
              key={index} 
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              className="char-hover inline-block mix-blend-difference text-white"
            >
              {char}
            </motion.span>
          ))}
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1, ease: 'easeOut' }}
          className="text-2xl md:text-3xl text-white max-w-4xl mx-auto mb-8 font-semibold mix-blend-difference"
        >
          <span className="text-xs text-white tracking-[0.2em] block mb-2 mix-blend-difference text-white">映像制作スタジオ</span>
          Creating cinematic experiences that captivate, inspire, and transform.
        </motion.p>
        <motion.button 
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          onClick={scrollToProjects}
          className="border-2 border-white/30 rounded-full p-5 hover:bg-white/10 transition-all duration-300 mix-blend-difference text-white"
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
            <span className="text-4xl md:text-5xl font-bold mx-8">FEATURE FILMS</span>
            <span className="text-4xl md:text-5xl font-bold mx-8 text-white">•</span>
            <span className="text-4xl md:text-5xl font-bold mx-8">COMMERCIALS</span>
            <span className="text-4xl md:text-5xl font-bold mx-8 text-white">•</span>
            <span className="text-4xl md:text-5xl font-bold mx-8">DOCUMENTARIES</span>
            <span className="text-4xl md:text-5xl font-bold mx-8 text-white">•</span>
            <span className="text-4xl md:text-5xl font-bold mx-8">MUSIC VIDEOS</span>
            <span className="text-4xl md:text-5xl font-bold mx-8 text-white">•</span>
          </div>
          <div className="marquee-content" aria-hidden="true">
            <span className="text-4xl md:text-5xl font-bold mx-8">FEATURE FILMS</span>
            <span className="text-4xl md:text-5xl font-bold mx-8 text-white">•</span>
            <span className="text-4xl md:text-5xl font-bold mx-8">COMMERCIALS</span>
            <span className="text-4xl md:text-5xl font-bold mx-8 text-white">•</span>
            <span className="text-4xl md:text-5xl font-bold mx-8">DOCUMENTARIES</span>
            <span className="text-4xl md:text-5xl font-bold mx-8 text-white">•</span>
            <span className="text-4xl md:text-5xl font-bold mx-8">MUSIC VIDEOS</span>
            <span className="text-4xl md:text-5xl font-bold mx-8 text-white">•</span>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Hero;