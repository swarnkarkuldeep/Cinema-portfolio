import { motion } from 'framer-motion';

const teamMembers = [
  {
    name: 'Matt Payel',
    bio: "Matt is a visionary leader with 15+ years in the film industry, known for his creative direction and passion for storytelling. He has produced multiple award-winning films and is the driving force behind CINĒMA's global vision.",
    role: 'C.E.O',
    image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    name: 'Jack Remon',
    bio: "Jack oversees all financial operations and strategic partnerships. With a background in both finance and the arts, he ensures every project is delivered on time and on budget.",
    role: 'C.F.O',
    image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    name: 'Sophia Rodriguez',
    bio: "Sophia leads development, working closely with writers and directors to bring compelling stories to life. Her expertise in narrative structure and character development is unmatched.",
    role: 'Head of Development',
    image: 'https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    name: 'Marcus Lim',
    bio: "Marcus is an award-winning cinematographer with a keen eye for visual storytelling. He brings technical mastery and artistic flair to every frame.",
    role: 'Director of Photography',
    image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
];

const Team: React.FC = () => {
  return (
    <section id="team" className="py-16 md:py-24 px-4 bg-black relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold tracking-wider text-white mb-2">
            Our Team
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Meet the passionate professionals behind CINĒMA's award-winning productions.
          </p>
        </div>
        {/* Team Members */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          {teamMembers.map((member, idx) => (
            <motion.div
              key={member.name}
              className="flex flex-col items-center bg-white/5 border border-white/10 shadow-lg p-6 hover:bg-white/10 transition-all duration-300 group"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: 'easeOut' }}
            >
              <div className="border-4 border-white overflow-hidden shadow-md mb-4" style={{ width: 120, height: 120, background: '#181818' }}>
                <img
                  src={member.image}
                  alt={`Portrait of ${member.name}, ${member.role}`}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  loading="lazy"
                />
              </div>
              <div className="text-center">
                <div className="text-xl md:text-2xl font-bold tracking-widest text-white mb-1 text-glow-on-hover">
                  {member.name}
                </div>
                <div className="text-white font-mono text-xs mb-2 opacity-80">[{member.role}]</div>
                <p className="text-gray-300 text-sm mb-2 min-h-[60px]">{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;