import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Globe, Settings, Zap, Database, Box, Cpu } from 'lucide-react';

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
          start: "top top+=50",
          end: "bottom bottom-=50",
          pin: ".visual-container",
          scrub: 0.5, // Smoother scrubbing
        }
      });

      // --- Scene 1: Construct (Nodes Snap In) ---
      // Start with opacity 0 and scaled down
      timeline.from(".node-item", { scale: 0, opacity: 0, duration: 0.5, stagger: 0.1, ease: "back.out(1.7)" });
      timeline.from(".connection-line-static", { strokeDashoffset: 100, duration: 0.5 }, "<0.3");

      // --- Scene 2: Configure (Slide Panel) ---
      // Zoom into App Node
      timeline.to(".visual-scene", { scale: 1.2, x: -60, y: -20, duration: 0.8, ease: "power2.inOut" }, "+=0.2");
      timeline.to(".app-node-border", { stroke: "#3b82f6", strokeWidth: 3, duration: 0.3 }, "<");
      // Panel slides in from right, connecting line draws
      timeline.fromTo(".config-line", { width: 0 }, { width: 60, duration: 0.4 }, ">");
      timeline.fromTo(".config-panel", { x: 20, opacity: 0 }, { x: 0, opacity: 1, duration: 0.6, ease: "power2.out" }, "<");
      // Panel internals animate
      timeline.from(".config-item", { x: 10, opacity: 0, stagger: 0.1, duration: 0.4 }, ">");

      // --- Scene 3: Deploy (Global Map & Packets) ---
      // Hide panel and zoom out
      timeline.to(".config-panel", { opacity: 0, duration: 0.3 }, "+=0.5");
      timeline.to(".config-line", { width: 0, duration: 0.3 }, "<");
      timeline.to(".app-node-border", { stroke: "#cbd5e1", strokeWidth: 1, duration: 0.3 }, "<");

      timeline.to(".visual-scene", { scale: 0.7, x: 0, y: 0, duration: 1, ease: "power2.inOut" }, ">");

      // Reveal Map (Behind nodes)
      timeline.to(".world-map", { opacity: 1, duration: 0.8 }, "<");

      // Connection lines to regions expand
      timeline.to(".global-connection", { strokeDashoffset: 0, duration: 1, stagger: 0.2 }, ">");

      // Data packets travel
      timeline.to(".data-packet", {
        motionPath: {
          path: "#path-us",
          align: "#path-us",
          autoRotate: true,
          alignOrigin: [0.5, 0.5],
        },
        duration: 1.5,
        repeat: 3,
        ease: "power1.inOut"
      }, "<");

      // Step highlighting logic
      steps.forEach((step) => {
        ScrollTrigger.create({
          trigger: `#step-${step.id}`,
          start: "top center",
          end: "bottom center",
          onToggle: ({ isActive }) => {
            if(isActive) {
               gsap.to(`#step-${step.id} .step-icon`, { backgroundColor: "#1e293b", color: "#fff", scale: 1.1, duration: 0.3 });
               gsap.to(`#step-${step.id} .step-number`, { backgroundColor: "#1e293b", color: "#fff", borderColor: "#1e293b", duration: 0.3 });
            } else {
               gsap.to(`#step-${step.id} .step-icon`, { backgroundColor: "#f1f5f9", color: "#475569", scale: 1, duration: 0.3 });
               gsap.to(`#step-${step.id} .step-number`, { backgroundColor: "#fff", color: "#475569", borderColor: "#e2e8f0", duration: 0.3 });
            }
          }
        });
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="py-32 bg-white overflow-hidden" ref={containerRef}>
      <div className="container mx-auto px-6">
        <div className="mb-24 max-w-2xl">
          <h2 className="text-xs font-bold text-slate-500 uppercase tracking-[0.2em] mb-4">Flux de treball</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
            Enginyeria de sistemes, <br/>simplificada.
          </h3>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 relative">

          {/* Left Column: Scrollable Text Steps */}
          <div className="lg:w-5/12 flex flex-col gap-40 py-12 relative z-10 steps-container">
            {/* Vertical Progress Line */}
            <div className="absolute left-5 top-0 bottom-0 w-px bg-slate-200 hidden lg:block">
              <div className="progress-line-fill w-full bg-slate-800 h-0"></div>
            </div>

            {steps.map((step) => (
              <div key={step.id} id={`step-${step.id}`} className="workflow-step relative pl-16 lg:pl-24">
                <div className="step-number absolute left-1 lg:left-1 top-1 w-9 h-9 rounded-full bg-white border border-slate-200 flex items-center justify-center font-mono font-bold text-slate-500 z-10 transition-colors duration-300 text-sm">
                  0{step.id}
                </div>
                <div className="relative">
                  <div className="step-icon bg-slate-100 w-12 h-12 rounded-lg flex items-center justify-center text-slate-600 mb-6 transition-all duration-300 shadow-sm border border-slate-100">
                    {step.icon}
                  </div>
                  <h4 className="text-2xl font-bold text-slate-900 mb-4">{step.title}</h4>
                  <p className="text-lg text-slate-600 leading-relaxed mb-6 font-light">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Sticky Visuals - CLEAN / TECHNICAL STYLE */}
          <div className="lg:w-7/12 relative lg:h-[800px] hidden lg:block">
            <div className="visual-container lg:absolute lg:top-0 lg:right-0 w-full h-[600px] bg-slate-50 rounded-xl border border-slate-200 overflow-hidden">

              {/* Technical Grid Background */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:40px_40px]"></div>

              {/* Unified Scene Container */}
              <div className="absolute inset-0 flex items-center justify-center visual-scene origin-center">

                {/* World Map Background (Hidden initially) */}
                <div className="world-map absolute inset-0 opacity-0 pointer-events-none scale-125">
                   <Globe className="w-[500px] h-[500px] text-slate-200 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-50" strokeWidth={0.5} />
                </div>

                {/* Nodes Graph */}
                <div className="relative w-[400px] h-[300px]">
                   {/* Connections SVG */}
                   <svg className="absolute inset-0 w-full h-full overflow-visible pointer-events-none">
                      {/* Static Connections (Step 1) */}
                      <path className="connection-line-static" d="M100,150 L200,150" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="100" />
                      <path className="connection-line-static" d="M200,150 L300,80" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="100" />
                      <path className="connection-line-static" d="M200,150 L300,220" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="100" />

                      {/* Global Connections (Step 3) */}
                      <path id="path-us" className="global-connection" d="M300,80 C400,80 450,20 550,20" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="300" strokeDashoffset="300" />
                      <path id="path-eu" className="global-connection" d="M300,220 C400,220 450,300 550,300" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="300" strokeDashoffset="300" />
                   </svg>

                   {/* Data Packet (Circle that moves) */}
                   <circle className="data-packet" r="4" fill="#3b82f6" cx="0" cy="0" opacity="0" />

                   {/* Node: LB */}
                   <div className="node-item absolute top-1/2 left-[50px] -translate-y-1/2 -translate-x-1/2 w-20 h-20 bg-white border border-slate-300 rounded-lg flex items-center justify-center shadow-sm z-10">
                      <Globe className="text-slate-600 w-8 h-8" strokeWidth={1.5} />
                      <div className="absolute -bottom-8 text-slate-400 text-[10px] font-mono uppercase tracking-widest">Ingress</div>
                   </div>

                   {/* Node: App Core (Target for Zoom) */}
                   <div className="node-item absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 z-20">
                      <div className="w-24 h-24 bg-white border border-slate-300 rounded-lg flex items-center justify-center shadow-md app-node-border">
                        <Cpu className="text-slate-800 w-10 h-10" strokeWidth={1.5} />
                      </div>
                      <div className="absolute -bottom-8 w-full text-center text-slate-800 text-[10px] font-mono font-bold uppercase tracking-widest">App Core</div>

                      {/* Connector Line for Config Panel */}
                      <div className="config-line absolute top-1/2 left-full h-px bg-blue-500 w-0 origin-left"></div>
                   </div>

                   {/* Node: DB */}
                   <div className="node-item absolute top-[80px] right-[50px] -translate-y-1/2 w-20 h-20 bg-white border border-slate-300 rounded-lg flex items-center justify-center shadow-sm z-10">
                      <Database className="text-slate-600 w-8 h-8" strokeWidth={1.5} />
                      <div className="absolute -bottom-8 text-slate-400 text-[10px] font-mono uppercase tracking-widest">Data</div>
                   </div>

                   {/* Node: Storage */}
                   <div className="node-item absolute bottom-[80px] right-[50px] translate-y-1/2 w-20 h-20 bg-white border border-slate-300 rounded-lg flex items-center justify-center shadow-sm z-10">
                      <Box className="text-slate-600 w-8 h-8" strokeWidth={1.5} />
                      <div className="absolute -bottom-8 text-slate-400 text-[10px] font-mono uppercase tracking-widest">Assets</div>
                   </div>
                </div>

              </div>

              {/* Config Panel (Clean Technical Style) */}
              <div className="config-panel absolute top-1/2 left-[60%] -translate-y-1/2 w-56 bg-white border border-slate-200 rounded-lg p-0 shadow-xl opacity-0 z-30 font-mono text-xs overflow-hidden">
                 <div className="bg-slate-50 border-b border-slate-200 px-4 py-2 flex justify-between items-center">
                    <span className="font-bold text-slate-700">node_config</span>
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                 </div>
                 <div className="p-4 space-y-3">
                    <div className="config-item">
                       <div className="text-slate-400 mb-1">cpu_allocation</div>
                       <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                          <div className="bg-blue-600 h-full w-3/4"></div>
                       </div>
                    </div>
                    <div className="config-item border-b border-slate-100 pb-2">
                       <div className="text-slate-400 mb-1">memory_limit</div>
                       <div className="text-slate-800 font-bold">2048Mi</div>
                    </div>
                    <div className="config-item pt-1">
                       <div className="flex gap-2 text-[10px]">
                          <span className="text-slate-400">replicas:</span>
                          <span className="text-blue-600 font-bold">auto-scale</span>
                       </div>
                    </div>
                 </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
