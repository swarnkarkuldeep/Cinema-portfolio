import { useParams, Link } from 'react-router-dom';
import { projects } from '../data/projects';
import { Trophy, ChevronLeft } from 'lucide-react';
import { motion } from 'framer-motion';

const ProjectPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const project = projects.find(p => p.id === Number(id));

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white">
        <h1 className="text-5xl font-bold mb-4">404</h1>
        <p className="text-2xl mb-6 text-gray-300">Project not found.</p>
        <Link to="/" className="text-white underline text-lg">Go back home</Link>
      </div>
    );
  }

  return (
    <motion.div
      className="min-h-screen bg-black text-white flex flex-col items-center py-12 px-4"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -40 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <motion.div
        className="max-w-6xl w-full flex flex-col md:flex-row bg-black rounded-2xl shadow-2xl border border-white/10 relative"
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
      >
        {/* Left: Image with overlays */}
        <motion.div
          className="relative md:w-[420px] w-full min-h-[220px] md:min-h-[600px] flex-shrink-0 flex items-stretch overflow-hidden border-r border-white/10"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
        >
          <img 
            src={project.image} 
            alt={project.title + ' main image'}
            loading="lazy"
            className="w-full h-full object-cover object-center"
            style={{ minHeight: 220 }}
          />
          {/* Top-left overlay: title/year/category */}
          <motion.div
            className="absolute top-0 left-0 m-6 bg-black/70 px-5 py-3 rounded-lg shadow-lg"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4, ease: 'easeOut' }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-1 leading-tight">{project.title}</h2>
            <div className="flex flex-wrap items-center gap-2 text-gray-300 text-base mb-1">
              <span className="uppercase tracking-widest text-xs text-white font-semibold">{project.category}</span>
              <span className="text-white">•</span>
              <span>{project.year}</span>
            </div>
          </motion.div>
          {/* Bottom overlay: director/quick credits */}
          <motion.div
            className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-6 flex flex-col gap-1"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5, ease: 'easeOut' }}
          >
            <div className="text-gray-300 text-sm">Directed by <span className="text-white font-semibold">{project.director}</span></div>
            <div className="flex flex-wrap gap-4 text-xs text-gray-400 mt-1">
              <span>Cinematographer: <span className="text-white">{project.cinematographer}</span></span>
              <span>Producer: <span className="text-white">{project.producer}</span></span>
            </div>
          </motion.div>
        </motion.div>
        {/* Right: Scrollable content */}
        <motion.div
          className="md:w-[calc(100%-420px)] w-full flex flex-col max-h-[90vh] overflow-y-auto p-6 md:p-12 scrollbar-hide"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
        >
          <motion.div className="mb-10" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.6 }}>
            <h3 className="text-3xl font-extrabold text-white mb-4 uppercase tracking-wider">About</h3>
            <p className="text-gray-300 leading-relaxed text-lg">{project.description}</p>
          </motion.div>
          <motion.div className="mb-10" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.7 }}>
            <h3 className="text-xl font-bold text-white mb-3 uppercase tracking-wider">Credits</h3>
            <div className="flex flex-wrap gap-8">
              <div className="bg-white/5 rounded-lg px-5 py-3">
                <div className="text-xs text-gray-400 uppercase mb-1">Director</div>
                <div className="text-white text-base font-semibold">{project.director}</div>
              </div>
              <div className="bg-white/5 rounded-lg px-5 py-3">
                <div className="text-xs text-gray-400 uppercase mb-1">Cinematographer</div>
                <div className="text-white text-base font-semibold">{project.cinematographer}</div>
              </div>
              <div className="bg-white/5 rounded-lg px-5 py-3">
                <div className="text-xs text-gray-400 uppercase mb-1">Producer</div>
                <div className="text-white text-base font-semibold">{project.producer}</div>
              </div>
            </div>
          </motion.div>
          <motion.div className="mb-10" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.8 }}>
            <h3 className="text-xl font-bold text-white mb-3 uppercase tracking-wider">Cast</h3>
            <div className="flex flex-wrap gap-2">
              {project.cast.map((actor, index) => (
                <span 
                  key={index} 
                  className="px-3 py-1 bg-white/10 rounded-full text-sm text-white border border-white/10 hover-scale-sm transition-all duration-300"
                >
                  {actor}
                </span>
              ))}
            </div>
          </motion.div>
          {project.awards && project.awards.length > 0 && (
            <motion.div className="mb-2" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.9 }}>
              <h3 className="text-xl font-bold text-white mb-3 uppercase tracking-wider flex items-center gap-2"><Trophy size={20} className="text-white" /> Awards</h3>
              <ul className="list-disc pl-7 text-gray-300">
                {project.awards.map((award, index) => (
                  <li key={index} className="mb-1">{award}</li>
                ))}
              </ul>
            </motion.div>
          )}
          <Link to="/" className="mt-8 inline-flex items-center text-white hover:underline text-lg"><ChevronLeft className="mr-2" />Back to Home</Link>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectPage; 