import { ArrowRight, Box, Database, Globe, Zap, CheckCircle2, Play, Layers } from 'lucide-react';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Hero() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Intro animations
      gsap.from(".hero-text > *", {
        y: 30,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out"
      });

      gsap.from(".hero-visual", {
        scale: 0.9,
        opacity: 0,
        duration: 1.2,
        delay: 0.4,
        ease: "power3.out"
      });

      // Subtle float animation for the canvas container
      gsap.to(".hero-visual-container", {
        y: -15,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="pt-32 pb-24 lg:pt-48 lg:pb-32 overflow-hidden bg-white relative">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
         <div className="absolute -top-[20%] -right-[10%] w-[70vw] h-[70vw] bg-blue-100/50 rounded-full blur-3xl opacity-60 mix-blend-multiply filter"></div>
         <div className="absolute top-[20%] -left-[10%] w-[50vw] h-[50vw] bg-purple-100/50 rounded-full blur-3xl opacity-60 mix-blend-multiply filter"></div>
         <div className="absolute bottom-[10%] left-[20%] w-[40vw] h-[40vw] bg-emerald-100/40 rounded-full blur-3xl opacity-60 mix-blend-multiply filter"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto hero-text mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm text-slate-700 text-sm font-medium mb-8 hover:border-blue-300 transition-colors cursor-pointer">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Novetat:</span> Suport per Kubernetes natiu
          </div>

          <h1 className="text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 mb-8 leading-[1.1]">
            Construeix la teva infraestructura <br className="hidden lg:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">visualment</span>, sense límits.
          </h1>

          <p className="text-xl lg:text-2xl text-slate-600 mb-10 max-w-3xl leading-relaxed font-light">
            Deixa de barallar-te amb YAML i Terraform. Origen et permet dissenyar, desplegar i escalar la teva arquitectura al núvol amb una interfície drag-and-drop intuïtiva.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto">
            <button className="bg-slate-900 text-white hover:bg-slate-800 px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-3 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
              Començar de franc <ArrowRight className="w-5 h-5" />
            </button>
            <button className="bg-white text-slate-700 border border-slate-200 hover:border-slate-300 hover:bg-slate-50 px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-3 transition-all shadow-sm">
              <Play className="w-5 h-5 fill-slate-700" /> Veure Demo
            </button>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-x-12 gap-y-4 text-sm text-slate-500 font-medium">
            <div className="flex items-center gap-2.5 bg-white/60 px-4 py-2 rounded-full backdrop-blur-sm border border-slate-100">
              <CheckCircle2 className="w-5 h-5 text-emerald-500" />
              <span>Desplegament en minuts</span>
            </div>
            <div className="flex items-center gap-2.5 bg-white/60 px-4 py-2 rounded-full backdrop-blur-sm border border-slate-100">
              <CheckCircle2 className="w-5 h-5 text-emerald-500" />
              <span>AWS, GCP & Azure</span>
            </div>
            <div className="flex items-center gap-2.5 bg-white/60 px-4 py-2 rounded-full backdrop-blur-sm border border-slate-100">
              <Layers className="w-5 h-5 text-emerald-500" />
              <span>Exportació a Terraform</span>
            </div>
          </div>
        </div>

        {/* Visual Canvas Representation */}
        <div className="hero-visual relative mx-auto max-w-6xl">
          {/* Glow effect behind the image */}
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur opacity-20"></div>

          <div className="hero-visual-container bg-slate-50 rounded-2xl border border-slate-200 shadow-2xl overflow-hidden aspect-[16/9] relative z-10">
            {/* Toolbar */}
            <div className="h-14 border-b border-slate-200 bg-white flex items-center px-6 justify-between">
              <div className="flex gap-4 items-center">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                <div className="h-6 w-px bg-slate-200 mx-2"></div>
                <div className="flex gap-4 text-slate-500">
                    <Box className="w-5 h-5 cursor-pointer hover:text-blue-600 transition-colors"/>
                    <Globe className="w-5 h-5 cursor-pointer hover:text-blue-600 transition-colors"/>
                    <Database className="w-5 h-5 cursor-pointer hover:text-blue-600 transition-colors"/>
                </div>
              </div>
              <div className="px-4 py-1.5 bg-emerald-50 text-emerald-600 border border-emerald-100 text-xs font-bold rounded-full flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                En línia
              </div>
            </div>

            {/* Canvas Area */}
            <div className="absolute inset-0 top-14 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
            <div className="absolute inset-0 top-14 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:24px_24px]"></div>

            <div className="absolute inset-0 top-14 flex items-center justify-center">

              {/* Nodes and Connections SVG */}
              <svg className="w-full h-full" viewBox="0 0 1000 500">
                <defs>
                  <filter id="card-shadow" x="-50%" y="-50%" width="200%" height="200%">
                    <feDropShadow dx="0" dy="8" stdDeviation="6" floodColor="#1e293b" floodOpacity="0.1"/>
                  </filter>
                  <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#94a3b8" />
                    <stop offset="50%" stopColor="#3b82f6" />
                    <stop offset="100%" stopColor="#94a3b8" />
                  </linearGradient>
                </defs>

                {/* Connection Lines */}
                <path d="M250,250 C350,250 350,150 450,150" fill="none" stroke="url(#line-gradient)" strokeWidth="2" strokeDasharray="6 6" className="animate-[dash_20s_linear_infinite]" />
                <path d="M250,250 C350,250 350,350 450,350" fill="none" stroke="url(#line-gradient)" strokeWidth="2" strokeDasharray="6 6" className="animate-[dash_20s_linear_infinite]" />
                <path d="M550,150 L650,250" fill="none" stroke="#cbd5e1" strokeWidth="2" />
                <path d="M550,350 L650,250" fill="none" stroke="#cbd5e1" strokeWidth="2" />
                <path d="M650,250 L800,250" fill="none" stroke="#cbd5e1" strokeWidth="2" />

                {/* Node 1: Load Balancer */}
                <g transform="translate(150, 200)" className="cursor-pointer hover:translate-y-[-4px] transition-transform duration-300">
                  <rect width="100" height="100" rx="16" fill="white" stroke="#e2e8f0" strokeWidth="1" filter="url(#card-shadow)" />
                  <Globe className="text-blue-500" x="34" y="24" width="32" height="32" />
                  <text x="50" y="80" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#334155" fontFamily="sans-serif">Load Balancer</text>
                  <circle cx="100" cy="50" r="4" fill="#3b82f6" stroke="white" strokeWidth="2"/>
                </g>

                {/* Node 2: App Server */}
                <g transform="translate(450, 100)" className="cursor-pointer hover:translate-y-[-4px] transition-transform duration-300">
                  <rect width="100" height="100" rx="16" fill="white" stroke="#e2e8f0" strokeWidth="1" filter="url(#card-shadow)" />
                  <Zap className="text-amber-500" x="34" y="24" width="32" height="32" />
                  <text x="50" y="80" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#334155" fontFamily="sans-serif">App Core</text>
                  <circle cx="0" cy="50" r="4" fill="#f59e0b" stroke="white" strokeWidth="2"/>
                  <circle cx="100" cy="50" r="4" fill="#f59e0b" stroke="white" strokeWidth="2"/>
                </g>

                {/* Node 3: Database */}
                <g transform="translate(450, 300)" className="cursor-pointer hover:translate-y-[-4px] transition-transform duration-300">
                  <rect width="100" height="100" rx="16" fill="white" stroke="#e2e8f0" strokeWidth="1" filter="url(#card-shadow)" />
                  <Database className="text-emerald-500" x="34" y="24" width="32" height="32" />
                  <text x="50" y="80" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#334155" fontFamily="sans-serif">Postgres DB</text>
                  <circle cx="0" cy="50" r="4" fill="#10b981" stroke="white" strokeWidth="2"/>
                  <circle cx="100" cy="50" r="4" fill="#10b981" stroke="white" strokeWidth="2"/>
                </g>

                {/* Node 4: Storage */}
                <g transform="translate(650, 200)" className="cursor-pointer hover:translate-y-[-4px] transition-transform duration-300">
                  <rect width="100" height="100" rx="16" fill="white" stroke="#e2e8f0" strokeWidth="1" filter="url(#card-shadow)" />
                  <Box className="text-purple-500" x="34" y="24" width="32" height="32" />
                  <text x="50" y="80" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#334155" fontFamily="sans-serif">S3 Bucket</text>
                  <circle cx="0" cy="50" r="4" fill="#a855f7" stroke="white" strokeWidth="2"/>
                </g>

                {/* Status Pills */}
                <g transform="translate(800, 230)">
                   <rect width="140" height="40" rx="20" fill="#f1f5f9" stroke="#cbd5e1" />
                   <circle cx="20" cy="20" r="6" fill="#22c55e" />
                   <text x="35" y="24" fontSize="12" fill="#475569" fontFamily="sans-serif" fontWeight="bold">Tot Operatiu</text>
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
