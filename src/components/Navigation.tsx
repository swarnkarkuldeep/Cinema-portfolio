import { useEffect, useState } from 'react';
import { Menu, X, Instagram, Twitter, Linkedin } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  };

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
      document.body.style.overflow = 'auto';
    }
  };

  return (
    <>
      <header 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled ? 'bg-black/90 backdrop-blur-sm py-3' : 'bg-transparent py-5'
        }`}
      >
        {/* Japanese-inspired accent line */}
        <div className={`absolute bottom-0 left-0 w-full h-[1px] transition-opacity duration-500 ${
          scrolled ? 'opacity-100' : 'opacity-0'
        }`}>
          <div className="h-full w-full bg-gradient-to-r from-transparent via-white to-transparent"></div>
        </div>
        
        <div className="px-6 flex justify-between items-center">
          <a href="#" className="text-2xl font-bold tracking-tighter hover:opacity-80 transition-opacity text-glow-on-hover flex flex-col mix-blend-difference text-white">
            <span>CINĒMA</span>
            <span className="text-[8px] text-white tracking-[0.25em] mt-[-3px] mix-blend-difference text-white">シネマスタジオ</span>
          </a>
          
          <nav className="hidden md:flex space-x-8">
            <button onClick={() => scrollTo('about')} className="nav-link jp-hover-effect mix-blend-difference text-white">About</button>
            <button onClick={() => scrollTo('services')} className="nav-link jp-hover-effect mix-blend-difference text-white">Services</button>
            <button onClick={() => scrollTo('projects')} className="nav-link jp-hover-effect mix-blend-difference text-white">Projects</button>
            <button onClick={() => scrollTo('team')} className="nav-link jp-hover-effect mix-blend-difference text-white">Team</button>
            <button onClick={() => scrollTo('contact')} className="nav-link jp-hover-effect mix-blend-difference text-white">Contact</button>
          </nav>
          
          <div className="hidden md:flex space-x-4">
            <a href="#" aria-label="Instagram link" className="text-white hover:text-gray-300 transition-colors hover-scale-sm">
              <Instagram size={18} />
            </a>
            <a href="#" aria-label="Twitter link" className="text-white hover:text-gray-300 transition-colors hover-scale-sm">
              <Twitter size={18} />
            </a>
            <a href="#" aria-label="LinkedIn link" className="text-white hover:text-gray-300 transition-colors hover-scale-sm">
              <Linkedin size={18} />
            </a>
          </div>
          
          <button 
            className="md:hidden focus:outline-none" 
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            <Menu size={24} className="text-white" />
          </button>
        </div>
      </header>
      
      {/* Mobile Menu */}
      <div 
        className={`fixed inset-0 bg-black z-50 flex flex-col justify-center items-center transition-all duration-500 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Subtle Japanese vertical character - mobile only */}
        <div className="absolute right-8 inset-y-0 flex items-center opacity-5 pointer-events-none">
          <div className="writing-vertical text-7xl text-white font-light mix-blend-difference">映画</div>
        </div>
      
        <button 
          className="absolute top-6 right-6 focus:outline-none" 
          onClick={toggleMenu}
          aria-label="Close Menu"
        >
          <X size={24} className="text-white" />
        </button>
        
        <nav className="flex flex-col space-y-8 text-center">
          <button onClick={() => scrollTo('about')} className="text-2xl font-light tracking-wider hover:text-gray-300 transition-colors text-glow-on-hover mix-blend-difference text-white">
            <span>About</span>
            <span className="block text-[10px] text-white mt-1 tracking-widest mix-blend-difference text-white">概要</span>
          </button>
          <button onClick={() => scrollTo('services')} className="text-2xl font-light tracking-wider hover:text-gray-300 transition-colors text-glow-on-hover mix-blend-difference text-white">
            <span>Services</span>
            <span className="block text-[10px] text-white mt-1 tracking-widest mix-blend-difference text-white">サービス</span>
          </button>
          <button onClick={() => scrollTo('projects')} className="text-2xl font-light tracking-wider hover:text-gray-300 transition-colors text-glow-on-hover mix-blend-difference text-white">
            <span>Projects</span>
            <span className="block text-[10px] text-white mt-1 tracking-widest mix-blend-difference text-white">作品</span>
          </button>
          <button onClick={() => scrollTo('team')} className="text-2xl font-light tracking-wider hover:text-gray-300 transition-colors text-glow-on-hover mix-blend-difference text-white">
            <span>Team</span>
            <span className="block text-[10px] text-white mt-1 tracking-widest mix-blend-difference text-white">チーム</span>
          </button>
          <button onClick={() => scrollTo('contact')} className="text-2xl font-light tracking-wider hover:text-gray-300 transition-colors text-glow-on-hover mix-blend-difference text-white">
            <span>Contact</span>
            <span className="block text-[10px] text-white mt-1 tracking-widest mix-blend-difference text-white">連絡先</span>
          </button>
        </nav>
        
        <div className="mt-16 flex space-x-6">
          <a href="#" aria-label="Instagram" className="text-white hover:text-gray-300 transition-colors">
            <Instagram size={24} />
          </a>
          <a href="#" aria-label="Twitter" className="text-white hover:text-gray-300 transition-colors">
            <Twitter size={24} />
          </a>
          <a href="#" aria-label="LinkedIn" className="text-white hover:text-gray-300 transition-colors">
            <Linkedin size={24} />
          </a>
        </div>
      </div>
    </>
  );
};

export default Navigation;