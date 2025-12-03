import { ArrowRight, Server, Zap, Shield } from 'lucide-react';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Hero() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-content > *", {
        y: 30,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out"
      });

      gsap.from(".hero-visual", {
        x: 30,
        opacity: 0,
        duration: 1,
        delay: 0.5,
        ease: "power3.out"
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="pt-32 pb-20 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 hero-content">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              Nova Generació d'Infraestructura
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-6">
              Infraestructura <span className="text-blue-500">Low-Code</span> per a Startups
            </h1>
            <p className="text-xl text-slate-400 mb-8 max-w-lg">
              Construeix, desplega i escala la teva arquitectura al núvol en minuts. Sense complexitat, només rendiment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="flex items-center justify-center gap-2 bg-white text-slate-950 px-8 py-3 rounded-full font-bold hover:bg-slate-200 transition-colors">
                Comença gratuïtament <ArrowRight className="w-4 h-4" />
              </button>
              <button className="flex items-center justify-center gap-2 bg-slate-800 text-white px-8 py-3 rounded-full font-medium hover:bg-slate-700 transition-colors">
                Veure documentació
              </button>
            </div>

            <div className="mt-12 flex items-center gap-8 text-slate-500">
              <div className="flex items-center gap-2">
                <Server className="w-5 h-5" />
                <span>Zero config</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5" />
                <span>Desplegament instantani</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5" />
                <span>Seguretat Enterprise</span>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 hero-visual relative">
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>

            <div className="relative bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-2xl">
              <div className="flex items-center gap-2 mb-4 border-b border-slate-800 pb-4">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>

              <div className="space-y-4 font-mono text-sm">
                <div className="flex gap-4">
                  <span className="text-slate-500">1</span>
                  <span className="text-purple-400">resource</span> "aws_instance" "app" {'{'}
                </div>
                <div className="flex gap-4">
                  <span className="text-slate-500">2</span>
                  <span className="pl-4 text-slate-300">ami           = "ami-0c55b159cbfafe1f0"</span>
                </div>
                <div className="flex gap-4">
                  <span className="text-slate-500">3</span>
                  <span className="pl-4 text-slate-300">instance_type = "t2.micro"</span>
                </div>
                <div className="flex gap-4">
                  <span className="text-slate-500">4</span>
                  <span className="text-slate-300">{'}'}</span>
                </div>

                <div className="flex gap-4 pt-4">
                  <span className="text-slate-500">5</span>
                  <span className="text-green-400">origen deploy</span> <span className="text-slate-400">--env production</span>
                </div>
                <div className="flex gap-4">
                  <span className="text-slate-500">6</span>
                  <span className="text-blue-400">ℹ</span> <span className="text-slate-300">Optimitzant infraestructura...</span>
                </div>
                <div className="flex gap-4">
                  <span className="text-slate-500">7</span>
                  <span className="text-green-400">✔</span> <span className="text-slate-300">Desplegat a https://app.origen.io</span>
                </div>
              </div>

              {/* Illustration SVG overlay */}
              <div className="absolute -right-8 -bottom-8 w-40 h-40">
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-lg">
                   <circle cx="100" cy="100" r="80" fill="#3b82f6" fillOpacity="0.2" />
                   <path d="M60 100 L90 130 L140 70" fill="none" stroke="#3b82f6" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
