import { motion } from 'framer-motion';

const teamMembers = [
  {
    name: 'Matt Payel',
    bio: "Matt is a visionary leader with 15+ years in the film industry, known for her creative direction and passion for storytelling. She has produced multiple award-winning films and is the driving force behind CINĒMA's global vision.",
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
    <section id="team" className="py-24 md:py-36 px-0 bg-black relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-16 text-left">
          <h2 className="text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-4">
            Our Team
          </h2>
          <p className="text-gray-400 text-xl max-w-2xl">
            Meet the creative professionals behind CINĒMA's productions.
          </p>
        </div>
        {/* Team Members */}
        <div className="flex flex-col gap-12">
          {teamMembers.map((member, idx) => (
            <motion.div
              key={member.name}
              className="flex flex-col sm:flex-row items-center bg-white/5 border border-white/10 rounded-xl shadow-lg overflow-hidden group hover:bg-white/10 transition-all duration-300"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: idx * 0.12, ease: 'easeOut' }}
            >
              {/* Portrait */}
              <div className="w-full sm:w-56 h-72 sm:h-64 flex-shrink-0 overflow-hidden">
                <img
                  src={member.image}
                  alt={`Portrait of ${member.name}, ${member.role}`}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  loading="lazy"
                />
              </div>
              {/* Info */}
              <div className="flex-1 p-8 text-left">
                <div className="text-2xl md:text-3xl font-bold text-white mb-1 tracking-wide">
                  {member.name}
                </div>
                <div className="text-white font-mono text-xs mb-2 opacity-70 uppercase tracking-widest">
                  {member.role}
                </div>
                <p className="text-gray-300 text-base md:text-lg mb-2 min-h-[60px]">{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;