const About: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-32 px-6">
      <div className="px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 animation-fade-in">About CINĒMA</h2>
            <p className="text-gray-300 mb-6 leading-relaxed animation-fade-in animation-delay-300">
              Founded in 2025, CINĒMA is a visionary production studio dedicated to crafting exceptional
              cinematic experiences that captivate audiences worldwide.
            </p>
            <p className="text-gray-300 mb-6 leading-relaxed animation-fade-in animation-delay-500">
              Our team of award-winning filmmakers, cinematographers, and visual artists push the boundaries
              of visual storytelling, combining technical innovation with artistic vision to create
              unforgettable narratives.
            </p>
            <p className="text-gray-300 leading-relaxed animation-fade-in animation-delay-700">
              Based in both Los Angeles and Tokyo, CINĒMA collaborates with global talent to produce
              feature films, documentaries, and commercial content that resonates across cultures and genres.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="aspect-[3/4] overflow-hidden animation-fade-in animation-delay-200">
              <img
                src="https://images.pexels.com/photos/2873507/pexels-photo-2873507.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Professional camera equipment on set"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-[3/4] overflow-hidden mt-8 animation-fade-in animation-delay-400">
              <img
                src="https://images.pexels.com/photos/66134/pexels-photo-66134.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Film crew working on a production set"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        <div className="mt-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="animation-fade-in animation-delay-300">
              <h3 className="text-2xl font-semibold mb-4">Our Philosophy</h3>
              <p className="text-gray-300">
                We believe in the power of visual storytelling to move hearts, change minds, and
                transcend boundaries. Every frame is a canvas for emotion and meaning.
              </p>
            </div>
            <div className="animation-fade-in animation-delay-500">
              <h3 className="text-2xl font-semibold mb-4">Our Approach</h3>
              <p className="text-gray-300">
                We combine cutting-edge technology with timeless storytelling techniques,
                embracing innovation while honoring the craft of filmmaking.
              </p>
            </div>
            <div className="animation-fade-in animation-delay-700">
              <h3 className="text-2xl font-semibold mb-4">Our Promise</h3>
              <p className="text-gray-300">
                Each project receives our complete dedication to excellence, from concept
                development through final delivery, with meticulous attention to detail.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;