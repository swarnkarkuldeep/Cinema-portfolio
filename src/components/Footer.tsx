import React, { useState } from 'react';
import { Instagram, Twitter, Linkedin, Mail, MapPin, ArrowRight } from 'lucide-react';

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
    <footer id="contact" className="pt-20 pb-10 px-6 bg-black border-t border-white/10">
      <div className="px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Contact Form Section */}
          <div className="lg:col-span-2 animation-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Get in Touch</h2>
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
                      className="w-full md:w-auto px-6 py-3 bg-white text-black font-medium rounded hover:bg-white/90 transition-colors flex items-center justify-center group"
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
                  <p>1-3-5 Shibuya, Tokyo, Japan</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Studio Info Section */}
          <div className="animation-fade-in animation-delay-300">
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">CINĒMA</h2>
              <p className="text-gray-400">
                Creating cinematic experiences that captivate, inspire, and transform since 2025.
              </p>
            </div>
            
            <div className="mb-8">
              <h3 className="text-lg font-medium mb-4">Connect With Us</h3>
              <div className="flex space-x-4">
                <a 
                  href="#" 
                  className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram size={18} />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter size={18} />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={18} />
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-4">Working Hours</h3>
              <p className="text-gray-400 mb-1">Monday - Friday: 9am - 6pm</p>
              <p className="text-gray-400">Weekends: By appointment only</p>
            </div>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} CINĒMA. All rights reserved.
          </p>
          
          <div className="flex flex-wrap gap-4 text-sm text-gray-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Careers</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;