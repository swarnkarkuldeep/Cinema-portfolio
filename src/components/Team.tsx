import React from 'react';
import { motion } from 'framer-motion';

const teamMembers = [
  {
    name: 'Matt Payel',
    fun: 'Loves pizza',
    role: 'C.E.O',
    image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    name: 'Jack Remon',
    fun: 'Plays piano',
    role: 'C.F.O',
    image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    name: 'Sophia Rodriguez',
    fun: 'Film buff',
    role: 'Head of Development',
    image: 'https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    name: 'Marcus Lim',
    fun: 'Camera geek',
    role: 'Director of Photography',
    image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
];

const Team: React.FC = () => {
  return (
    <section id="team" className="py-16 md:py-24 px-4 bg-black relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-10">
          <h2 className="text-4xl md:text-5xl font-bold font-mono tracking-wider text-white">
            Our Team
          </h2>
        </div>
        {/* Team Members */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          {teamMembers.map((member, idx) => (
            <motion.div
              key={member.name}
              className="flex flex-col items-center md:items-start hover-lift"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: 'easeOut' }}
            >
              <div className="border border-gray-700 img-hover-zoom" style={{ width: 160, height: 160, overflow: 'hidden', background: '#181818' }}>
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover grayscale transition-all duration-500 hover:grayscale-0"
                  style={{ display: 'block' }}
                  loading="lazy"
                />
              </div>
              <motion.div 
                className="mt-4 text-left"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 + idx * 0.1 }}
              >
                <div className="text-xl md:text-2xl font-mono font-bold tracking-widest text-white mb-1 text-glow-on-hover">
                  {member.name}
                </div>
                <div className="text-gray-400 font-mono text-sm mb-1 animate-fade-in-right" style={{animationDelay: `${0.4 + idx * 0.1}s`}}>
                  {member.fun}
                </div>
                <div className="text-[#d60209] font-mono text-xs animate-fade-in-right" style={{animationDelay: `${0.5 + idx * 0.1}s`}}>
                  [{member.role}]
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;