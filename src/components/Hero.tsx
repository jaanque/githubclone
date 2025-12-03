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
    <div ref={heroRef} className="relative pt-32 pb-20 sm:pt-40 sm:pb-24 overflow-hidden bg-[#0d1117]">
      {/* Background gradients */}
      <div className="absolute top-0 left-1/2 w-full -translate-x-1/2 h-full z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[20%] w-[500px] h-[500px] bg-purple-900/20 rounded-full blur-3xl opacity-50 mix-blend-screen animate-pulse"></div>
        <div className="absolute top-[10%] right-[20%] w-[400px] h-[400px] bg-blue-900/20 rounded-full blur-3xl opacity-50 mix-blend-screen animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 ref={titleRef} className="text-5xl sm:text-7xl font-extrabold tracking-tight text-white mb-8">
          Construeix software <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
            juntament amb el món.
          </span>
        </h1>

        <p ref={subtitleRef} className="mt-4 text-xl text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed">
          GitClone és la plataforma de desenvolupament completa per allotjar i revisar codi,
          gestionar projectes i crear software amb milions de desenvolupadors.
        </p>

        <div ref={ctaRef} className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-white text-black px-8 py-3 rounded-full font-bold text-lg hover:bg-gray-100 transition-transform transform hover:scale-105 flex items-center justify-center gap-2">
            Comença ara <ArrowRight className="w-5 h-5" />
          </button>
          <button className="bg-transparent border border-gray-600 text-white px-8 py-3 rounded-full font-bold text-lg hover:border-gray-400 transition-colors">
            Contacta amb vendes
          </button>
        </div>

        {/* Visual Element / Grid */}
        <div ref={visualRef} className="mt-20 relative mx-auto max-w-5xl border border-gray-800 rounded-xl bg-[#0d1117]/50 backdrop-blur overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-800">
            <div className="p-8 flex flex-col items-center">
              <Code className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Codi Segur</h3>
              <p className="text-gray-400 text-sm">Repositoris privats i públics amb seguretat avançada integrada.</p>
            </div>
            <div className="p-8 flex flex-col items-center">
              <Zap className="w-12 h-12 text-purple-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">CI/CD Ràpid</h3>
              <p className="text-gray-400 text-sm">Automatitza els teus fluxos de treball directament des del repositori.</p>
            </div>
            <div className="p-8 flex flex-col items-center">
              <Globe className="w-12 h-12 text-green-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Col·laboració Global</h3>
              <p className="text-gray-400 text-sm">Connecta amb equips d'arreu del món sense fricció.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
