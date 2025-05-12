import React, { useState, useEffect, useRef } from 'react';
import { Film, Camera, Monitor, Award, Users, Pencil, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

const SERVICES = [
  {
    icon: <Film size={64} className="text-black" />,
    title: 'Feature Film Production',
    description: 'Full-service production for feature-length films, from development and pre-production through filming and post-production.',
  },
  {
    icon: <Monitor size={64} className="text-black" />,
    title: 'Commercial Production',
    description: 'High-impact commercial and advertising content for brands looking to create visually stunning campaigns.',
  },
  {
    icon: <Camera size={64} className="text-black" />,
    title: 'Cinematography',
    description: 'Expert cinematography services utilizing cutting-edge equipment and innovative techniques to achieve unique visual aesthetics.',
  },
  {
    icon: <Pencil size={64} className="text-black" />,
    title: 'Script Development',
    description: 'Collaborative script development and storytelling consultation to refine and elevate your narrative.',
  },
  {
    icon: <Award size={64} className="text-black" />,
    title: 'Festival Strategy',
    description: 'Strategic planning and submission services to maximize your film\'s festival potential and market presence.',
  },
  {
    icon: <Users size={64} className="text-black" />,
    title: 'Talent Packaging',
    description: 'Access to our network of actors, directors, and crew to assemble the perfect team for your production.',
  },
];

const Services: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const total = SERVICES.length;
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const [isPaused, setIsPaused] = useState(false);

  const goPrev = () => setCurrent((prev) => (prev - 1 + total) % total);
  const goNext = () => setCurrent((prev) => (prev + 1) % total);

  // Auto-slide effect
  useEffect(() => {
    if (isPaused) return;
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % total);
    }, 4000);
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPaused, total]);

  // Pause on hover
  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);

  return (
    <section id="services" className="py-24 md:py-36 px-0 bg-black">
      <div className="w-full px-6 flex flex-col items-center">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-7 text-white tracking-tight">Our Services</h2>
          <p className="text-gray-300 text-xl">
            From concept to screen, <span className="text-white font-semibold">CINĒMA</span> offers comprehensive production services tailored to your creative vision.
          </p>
        </div>
        <div 
          className="relative w-full flex items-center justify-center h-[520px] overflow-hidden"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <button
            onClick={goPrev}
            className="absolute left-[72px] top-1/2 -translate-y-1/2 bg-black/70 hover:bg-black/90 text-white rounded-full p-3 z-30 transition shadow-lg focus:outline-none"
            aria-label="Previous Service"
            style={{ minWidth: 48, minHeight: 48 }}
          >
            <ChevronLeft size={32} />
          </button>
          <div className={`w-full shadow-2xl flex flex-col items-center text-center px-8 md:px-16 py-24 h-[520px] bg-white`} style={{ willChange: 'transform, opacity' }}>
            <motion.div 
              className="mb-12 flex items-center justify-center"
              key={current}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {SERVICES[current].icon}
            </motion.div>
            <motion.h3 
              className="text-3xl md:text-4xl font-bold mb-6 text-black"
              key={`title-${current}`}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {SERVICES[current].title}
            </motion.h3>
            <motion.p 
              className="text-black/80 text-xl mb-2"
              key={`desc-${current}`}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {SERVICES[current].description}
            </motion.p>
          </div>
          <button
            onClick={goNext}
            className="absolute right-[72px] top-1/2 -translate-y-1/2 bg-black/70 hover:bg-black/90 text-white rounded-full p-3 z-30 transition shadow-lg focus:outline-none"
            aria-label="Next Service"
            style={{ minWidth: 48, minHeight: 48 }}
          >
            <ChevronRight size={32} />
          </button>
        </div>
        <div className="flex justify-center gap-2 mt-8">
          {SERVICES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`w-3 h-3 rounded-full transition-all duration-500 ${idx === current ? 'bg-white scale-125' : 'bg-white/30 hover:bg-white/50'}`}
              aria-label={`Go to service ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;