import { ArrowRight, Box, Database, Globe, Zap, CheckCircle2 } from 'lucide-react';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Hero() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-text > *", {
        y: 20,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out"
      });

      gsap.from(".hero-visual", {
        y: 40,
        opacity: 0,
        duration: 1,
        delay: 0.3,
        ease: "power2.out"
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="pt-32 pb-24 lg:pt-48 lg:pb-32 overflow-hidden bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto hero-text mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-sm font-medium mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            v1.0 Ara disponible per a Startups
          </div>

          <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-slate-900 mb-6">
            Infraestructura <span className="text-blue-600">Low-Code</span> per a desenvolupadors
          </h1>

          <p className="text-xl text-slate-600 mb-10 max-w-2xl leading-relaxed">
            Dissenya, desplega i escala la teva arquitectura al núvol amb la mateixa facilitat amb què dissenyes una interfície. Sense YAML, sense complexitat.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <button className="btn-primary flex items-center justify-center gap-2">
              Començar de franc <ArrowRight className="w-4 h-4" />
            </button>
            <button className="btn-secondary">
              Veure Demo
            </button>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm text-slate-500 font-medium">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              <span>Desplegament en minuts</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              <span>AWS & Google Cloud</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              <span>Sense bloqueig de proveïdor</span>
            </div>
          </div>
        </div>

        {/* Visual Canvas Representation */}
        <div className="hero-visual relative mx-auto max-w-5xl">
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent z-10 h-full w-full pointer-events-none"></div>

          <div className="bg-slate-50 rounded-xl border border-slate-200 shadow-2xl overflow-hidden aspect-[16/9] relative">
            {/* Toolbar */}
            <div className="h-12 border-b border-slate-200 bg-white flex items-center px-4 justify-between">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-slate-200"></div>
                <div className="w-3 h-3 rounded-full bg-slate-200"></div>
              </div>
              <div className="text-xs font-mono text-slate-400">origen-canvas-prod</div>
              <div className="px-3 py-1 bg-blue-50 text-blue-600 text-xs font-bold rounded">Desat</div>
            </div>

            {/* Canvas Area */}
            <div className="absolute inset-0 top-12 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
            <div className="absolute inset-0 top-12 flex items-center justify-center">

              {/* Nodes and Connections SVG */}
              <svg className="w-full h-full" viewBox="0 0 800 450">
                <defs>
                  <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
                    <feDropShadow dx="0" dy="4" stdDeviation="4" floodColor="#000000" floodOpacity="0.05"/>
                  </filter>
                </defs>

                {/* Connection Lines */}
                <path d="M200,225 C300,225 300,150 400,150" fill="none" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="4 4" className="animate-pulse" />
                <path d="M200,225 C300,225 300,300 400,300" fill="none" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="4 4" className="animate-pulse" />
                <path d="M480,150 L580,225" fill="none" stroke="#cbd5e1" strokeWidth="2" />
                <path d="M480,300 L580,225" fill="none" stroke="#cbd5e1" strokeWidth="2" />

                {/* Node 1: Load Balancer */}
                <g transform="translate(120, 185)" filter="url(#shadow)">
                  <rect width="80" height="80" rx="12" fill="white" stroke="#e2e8f0" strokeWidth="1" />
                  <Globe className="text-blue-500" x="24" y="16" width="32" height="32" />
                  <text x="40" y="65" textAnchor="middle" fontSize="10" fill="#64748b" fontFamily="sans-serif">Balancer</text>
                </g>

                {/* Node 2: App Server */}
                <g transform="translate(400, 110)" filter="url(#shadow)">
                  <rect width="80" height="80" rx="12" fill="white" stroke="#e2e8f0" strokeWidth="1" />
                  <Zap className="text-amber-500" x="24" y="16" width="32" height="32" />
                  <text x="40" y="65" textAnchor="middle" fontSize="10" fill="#64748b" fontFamily="sans-serif">App Core</text>
                </g>

                {/* Node 3: Database */}
                <g transform="translate(400, 260)" filter="url(#shadow)">
                  <rect width="80" height="80" rx="12" fill="white" stroke="#e2e8f0" strokeWidth="1" />
                  <Database className="text-emerald-500" x="24" y="16" width="32" height="32" />
                  <text x="40" y="65" textAnchor="middle" fontSize="10" fill="#64748b" fontFamily="sans-serif">Postgres</text>
                </g>

                {/* Node 4: Storage */}
                <g transform="translate(580, 185)" filter="url(#shadow)">
                  <rect width="80" height="80" rx="12" fill="white" stroke="#e2e8f0" strokeWidth="1" />
                  <Box className="text-purple-500" x="24" y="16" width="32" height="32" />
                  <text x="40" y="65" textAnchor="middle" fontSize="10" fill="#64748b" fontFamily="sans-serif">Assets</text>
                </g>

                {/* Floating "Add" Button UI */}
                <g transform="translate(700, 50)">
                   <rect width="40" height="40" rx="8" fill="#2563eb" />
                   <path d="M20 12 V28 M12 20 H28" stroke="white" strokeWidth="2" />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
