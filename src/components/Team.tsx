import React from 'react';

interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
  delay: number;
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, role, image, delay }) => {
  return (
    <div className={`animation-fade-in animation-delay-${delay}`}>
      <div className="aspect-[4/5] overflow-hidden bg-gray-800 mb-4">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
        />
      </div>
      <h3 className="text-xl font-semibold">{name}</h3>
      <p className="text-gray-400">{role}</p>
    </div>
  );
};

const Team: React.FC = () => {
  return (
    <section id="team" className="py-20 md:py-32 px-6">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 animation-fade-in">Our Team</h2>
        <p className="text-gray-400 mb-16 animation-fade-in animation-delay-200">
          Meet the visionaries behind CINĒMA's award-winning productions
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <TeamMember 
            name="Alexandra Chen"
            role="Founder & Creative Director"
            image="https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            delay={300}
          />
          
          <TeamMember 
            name="Julian West"
            role="Executive Producer"
            image="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            delay={400}
          />
          
          <TeamMember 
            name="Sophia Rodriguez"
            role="Head of Development"
            image="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            delay={500}
          />
          
          <TeamMember 
            name="Marcus Lim"
            role="Director of Photography"
            image="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            delay={600}
          />
        </div>
      </div>
    </section>
  );
};

export default Team;