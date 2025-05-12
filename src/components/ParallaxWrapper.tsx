import { motion, useScroll, useTransform } from 'framer-motion';

interface ParallaxWrapperProps {
  children: React.ReactNode;
  className?: string;
  offset?: number;
}

export const ParallaxWrapper: React.FC<ParallaxWrapperProps> = ({ 
  children, 
  className = '', 
  offset = 50 
}) => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, offset]);

  return (
    <motion.div 
      style={{ ...{ willChange: 'transform, opacity' }, y }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const ParallaxSection: React.FC<ParallaxWrapperProps> = ({ 
  children, 
  className = '', 
  offset = 100 
}) => {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.05]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);
  const y = useTransform(scrollYProgress, [0, 1], [0, offset]);

  return (
    <motion.section 
      style={{ ...{ willChange: 'transform, opacity' }, y, scale, opacity }}
      className={className}
    >
      {children}
    </motion.section>
  );
};
