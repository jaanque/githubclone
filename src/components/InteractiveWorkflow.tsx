import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Globe, Server, Settings, Zap, Check, Sliders } from 'lucide-react';

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
      // 1. Vertical Progress Bar
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

      // 2. Pinning the Right Side
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: "bottom bottom",
        pin: ".visual-container-wrapper",
        scrub: true,
      });

      // 3. Step Active States (Text)
      steps.forEach((step) => {
        ScrollTrigger.create({
          trigger: `#step-${step.id}`,
          start: "top center+=100",
          end: "bottom center+=100",
          onToggle: ({ isActive }) => {
            gsap.to(`#step-${step.id} .step-content`, {
              opacity: isActive ? 1 : 0.4,
              x: isActive ? 0 : -20,
              duration: 0.4
            });
            gsap.to(`#step-${step.id} .step-icon-wrapper`, {
              scale: isActive ? 1.1 : 1,
              backgroundColor: isActive ? "#eff6ff" : "#f8fafc",
              borderColor: isActive ? "#3b82f6" : "#e2e8f0",
              color: isActive ? "#2563eb" : "#94a3b8",
              duration: 0.4
            });
          }
        });
      });

      // 4. Visual Transitions (Right Side)
      const visuals = gsap.utils.toArray('.visual-card');
      visuals.forEach((visual: any, i) => {
        // We want the visual to fade in when its corresponding step section enters
        ScrollTrigger.create({
          trigger: `#step-${i + 1}`,
          start: "top center",
          end: "bottom center",
          onEnter: () => {
             // Animate In
             gsap.to(visual, { autoAlpha: 1, y: 0, scale: 1, duration: 0.6, ease: "power3.out" });

             // Trigger internal animations based on index
             if (i === 0) { // Step 1: Drag & Connect
               gsap.fromTo(".anim-drag-node", { x: -50, opacity: 0 }, { x: 0, opacity: 1, duration: 0.8, delay: 0.2, ease: "back.out" });
               gsap.fromTo(".anim-connect-line", { strokeDashoffset: 100 }, { strokeDashoffset: 0, duration: 0.8, delay: 0.6 });
             } else if (i === 1) { // Step 2: Sliders
                gsap.fromTo(".anim-slider", { width: "0%" }, { width: "70%", duration: 1, stagger: 0.2, ease: "power2.out", delay: 0.1 });
                gsap.fromTo(".anim-toggle", { x: 0 }, { x: 12, duration: 0.4, delay: 0.8 });
             } else if (i === 2) { // Step 3: Map
                gsap.fromTo(".anim-map-point", { scale: 0 }, { scale: 1, duration: 0.5, stagger: 0.1, ease: "back.out" });
                gsap.fromTo(".anim-radar", { scale: 0.5, opacity: 0.8 }, { scale: 1.5, opacity: 0, duration: 2, repeat: -1 });
             }
          },
          onLeave: () => {
             // Animate Out (Slide up and fade)
             gsap.to(visual, { autoAlpha: 0, y: -50, scale: 0.95, duration: 0.6, ease: "power3.in" });
          },
          onEnterBack: () => {
             // Animate In (Reverse)
             gsap.to(visual, { autoAlpha: 1, y: 0, scale: 1, duration: 0.6, ease: "power3.out" });
          },
          onLeaveBack: () => {
             // Animate Out (Slide down and fade)
             gsap.to(visual, { autoAlpha: 0, y: 50, scale: 0.95, duration: 0.6, ease: "power3.in" });
          }
        });
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="py-24 bg-slate-50 relative" ref={containerRef}>
      <div className="container mx-auto px-6">
        <div className="mb-24 max-w-2xl">
          <h2 className="text-sm font-bold text-blue-600 tracking-wide uppercase mb-3">Flux de treball</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
            Enginyeria de sistemes, <br/>però divertida.
          </h3>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">

          {/* Left Column: Steps with Progress Line */}
          <div className="lg:w-5/12 flex flex-col gap-[400px] py-12 relative z-20 steps-container pb-[400px]">
             {/* Progress Line Track */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-slate-200 hidden lg:block">
              {/* Active Progress */}
              <div className="progress-line-fill w-full bg-blue-600 h-0 shadow-[0_0_10px_rgba(37,99,235,0.5)]"></div>
            </div>

            {steps.map((step) => (
              <div key={step.id} id={`step-${step.id}`} className="relative pl-20 lg:pl-24 group">
                {/* Step Number/Icon */}
                <div className="step-icon-wrapper absolute left-0 top-0 w-12 h-12 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-slate-400 z-10 shadow-sm transition-all duration-300">
                  {step.icon}
                </div>

                {/* Content */}
                <div className="step-content opacity-40 transform -translate-x-5 transition-all duration-300">
                   <span className="text-sm font-bold text-blue-600 mb-2 block uppercase tracking-wider">Pas 0{step.id}</span>
                   <h4 className="text-3xl font-bold text-slate-900 mb-4">{step.title}</h4>
                   <p className="text-lg text-slate-600 leading-relaxed font-medium">
                     {step.description}
                   </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Sticky Visual Container */}
          <div className="lg:w-7/12 relative hidden lg:block">
            <div className="visual-container-wrapper h-screen sticky top-0 flex items-center justify-center py-20">
               <div className="relative w-full max-w-xl aspect-[4/3]">

                  {/* Visual 1: Canvas Design */}
                  <div className="visual-card absolute inset-0 bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden opacity-0 transform translate-y-10">
                     <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px]"></div>

                     {/* Toolbar */}
                     <div className="absolute top-6 left-6 right-6 flex justify-between items-center bg-white/80 backdrop-blur border border-slate-100 rounded-full px-4 py-2 shadow-sm">
                        <div className="flex gap-2">
                           <div className="w-3 h-3 rounded-full bg-red-400"></div>
                           <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                           <div className="w-3 h-3 rounded-full bg-green-400"></div>
                        </div>
                        <div className="text-xs font-mono text-slate-400">canvas.ts</div>
                     </div>

                     {/* Canvas Content */}
                     <div className="absolute inset-0 flex items-center justify-center">
                        <svg className="w-full h-full overflow-visible">
                           {/* Connection Line */}
                           <path className="anim-connect-line" d="M180,250 C250,250 250,150 350,150" fill="none" stroke="#3b82f6" strokeWidth="3" strokeDasharray="200" strokeLinecap="round" />

                           {/* Node 1 */}
                           <foreignObject x="130" y="200" width="100" height="100">
                              <div className="w-24 h-24 bg-white rounded-2xl border border-slate-200 shadow-lg flex flex-col items-center justify-center">
                                 <Globe className="w-8 h-8 text-blue-500 mb-2" />
                                 <span className="text-xs font-bold text-slate-600">LB</span>
                              </div>
                           </foreignObject>

                           {/* Node 2 (Draggable) */}
                           <foreignObject x="350" y="100" width="100" height="100" className="anim-drag-node">
                              <div className="w-24 h-24 bg-white rounded-2xl border-2 border-blue-500 shadow-xl shadow-blue-500/20 flex flex-col items-center justify-center">
                                 <Server className="w-8 h-8 text-blue-600 mb-2" />
                                 <span className="text-xs font-bold text-slate-600">App</span>
                                 <div className="absolute -bottom-3 px-2 py-0.5 bg-blue-600 text-white text-[10px] rounded-full">New</div>
                              </div>
                           </foreignObject>
                        </svg>

                        {/* Cursor */}
                        <div className="anim-drag-node absolute top-[160px] left-[410px] pointer-events-none">
                           <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M3 3L10.07 19.97L12.58 12.58L19.97 10.07L3 3Z" fill="#1e293b" stroke="white" strokeWidth="2"/>
                           </svg>
                        </div>
                     </div>
                  </div>

                  {/* Visual 2: Configuration */}
                  <div className="visual-card absolute inset-0 bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden opacity-0 transform translate-y-10">
                     <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-blue-500 to-purple-500"></div>
                     <div className="p-8">
                        <div className="flex items-center gap-4 mb-8">
                           <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600">
                              <Server className="w-8 h-8" />
                           </div>
                           <div>
                              <h4 className="text-xl font-bold text-slate-900">App Server Config</h4>
                              <p className="text-sm text-slate-500">Production Environment</p>
                           </div>
                        </div>

                        <div className="space-y-6">
                           {/* Slider 1 */}
                           <div className="space-y-2">
                              <div className="flex justify-between text-sm font-medium text-slate-600">
                                 <span>Memory Allocation</span>
                                 <span>4 GB</span>
                              </div>
                              <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                                 <div className="anim-slider h-full bg-blue-500 rounded-full w-0"></div>
                              </div>
                           </div>

                           {/* Slider 2 */}
                           <div className="space-y-2">
                              <div className="flex justify-between text-sm font-medium text-slate-600">
                                 <span>CPU Cores</span>
                                 <span>2 vCPU</span>
                              </div>
                              <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                                 <div className="anim-slider h-full bg-purple-500 rounded-full w-0"></div>
                              </div>
                           </div>

                           {/* Toggle */}
                           <div className="flex items-center justify-between p-4 bg-slate-50 rounded-xl border border-slate-100 mt-6">
                              <div className="flex items-center gap-3">
                                 <Sliders className="w-5 h-5 text-slate-500" />
                                 <span className="font-bold text-slate-700">Auto-Scaling</span>
                              </div>
                              <div className="w-10 h-6 bg-slate-200 rounded-full relative cursor-pointer transition-colors duration-300">
                                 <div className="anim-toggle absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow-sm transition-transform duration-300"></div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>

                  {/* Visual 3: Deployment */}
                  <div className="visual-card absolute inset-0 bg-[#0f172a] rounded-3xl shadow-2xl border border-slate-800 overflow-hidden opacity-0 transform translate-y-10">
                     {/* Map Background */}
                     <div className="absolute inset-0 opacity-30">
                        <Globe className="w-[600px] h-[600px] text-slate-500 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" strokeWidth={0.5} />
                     </div>

                     <div className="absolute inset-0">
                        {/* Radar Effect */}
                        <div className="anim-radar absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-blue-500/30 rounded-full"></div>
                        <div className="anim-radar absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-blue-500/50 rounded-full" style={{ animationDelay: "0.5s" }}></div>

                        {/* Points */}
                        <div className="anim-map-point absolute top-[30%] left-[40%]">
                           <div className="relative">
                              <div className="w-4 h-4 bg-blue-500 rounded-full shadow-[0_0_20px_rgba(59,130,246,1)]"></div>
                              <div className="absolute -top-8 -left-8 bg-white text-slate-900 text-[10px] font-bold px-2 py-1 rounded shadow-lg whitespace-nowrap">
                                 us-east-1
                              </div>
                           </div>
                        </div>

                        <div className="anim-map-point absolute top-[40%] right-[35%]">
                           <div className="relative">
                              <div className="w-4 h-4 bg-emerald-500 rounded-full shadow-[0_0_20px_rgba(16,185,129,1)]"></div>
                              <div className="absolute -top-8 -left-8 bg-white text-slate-900 text-[10px] font-bold px-2 py-1 rounded shadow-lg whitespace-nowrap">
                                 eu-central-1
                              </div>
                           </div>
                        </div>

                        {/* Success Message */}
                        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-emerald-500/20 border border-emerald-500/50 text-emerald-400 px-4 py-2 rounded-full backdrop-blur-md">
                           <Check className="w-4 h-4" />
                           <span className="text-sm font-bold">Desplegament completat (2.3s)</span>
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
