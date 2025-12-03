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
    <section id="community" className="py-24 bg-gray-50 text-center border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 mb-6">
          Únete a la comunidad global
        </h2>
        <p className="text-gray-500 text-lg max-w-2xl mx-auto mb-16 font-light">
          Más de 50 millones de desarrolladores utilizan GitClone para compartir código, aprender y crecer juntos.
        </p>

        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="flex flex-col items-center p-6 hover:bg-white hover:shadow-lg rounded-xl transition-all duration-300">
            <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mb-6">
              <Heart className="w-8 h-8 text-pink-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Open Source</h3>
            <p className="text-gray-500">Contribuye a proyectos que cambian el mundo. El corazón del software moderno vive aquí.</p>
          </div>

          <div className="flex flex-col items-center p-6 hover:bg-white hover:shadow-lg rounded-xl transition-all duration-300">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
              <Globe className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Conecta</h3>
            <p className="text-gray-500">Encuentra mentores, colaboradores y amigos en la comunidad de desarrolladores más grande.</p>
          </div>

          <div className="flex flex-col items-center p-6 hover:bg-white hover:shadow-lg rounded-xl transition-all duration-300">
            <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-6">
              <MessageCircle className="w-8 h-8 text-yellow-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Discusiones</h3>
            <p className="text-gray-500">Comparte ideas, resuelve dudas y participa en debates técnicos enriquecedores.</p>
          </div>
        </div>

        <div className="mt-20">
          <div className="inline-block relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 to-purple-600 rounded-full blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
            <button className="relative px-8 py-4 bg-black text-white rounded-full leading-none flex items-center divide-x divide-gray-700 cursor-pointer hover:bg-gray-900 transition-colors">
              <span className="flex items-center space-x-5">
                <span className="pr-6 font-bold text-lg">Crea tu cuenta gratis</span>
              </span>
              <span className="pl-6 text-gray-300 group-hover:text-white transition duration-200 font-bold">Regístrate &rarr;</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;
