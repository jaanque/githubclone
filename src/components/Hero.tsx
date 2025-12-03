import { ArrowRight, Box, Database, Globe, CheckCircle2, Play, Layers, Server } from 'lucide-react';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Hero() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Intro animations - Mechanical/Precise
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

      // Continuous subtle movement for connection lines
      gsap.to(".connection-dash", {
        strokeDashoffset: -20,
        duration: 2,
        repeat: -1,
        ease: "none"
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="pt-32 pb-24 lg:pt-48 lg:pb-32 overflow-hidden bg-white relative border-b border-slate-100">
      {/* Background Grid - Technical/Blueprint */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none z-0"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto hero-text mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-slate-50 border border-slate-200 text-slate-600 text-xs font-mono uppercase tracking-wider mb-8">
            <span className="w-2 h-2 rounded-full bg-blue-600"></span>
            v1.0 Stable Release
          </div>

          <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-slate-900 mb-8 leading-[1.1]">
            Infraestructura com a <br className="hidden lg:block"/>
            <span className="text-blue-600">Diagrama</span>
          </h1>

          <p className="text-xl text-slate-600 mb-10 max-w-3xl leading-relaxed font-light">
            Dissenya arquitectures complexes arrossegant components. Origen genera el codi Terraform i desplega la teva infraestructura amb precisió d'enginyeria.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto">
            <button className="bg-slate-900 text-white hover:bg-slate-800 px-8 py-4 rounded-lg font-semibold text-lg flex items-center justify-center gap-3 transition-all shadow-sm hover:shadow-md">
              Començar Ara <ArrowRight className="w-5 h-5" />
            </button>
            <button className="bg-white text-slate-700 border border-slate-200 hover:border-slate-300 hover:bg-slate-50 px-8 py-4 rounded-lg font-semibold text-lg flex items-center justify-center gap-3 transition-all">
              <Play className="w-5 h-5 fill-slate-700" /> Demo en viu
            </button>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-x-12 gap-y-4 text-sm text-slate-500 font-medium">
            <div className="flex items-center gap-2.5">
              <CheckCircle2 className="w-5 h-5 text-blue-600" />
              <span>Desplegament Atòmic</span>
            </div>
            <div className="flex items-center gap-2.5">
              <CheckCircle2 className="w-5 h-5 text-blue-600" />
              <span>Estat Immutable</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Layers className="w-5 h-5 text-blue-600" />
              <span>Exportació ISO/IEC</span>
            </div>
          </div>
        </div>

        {/* Visual Canvas Representation - Clean Lines, No Neon */}
        <div className="hero-visual relative mx-auto max-w-6xl">
          <div className="bg-white rounded-xl border border-slate-200 shadow-xl overflow-hidden aspect-[16/9] relative z-10">
            {/* Toolbar - Technical Look */}
            <div className="h-12 border-b border-slate-200 bg-slate-50/50 flex items-center px-4 justify-between">
              <div className="flex gap-4 items-center">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full border border-slate-300 bg-slate-100"></div>
                  <div className="w-2.5 h-2.5 rounded-full border border-slate-300 bg-slate-100"></div>
                  <div className="w-2.5 h-2.5 rounded-full border border-slate-300 bg-slate-100"></div>
                </div>
                <div className="h-4 w-px bg-slate-200 mx-2"></div>
                <div className="flex gap-4 text-slate-400">
                    <Box className="w-4 h-4"/>
                    <Globe className="w-4 h-4 text-blue-600"/>
                    <Database className="w-4 h-4"/>
                </div>
              </div>
              <div className="px-3 py-1 bg-white border border-slate-200 text-slate-600 text-[10px] font-mono uppercase tracking-wider rounded">
                Read Only
              </div>
            </div>

            {/* Canvas Area */}
            <div className="absolute inset-0 top-12 bg-white">
              <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:20px_20px]"></div>

              <div className="absolute inset-0 flex items-center justify-center">

                {/* Nodes and Connections SVG - Line Art */}
                <svg className="w-full h-full" viewBox="0 0 800 400">
                  <defs>
                     <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                        <polygon points="0 0, 10 3.5, 0 7" fill="#94a3b8" />
                     </marker>
                  </defs>

                  {/* Lines */}
                  <g stroke="#cbd5e1" strokeWidth="1.5" fill="none">
                    <path d="M150,200 L300,200" markerEnd="url(#arrowhead)" />
                    <path d="M400,200 L550,200" markerEnd="url(#arrowhead)" />
                    <path d="M350,250 L350,300" markerEnd="url(#arrowhead)" />

                    {/* Dashed animated line */}
                    <path className="connection-dash" d="M350,150 L350,100" strokeDasharray="4 4" />
                  </g>

                  {/* Node 1: LB */}
                  <g transform="translate(100, 175)">
                    <rect width="50" height="50" rx="8" fill="white" stroke="#3b82f6" strokeWidth="2" />
                    <Globe className="text-blue-600" x="13" y="13" width="24" height="24" strokeWidth={1.5} />
                  </g>

                  {/* Node 2: App Cluster */}
                  <g transform="translate(300, 150)">
                    <rect width="100" height="100" rx="4" fill="white" stroke="#94a3b8" strokeWidth="2" strokeDasharray="4 4" />
                    <rect width="80" height="80" x="10" y="10" rx="8" fill="white" stroke="#0f172a" strokeWidth="2" />
                    <Server className="text-slate-800" x="26" y="26" width="48" height="48" strokeWidth={1.5} />
                    <text x="50" y="-15" textAnchor="middle" className="text-[10px] font-mono fill-slate-500 uppercase tracking-widest">Cluster</text>
                  </g>

                  {/* Node 3: DB */}
                  <g transform="translate(550, 175)">
                    <rect width="50" height="50" rx="8" fill="white" stroke="#10b981" strokeWidth="2" />
                    <Database className="text-emerald-600" x="13" y="13" width="24" height="24" strokeWidth={1.5} />
                  </g>

                  {/* Node 4: Storage */}
                  <g transform="translate(325, 300)">
                    <rect width="50" height="50" rx="8" fill="white" stroke="#f59e0b" strokeWidth="2" />
                    <Box className="text-amber-500" x="13" y="13" width="24" height="24" strokeWidth={1.5} />
                  </g>

                  {/* Labels */}
                  <text x="125" y="240" textAnchor="middle" className="text-[10px] font-sans fill-slate-500 font-medium">Ingress</text>
                  <text x="575" y="240" textAnchor="middle" className="text-[10px] font-sans fill-slate-500 font-medium">Postgres</text>

                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
