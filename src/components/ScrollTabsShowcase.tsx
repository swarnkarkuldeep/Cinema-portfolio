import { motion } from 'framer-motion';
import { useRef } from 'react';

const slides = [
  {
    align: 'items-start',
    textPos: 'left-0 top-0 pl-12 pt-16',
    heading: 'Crafting Cinematic Experiences',
    content: 'We transform ideas into visually stunning stories. Our team blends creativity and technology to deliver unforgettable films, commercials, and documentaries.',
    bg: 'bg-black text-white',
    video: '/videos/1.mp4',
  },
  {
    align: 'items-end',
    textPos: 'right-0 top-20 pr-12 pt-16 text-right',
    heading: 'Global Vision, Local Stories',
    content: 'From Tokyo to Los Angeles, we capture authentic moments and diverse cultures. Every project is a journey, every frame a new perspective.',
    bg: 'bg-gray-900 text-white',
    video: '/videos/2.mp4',
  },
  {
    align: 'items-start',
    textPos: 'left-0 top-20 pl-12 pt-16',
    heading: 'Innovation Meets Emotion',
    content: 'Using the latest in film technology, we create work that resonates on a human level. Let us bring your vision to life.',
    bg: 'bg-gray-800 text-white',
    video: '/videos/3.mp4',
  },
];

const variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

const ScrollTabsShowcase = () => {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <div className="relative w-full mt-16">
      {slides.map((slide, idx) => (
        <div
          key={idx}
          className={`sticky top-0 h-screen flex ${slide.align} justify-center overflow-hidden ${slide.bg}`}
        >
          <video
            className="absolute inset-0 w-full h-full object-cover z-0 opacity-60"
            src={slide.video}
            autoPlay
            loop
            muted
            playsInline
          />
          <motion.div
            className={`absolute z-10 max-w-3xl px-8 ${slide.textPos}`}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.7 }}
            variants={variants}
          >
            <h2 className="text-5xl md:text-7xl font-extrabold mb-6 uppercase tracking-tight leading-tight">{slide.heading}</h2>
            <p className="text-2xl md:text-3xl font-medium opacity-90 max-w-2xl">{slide.content}</p>
          </motion.div>
        </div>
      ))}
    </div>
  );
};

export default ScrollTabsShowcase; 