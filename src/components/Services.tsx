import React from 'react';
import { Film, Camera, Monitor, Award, Users, Pencil } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, delay }) => {
  return (
    <div className={`p-6 bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 animation-fade-in animation-delay-${delay}`}>
      <div className="mb-5 text-white/80">{icon}</div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
};

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 md:py-32 px-6 bg-gradient-to-b from-black to-black/80">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animation-fade-in">Our Services</h2>
          <p className="text-gray-300 animation-fade-in animation-delay-200">
            From concept to screen, CINĒMA offers comprehensive production services tailored to your creative vision.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ServiceCard 
            icon={<Film size={32} />}
            title="Feature Film Production"
            description="Full-service production for feature-length films, from development and pre-production through filming and post-production."
            delay={300}
          />
          
          <ServiceCard 
            icon={<Monitor size={32} />}
            title="Commercial Production"
            description="High-impact commercial and advertising content for brands looking to create visually stunning campaigns."
            delay={400}
          />
          
          <ServiceCard 
            icon={<Camera size={32} />}
            title="Cinematography"
            description="Expert cinematography services utilizing cutting-edge equipment and innovative techniques to achieve unique visual aesthetics."
            delay={500}
          />
          
          <ServiceCard 
            icon={<Pencil size={32} />}
            title="Script Development"
            description="Collaborative script development and storytelling consultation to refine and elevate your narrative."
            delay={600}
          />
          
          <ServiceCard 
            icon={<Award size={32} />}
            title="Festival Strategy"
            description="Strategic planning and submission services to maximize your film's festival potential and market presence."
            delay={700}
          />
          
          <ServiceCard 
            icon={<Users size={32} />}
            title="Talent Packaging"
            description="Access to our network of actors, directors, and crew to assemble the perfect team for your production."
            delay={800}
          />
        </div>
      </div>
    </section>
  );
};

export default Services;