import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Globe, Server, Settings, Zap, ArrowRight, Database, Box } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    id: 1,
    title: "Disseny Visual",
    description: "El nostre canvas infinit et permet arrossegar i connectar serveis com si estiguessis dibuixant en una pissarra. Sense codi complex, només lògica pura.",
    icon: <Zap className="w-6 h-6" />
  },
  {
    id: 2,
    title: "Configuració Granular",
    description: "Accedeix a cada node i ajusta la memòria, CPU i variables d'entorn. Tot validat en temps real per evitar errors de producció.",
    icon: <Settings className="w-6 h-6" />
  },
  {
    id: 3,
    title: "Desplegament Global",
    description: "Amb un sol clic, Origen converteix el teu diagrama en Terraform i el desplega a la teva regió preferida. Multiclou natiu.",
    icon: <Globe className="w-6 h-6" />
  }
];

export default function InteractiveWorkflow() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Progress Line Animation
      gsap.fromTo(".progress-line-fill",
        { height: "0%" },
        {
          height: "100%",
          ease: "none",
          scrollTrigger: {
            trigger: ".steps-container",
            start: "top center",
            end: "bottom center",
            scrub: true
          }
        }
      );

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top+=100",
          end: "bottom bottom-=100",
          pin: ".visual-container",
          scrub: 1,
        }
      });

      // --- Animation Timeline for Visuals ---

      // Initial State (Step 1 is default)
      // Transition to Step 2
      timeline.to(".visual-scene", { scale: 1.5, x: -50, y: -20, duration: 1, ease: "power2.inOut" }, 0.5); // Zoom in
      timeline.to(".config-panel", { x: 0, opacity: 1, duration: 1, ease: "power2.out" }, 0.8); // Show panel

      // Transition to Step 3
      timeline.to(".config-panel", { x: 50, opacity: 0, duration: 0.5 }, 2.0); // Hide panel
      timeline.to(".visual-scene", { scale: 0.8, x: 0, y: 0, duration: 1, ease: "power2.inOut" }, 2.0); // Zoom out
      timeline.to(".world-map", { opacity: 1, duration: 1 }, 2.2); // Show Map
      timeline.to(".connection-line", { strokeDashoffset: 0, duration: 1, stagger: 0.2 }, 2.5); // Draw lines

      // Step text highlighting
      steps.forEach((step) => {
        ScrollTrigger.create({
          trigger: `#step-${step.id}`,
          start: "top center",
          end: "bottom center",
          onToggle: ({ isActive }) => {
            gsap.to(`#step-${step.id} .step-icon`, {
              backgroundColor: isActive ? "#2563eb" : "#eff6ff",
              color: isActive ? "#ffffff" : "#2563eb",
              scale: isActive ? 1.1 : 1,
              duration: 0.3
            });
            gsap.to(`#step-${step.id} .step-number`, {
              backgroundColor: isActive ? "#2563eb" : "#ffffff",
              color: isActive ? "#ffffff" : "#2563eb",
              borderColor: isActive ? "#2563eb" : "#e2e8f0",
              duration: 0.3
            });
          }
        });
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="py-24 bg-slate-50 overflow-hidden" ref={containerRef}>
      <div className="container mx-auto px-6">
        <div className="mb-16 max-w-2xl">
          <h2 className="text-sm font-bold text-blue-600 tracking-wide uppercase mb-3">Com funciona</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900">
            Del concepte al núvol en tres passos
          </h3>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 relative">

          {/* Left Column: Scrollable Text Steps */}
          <div className="lg:w-1/2 flex flex-col gap-32 py-24 relative z-10 steps-container">
            {/* Vertical Progress Line */}
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-slate-200 hidden lg:block">
              <div className="progress-line-fill w-full bg-blue-600 h-0"></div>
            </div>

            {steps.map((step) => (
              <div key={step.id} id={`step-${step.id}`} className="workflow-step relative pl-12 lg:pl-20">
                <div className="step-number absolute left-0 lg:left-0 top-0 w-8 h-8 rounded-full bg-white border-2 border-slate-200 flex items-center justify-center font-bold text-blue-600 z-10 transition-colors duration-300">
                  {step.id}
                </div>
                <div className="relative">
                  <div className="step-icon bg-blue-50 w-14 h-14 rounded-xl flex items-center justify-center text-blue-600 mb-6 transition-colors duration-300 shadow-sm">
                    {step.icon}
                  </div>
                  <h4 className="text-3xl font-bold text-slate-900 mb-4">{step.title}</h4>
                  <p className="text-lg text-slate-600 leading-relaxed mb-6">
                    {step.description}
                  </p>
                  <div className="flex items-center text-blue-600 font-medium group cursor-pointer text-lg">
                    Saber-ne més <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Sticky Visuals */}
          <div className="lg:w-1/2 relative lg:h-[800px] hidden lg:block">
            <div className="visual-container lg:absolute lg:top-0 lg:right-0 w-full h-[600px] bg-slate-900 rounded-3xl shadow-2xl overflow-hidden border border-slate-800">

              {/* Background Grid */}
              <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

              {/* Unified Scene Container */}
              <div className="absolute inset-0 flex items-center justify-center visual-scene origin-center">

                {/* World Map Background (Hidden initially) */}
                <div className="world-map absolute inset-0 opacity-0 pointer-events-none scale-150">
                   {/* Simplified Map Dots */}
                   <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/40 to-transparent"></div>
                   <Globe className="w-96 h-96 text-slate-800/50 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" strokeWidth={0.5} />
                </div>

                {/* Nodes Graph */}
                <div className="relative w-[400px] h-[300px]">
                   {/* Connections */}
                   <svg className="absolute inset-0 w-full h-full overflow-visible pointer-events-none">
                      <path d="M100,150 L200,150" stroke="#475569" strokeWidth="2" />
                      <path d="M200,150 L300,80" stroke="#475569" strokeWidth="2" />
                      <path d="M200,150 L300,220" stroke="#475569" strokeWidth="2" />

                      {/* Dynamic Global Connections (Step 3) */}
                      <path className="connection-line" d="M300,80 C400,80 500,-50 600,-50" fill="none" stroke="#3b82f6" strokeWidth="2" strokeDasharray="300" strokeDashoffset="300" />
                      <path className="connection-line" d="M300,220 C400,220 500,350 600,350" fill="none" stroke="#10b981" strokeWidth="2" strokeDasharray="300" strokeDashoffset="300" />
                   </svg>

                   {/* Node: LB */}
                   <div className="absolute top-1/2 left-[50px] -translate-y-1/2 -translate-x-1/2 w-20 h-20 bg-slate-800 border border-slate-600 rounded-xl flex items-center justify-center shadow-lg z-10">
                      <Globe className="text-blue-400 w-8 h-8" />
                      <div className="absolute -bottom-6 text-slate-400 text-xs font-mono">LB-01</div>
                   </div>

                   {/* Node: App Core (Target for Zoom) */}
                   <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-24 h-24 bg-slate-800 border border-blue-500 rounded-xl flex items-center justify-center shadow-lg z-20 shadow-blue-500/20">
                      <Server className="text-amber-400 w-10 h-10" />
                      <div className="absolute -bottom-6 text-white text-xs font-mono bg-blue-600 px-2 py-0.5 rounded">App-Core</div>
                   </div>

                   {/* Node: DB */}
                   <div className="absolute top-[80px] right-[50px] -translate-y-1/2 w-20 h-20 bg-slate-800 border border-slate-600 rounded-xl flex items-center justify-center shadow-lg z-10">
                      <Database className="text-emerald-400 w-8 h-8" />
                      <div className="absolute -bottom-6 text-slate-400 text-xs font-mono">DB-Pri</div>
                   </div>

                   {/* Node: Storage */}
                   <div className="absolute bottom-[80px] right-[50px] translate-y-1/2 w-20 h-20 bg-slate-800 border border-slate-600 rounded-xl flex items-center justify-center shadow-lg z-10">
                      <Box className="text-purple-400 w-8 h-8" />
                      <div className="absolute -bottom-6 text-slate-400 text-xs font-mono">S3-Assets</div>
                   </div>
                </div>

              </div>

              {/* Config Panel (Overlay for Step 2) */}
              <div className="config-panel absolute top-1/2 right-10 -translate-y-1/2 w-64 bg-slate-800/90 backdrop-blur-md border border-slate-600 rounded-xl p-5 shadow-2xl opacity-0 translate-x-10 z-30">
                 <div className="flex items-center justify-between mb-4 border-b border-slate-700 pb-2">
                    <span className="text-white font-mono text-sm">App-Core.conf</span>
                    <Settings className="w-4 h-4 text-slate-400" />
                 </div>
                 <div className="space-y-3 font-mono text-xs">
                    <div>
                       <div className="text-slate-500 mb-1">instance_type</div>
                       <div className="text-green-400">"t3.xlarge"</div>
                    </div>
                    <div>
                       <div className="text-slate-500 mb-1">replicas</div>
                       <div className="flex gap-1">
                          <span className="text-blue-400">3</span>
                          <span className="text-slate-600"># Auto-scaling enabled</span>
                       </div>
                    </div>
                    <div>
                       <div className="text-slate-500 mb-1">env_vars</div>
                       <div className="text-amber-400">["DB_HOST", "API_KEY"]</div>
                    </div>
                 </div>
                 <div className="mt-4 pt-3 border-t border-slate-700 flex justify-end">
                    <button className="bg-blue-600 hover:bg-blue-500 text-white text-xs px-3 py-1.5 rounded transition-colors">
                       Aplicar
                    </button>
                 </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
