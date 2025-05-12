import React, { useState } from 'react';
import { Instagram, Twitter, Linkedin, Mail, MapPin, ArrowRight, Github } from 'lucide-react';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) {
      setError('Please enter your email');
      return;
    }
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setError('Please enter a valid email');
      return;
    }
    
    // In a real app, you would send this to your backend
    console.log('Submitting email:', email);
    setSubmitted(true);
    setError('');
    setEmail('');
    
    // Reset the submitted state after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
    }, 3000);
  };

  return (
    <footer id="contact" className="pt-20 pb-10 px-6 bg-black border-t border-white/10 relative">
      {/* Japanese-inspired decorative element */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-black via-white to-black"></div>
      
      {/* Subtle vertical Japanese characters */}
      <div className="absolute right-4 top-24 hidden lg:flex flex-col items-center opacity-10 pointer-events-none">
        <div className="writing-vertical text-6xl text-white font-light tracking-wider">
          シネマ
        </div>
      </div>

      <div className="px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Contact Form Section */}
          <div className="lg:col-span-2 animation-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">Get in Touch</h2>
            <p className="text-white mb-8 tracking-widest text-sm font-light">お問い合わせ</p>
            <p className="text-gray-300 mb-8 max-w-xl">
              Whether you're looking to collaborate on a project or just want to say hello, 
              we'd love to hear from you.
            </p>
            
            {submitted ? (
              <div className="bg-white/5 backdrop-blur-sm p-6 rounded border border-white/10 mb-8">
                <p className="text-emerald-400 font-medium">Thank you for contacting us! We'll be in touch soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mb-12">
                <div className="flex flex-col md:flex-row gap-4 mb-4">
                  <div className="flex-1">
                    <label htmlFor="email" className="block text-sm text-gray-400 mb-2">
                      Email Address
                    </label>
                    <input 
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (error) setError('');
                      }}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded focus:outline-none focus:border-white/30 text-white backdrop-blur-sm"
                      placeholder="your@email.com"
                    />
                    {error && <p className="mt-2 text-red-400 text-sm">{error}</p>}
                  </div>
                  <div className="md:self-end">
                    <button 
                      type="submit" 
                      className="w-full md:w-auto px-6 py-3 bg-white text-black font-medium rounded hover:bg-white/90 transition-colors flex items-center justify-center group btn-pulse"
                    >
                      Subscribe 
                      <ArrowRight size={18} className="ml-2 transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>
                </div>
                <p className="text-sm text-gray-500">
                  By subscribing, you'll receive updates on our latest projects and events.
                </p>
              </form>
            )}
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div>
                <div className="flex items-center mb-3">
                  <Mail size={18} className="text-gray-400 mr-3" />
                  <h3 className="text-lg font-medium">Email</h3>
                </div>
                <a href="mailto:info@cinema-studio.com" className="text-gray-300 hover:text-white transition-colors">
                  info@cinema-studio.com
                </a>
              </div>
              
              <div>
                <div className="flex items-center mb-3">
                  <MapPin size={18} className="text-gray-400 mr-3" />
                  <h3 className="text-lg font-medium">Studio Locations</h3>
                </div>
                <div className="text-gray-300">
                  <p className="mb-1">8721 Sunset Blvd, Los Angeles, CA</p>
                  <p className="flex items-center">
                    <span className="text-white mr-2 text-xs">東京</span>
                    1-3-5 Shibuya, Tokyo, Japan
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Studio Info Section */}
          <div className="animation-fade-in animation-delay-300">
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-1">CINĒMA</h2>
              <p className="text-xs text-white mb-4 tracking-[0.25em]">シネマスタジオ</p>
              <p className="text-gray-400">
                Creating cinematic experiences that captivate, inspire, and transform since 2025.
              </p>
            </div>
            
            <div className="mb-8">
              <h3 className="text-lg font-medium mb-4">Connect With Us</h3>
              <div className="flex space-x-4">
                <a 
                  href="#" 
                  className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors glow-on-hover"
                  aria-label="Instagram link"
                >
                  <Instagram size={18} />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors glow-on-hover"
                  aria-label="Twitter link"
                >
                  <Twitter size={18} />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors glow-on-hover"
                  aria-label="LinkedIn link"
                >
                  <Linkedin size={18} />
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-1">Working Hours</h3>
              <p className="text-xs text-white mb-3 tracking-wider">営業時間</p>
              <p className="text-gray-400 mb-1">Monday - Friday: 9am - 6pm</p>
              <p className="text-gray-400">Weekends: By appointment only</p>
            </div>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} CINĒMA. <span className="text-xs tracking-wider">版権所有</span>
          </p>
          
          <div className="flex flex-wrap gap-4 text-sm text-gray-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Careers</a>
          </div>
        </div>
        
        {/* Disclaimer */}
        <div className="mt-8 pt-6 border-t border-white/5 text-gray-500 text-xs leading-relaxed animate-fade-in-up" style={{animationDelay: '0.5s'}}>
          <p>
            <strong>LEGAL DISCLAIMER:</strong> This website is designed and developed exclusively for portfolio demonstration purposes and does not represent an actual commercial entity, film production company, or service provider. All visual content, including images, videos, and graphic elements, are either licensed, used under fair use for educational purposes, or sourced from royalty-free providers. All intellectual property rights belong to their respective owners. The film projects, team members, and services depicted herein are fictional and presented solely to demonstrate web design and development capabilities. Any resemblance to actual persons, companies, or creative works is entirely coincidental. This website was developed by Kuldeep Swarnkar as a non-commercial portfolio project to showcase proficiency in modern web development technologies including React, TypeScript, and Tailwind CSS.
          </p>
          <div className="mt-4 pt-4 border-t border-white/5 flex flex-col sm:flex-row items-center sm:items-start justify-between gap-4">
            <p className="text-gray-400">
              <a href="mailto:kuldeepswarnkar14@gmail.com" className="text-white hover:underline">kuldeepswarnkar14@gmail.com</a>
            </p>
            <a 
              href="https://github.com/kuldeepsinghIDBC" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full hover:bg-white/15 transition-colors glow-on-hover"
            >
              <Github size={16} className="text-white" />
              <span className="text-white text-xs">View on GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;