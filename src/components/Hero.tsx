import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ArrowRight, Code, Zap, Globe } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const ctaRef = useRef(null);
  const visualRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.fromTo(titleRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, delay: 0.5 }
    )
    .fromTo(subtitleRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8 },
      "-=0.6"
    )
    .fromTo(ctaRef.current,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6 },
      "-=0.4"
    )
    .fromTo(visualRef.current,
      { scale: 0.9, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1 },
      "-=0.8"
    );
  }, []);

  return (
    <div ref={heroRef} className="relative pt-32 pb-20 sm:pt-40 sm:pb-24 overflow-hidden bg-white">
      {/* Background gradients */}
      <div className="absolute top-0 left-1/2 w-full -translate-x-1/2 h-full z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[20%] w-[500px] h-[500px] bg-blue-100 rounded-full blur-3xl opacity-60 mix-blend-multiply animate-pulse"></div>
        <div className="absolute top-[10%] right-[20%] w-[400px] h-[400px] bg-purple-100 rounded-full blur-3xl opacity-60 mix-blend-multiply animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 ref={titleRef} className="text-5xl sm:text-7xl font-extrabold tracking-tight text-gray-900 mb-8">
          Construye software <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
            junto con el mundo.
          </span>
        </h1>

        <p ref={subtitleRef} className="mt-4 text-xl text-gray-500 max-w-3xl mx-auto mb-10 leading-relaxed font-light">
          GitClone es la plataforma de desarrollo completa para alojar y revisar código,
          gestionar proyectos y crear software con millones de desarrolladores.
        </p>

        <div ref={ctaRef} className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-black text-white px-8 py-3 rounded-full font-bold text-lg hover:bg-gray-800 transition-transform transform hover:scale-105 flex items-center justify-center gap-2 cursor-pointer shadow-lg hover:shadow-xl">
            Empieza ahora <ArrowRight className="w-5 h-5" />
          </button>
          <button className="bg-white border border-gray-300 text-gray-700 px-8 py-3 rounded-full font-bold text-lg hover:border-gray-800 hover:text-black transition-colors cursor-pointer shadow-sm hover:shadow-md">
            Contactar ventas
          </button>
        </div>

        {/* Visual Element / Grid */}
        <div ref={visualRef} className="mt-20 relative mx-auto max-w-5xl border border-gray-200 rounded-2xl bg-white/50 backdrop-blur overflow-hidden shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-200">
            <div className="p-10 flex flex-col items-center hover:bg-gray-50 transition-colors duration-300">
              <div className="p-3 bg-blue-50 rounded-full mb-4">
                <Code className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Código Seguro</h3>
              <p className="text-gray-500 text-sm leading-relaxed">Repositorios privados y públicos con seguridad avanzada integrada.</p>
            </div>
            <div className="p-10 flex flex-col items-center hover:bg-gray-50 transition-colors duration-300">
              <div className="p-3 bg-purple-50 rounded-full mb-4">
                <Zap className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">CI/CD Rápido</h3>
              <p className="text-gray-500 text-sm leading-relaxed">Automatiza tus flujos de trabajo directamente desde el repositorio.</p>
            </div>
            <div className="p-10 flex flex-col items-center hover:bg-gray-50 transition-colors duration-300">
              <div className="p-3 bg-green-50 rounded-full mb-4">
                <Globe className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Colaboración Global</h3>
              <p className="text-gray-500 text-sm leading-relaxed">Conecta con equipos de todo el mundo sin fricción.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
