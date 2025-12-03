import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { Heart, Globe, MessageCircle } from 'lucide-react';

const Community = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      gsap.fromTo(containerRef.current.children,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%"
          }
        }
      );
    }
  }, []);

  return (
    <section id="community" className="py-24 bg-gradient-to-b from-[#0d1117] to-[#161b22] text-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-5xl font-bold text-white mb-6">
          Uneix-te a la comunitat global
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-16">
          Més de 50 milions de desenvolupadors utilitzen GitClone per compartir codi, aprendre i créixer junts.
        </p>

        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-pink-500/10 rounded-full flex items-center justify-center mb-6">
              <Heart className="w-8 h-8 text-pink-500" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Open Source</h3>
            <p className="text-gray-400">Contribueix a projectes que canvien el món. El cor del software modern viu aquí.</p>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mb-6">
              <Globe className="w-8 h-8 text-blue-500" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Connecta</h3>
            <p className="text-gray-400">Troba mentors, col·laboradors i amics en la comunitat de desenvolupadors més gran.</p>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-yellow-500/10 rounded-full flex items-center justify-center mb-6">
              <MessageCircle className="w-8 h-8 text-yellow-500" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Discussions</h3>
            <p className="text-gray-400">Comparteix idees, resol dubtes i participa en debats tècnics enriquidors.</p>
          </div>
        </div>

        <div className="mt-20">
          <div className="inline-block relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
            <button className="relative px-8 py-4 bg-white text-black rounded-lg leading-none flex items-center divide-x divide-gray-300">
              <span className="flex items-center space-x-5">
                <span className="pr-6 text-gray-900 font-bold text-lg">Crea el teu compte gratuït</span>
              </span>
              <span className="pl-6 text-indigo-600 group-hover:text-indigo-900 transition duration-200 font-bold">Inscriu-te &rarr;</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;
