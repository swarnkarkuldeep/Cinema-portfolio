import React, { useEffect, useRef, useState } from 'react';

const InteractiveBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    // Check if device is mobile based on screen width
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas dimensions to full window
    const resizeCanvas = () => {
      if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    // Determine appropriate particle count based on device
    const getParticleCount = () => {
      // Check for low-end devices based on screen size and pixel ratio
      const isLowEndDevice = window.innerWidth < 600 || window.devicePixelRatio < 2;
      
      if (isLowEndDevice) {
        return Math.min(40, Math.floor(window.innerWidth / 30)); // Fewer particles for low-end devices
      } else {
        return Math.min(80, Math.floor(window.innerWidth / 20)); // More particles for high-end devices
      }
    };
    
    // Particles configuration
    const particlesArray: Particle[] = [];
    const numberOfParticles = getParticleCount();
    
    const mousePosition = {
      x: 0,
      y: 0,
      radius: window.innerWidth < 768 ? 100 : 150 // Smaller radius on mobile
    };
    
    // Track mouse movement
    const handleMouseMove = (event: MouseEvent) => {
      mousePosition.x = event.x;
      mousePosition.y = event.y;
    };
    
    // Track touch movement for mobile
    const handleTouchMove = (event: TouchEvent) => {
      if (event.touches.length > 0) {
        event.preventDefault(); // Prevent scrolling while interacting with particles
        mousePosition.x = event.touches[0].clientX;
        mousePosition.y = event.touches[0].clientY;
      }
    };
    
    // Handle touch start to prevent default behavior
    const handleTouchStart = (e: TouchEvent) => {
      e.preventDefault();
    };
    
    // Add event listeners for both mouse and touch
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove, { passive: false });
    canvas.addEventListener('touchstart', handleTouchStart, { passive: false });
    
    // Show initial effect when loading the page
    const triggerInitialEffect = () => {
      // Create a ripple effect from the center of the screen
      mousePosition.x = window.innerWidth / 2;
      mousePosition.y = window.innerHeight / 2;
      
      // Expand the ripple then fade it out
      let radius = 10;
      const expandInterval = setInterval(() => {
        radius += 15;
        mousePosition.radius = radius;
        
        if (radius > (window.innerWidth < 768 ? 200 : 300)) {
          clearInterval(expandInterval);
          
          // Gradually return to normal
          setTimeout(() => {
            mousePosition.radius = window.innerWidth < 768 ? 100 : 150;
          }, 1000);
        }
      }, 50);
    };
    
    // Particle class with performance optimizations
    class Particle {
      x: number;
      y: number;
      size: number;
      baseX: number;
      baseY: number;
      density: number;
      color: string;
      type: 'circle' | 'kanji';
      opacity: number;
      vx: number; // velocity x for subtle movement
      vy: number; // velocity y for subtle movement
      
      constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.baseX = x;
        this.baseY = y;
        this.size = Math.random() * 3 + 1;
        this.density = (Math.random() * 10) + 1;
        this.opacity = Math.random() * 0.3 + 0.1;
        
        // Use fewer kanji characters on mobile to improve performance
        this.type = Math.random() > (window.innerWidth < 768 ? 0.95 : 0.9) ? 'kanji' : 'circle';
        
        // Replace red color with white for particle color
        this.color = `rgba(255,255,255,${this.opacity})`;
        
        // Add subtle movement with velocity
        this.vx = Math.random() * 0.2 - 0.1;
        this.vy = Math.random() * 0.2 - 0.1;
      }
      
      draw() {
        if (!ctx) return;
        
        if (this.type === 'circle') {
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
          ctx.fillStyle = this.color;
          ctx.fill();
        } else {
          // Draw stylized shapes resembling Japanese characters/elements
          ctx.save();
          ctx.translate(this.x, this.y);
          ctx.fillStyle = this.color;
          ctx.font = `${this.size * 5}px serif`;
          
          // Randomly choose a stylized symbol
          const symbols = ['・', '々', '丁', '〇', '千', '京', '東'];
          const symbol = symbols[Math.floor(Math.random() * symbols.length)];
          
          ctx.fillText(symbol, 0, 0);
          ctx.restore();
        }
      }
      
      update() {
        // Add subtle autonomous movement
        this.x += this.vx;
        this.y += this.vy;
        
        // Bounce off edges
        if (canvas && (this.x < 0 || this.x > canvas.width)) this.vx = -this.vx;
        if (canvas && (this.y < 0 || this.y > canvas.height)) this.vy = -this.vy;
        
        // Calculate distance between particle and mouse
        const dx = mousePosition.x - this.x;
        const dy = mousePosition.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        // Only calculate push effect if within range
        if (distance < mousePosition.radius) {
          const forceDirectionX = dx / distance;
          const forceDirectionY = dy / distance;
          const force = (mousePosition.radius - distance) / mousePosition.radius;
          
          // Push particle away from mouse
          this.x -= forceDirectionX * force * this.density;
          this.y -= forceDirectionY * force * this.density;
        }
        
        this.draw();
      }
    }
    
    // Initialize particles
    const init = () => {
      particlesArray.length = 0;
      
      if (canvas) {
        for (let i = 0; i < numberOfParticles; i++) {
          const x = Math.random() * canvas.width;
          const y = Math.random() * canvas.height;
          particlesArray.push(new Particle(x, y));
        }
      }
      
      // Trigger the initial effect with a short delay
      setTimeout(triggerInitialEffect, 1000);
    };
    
    init();
    
    // Animation loop with performance optimizations
    let animationFrameId: number;
    const animate = () => {
      if (canvas && ctx) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        for (let i = 0; i < particlesArray.length; i++) {
          particlesArray[i].update();
        }
        
        // Connect particles with lines if they're close enough
        // Skip this on low-end devices or reduce the number of connections
        if (window.innerWidth >= 768) {
          connectParticles();
        } else {
          // On mobile, only connect some particles
          if (Math.random() > 0.7) connectParticles(true);
        }
      }
      
      animationFrameId = requestAnimationFrame(animate);
    };
    
    // Draw lines between particles that are close to each other
    const connectParticles = (reducedConnections = false) => {
      if (!ctx) return;
      
      const connectionDistance = window.innerWidth < 768 ? 80 : 100;
      const connectionOpacity = window.innerWidth < 768 ? 0.05 : 0.1;
      
      // For mobile, only check a subset of connections to improve performance
      const increment = reducedConnections ? 2 : 1;
      
      for (let a = 0; a < particlesArray.length; a += increment) {
        for (let b = a; b < particlesArray.length; b += increment) {
          const distance = Math.sqrt(
            (particlesArray[a].x - particlesArray[b].x) ** 2 + 
            (particlesArray[a].y - particlesArray[b].y) ** 2
          );
          
          if (distance < connectionDistance) {
            ctx.strokeStyle = `rgba(255,255,255,${connectionOpacity * (connectionDistance - distance) / connectionDistance})`;
            ctx.lineWidth = 0.2;
            ctx.beginPath();
            ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
            ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
            ctx.stroke();
          }
        }
      }
    };
    
    animate();
    
    // Clean up
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      if (canvas) {
        canvas.removeEventListener('touchstart', handleTouchStart);
      }
      cancelAnimationFrame(animationFrameId);
    };
  }, []);
  
  return (
    <canvas 
      ref={canvasRef} 
      className={`fixed top-0 left-0 w-full h-full pointer-events-none z-0 ${isMobile ? 'opacity-15' : 'opacity-20'}`}
      aria-hidden="true"
    />
  );
};

export default InteractiveBackground; 