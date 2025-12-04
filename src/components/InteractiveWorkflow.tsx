import { useEffect, useRef, useState } from 'react';
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
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(1);
  const visualsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Progress Line Logic
      ScrollTrigger.create({
        trigger: ".steps-container",
        start: "top center",
        end: "bottom center",
        onUpdate: (self) => {
          gsap.to(".progress-line-fill", { height: `${self.progress * 100}%`, duration: 0.1, ease: "none" });
        }
      });

      // 2. Step Detection
      steps.forEach((step) => {
        ScrollTrigger.create({
          trigger: `#step-${step.id}`,
          start: "top center+=100", // Activate when step is near center
          end: "bottom center+=100",
          onEnter: () => setActiveStep(step.id),
          onEnterBack: () => setActiveStep(step.id),
        });
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Handle Visual Transitions based on activeStep state
  useEffect(() => {
    visualsRef.current.forEach((el, index) => {
      if (!el) return;

      const isActive = index + 1 === activeStep;

      if (isActive) {
        // Animate In
        gsap.to(el, {
          autoAlpha: 1,
          scale: 1,
          y: 0,
          duration: 0.5,
          ease: "power3.out",
          overwrite: 'auto'
        });

        // Trigger specific internal animations
        if (index === 0) {
           gsap.fromTo(el.querySelectorAll(".anim-pop"), { scale: 0, opacity: 0 }, { scale: 1, opacity: 1, stagger: 0.1, duration: 0.5, delay: 0.2, ease: "back.out(1.7)" });
           gsap.fromTo(el.querySelectorAll(".anim-draw"), { strokeDashoffset: 200 }, { strokeDashoffset: 0, duration: 1, delay: 0.4, ease: "power2.out" });
        } else if (index === 1) {
           gsap.fromTo(el.querySelectorAll(".anim-slide"), { width: "0%" }, { width: "70%", stagger: 0.2, duration: 0.8, delay: 0.2, ease: "power2.out" });
           gsap.fromTo(el.querySelectorAll(".anim-toggle"), { x: 0 }, { x: 16, duration: 0.4, delay: 0.8, ease: "power2.out" });
        } else if (index === 2) {
           gsap.fromTo(el.querySelectorAll(".anim-radar"), { scale: 0.5, opacity: 0 }, { scale: 1.5, opacity: 0, duration: 2, repeat: -1, delay: 0.2 });
           gsap.fromTo(el.querySelectorAll(".anim-dot"), { scale: 0 }, { scale: 1, stagger: 0.1, duration: 0.4, delay: 0.2, ease: "back.out" });
        }

      } else {
        // Animate Out
        gsap.to(el, {
          autoAlpha: 0,
          scale: 0.95,
          y: 20,
          duration: 0.4,
          ease: "power2.in",
          overwrite: 'auto'
        });
      }
    });
  }, [activeStep]);

  return (
    <section className="py-24 bg-slate-50 relative" ref={containerRef}>
      <div className="container mx-auto px-6">
        <div className="mb-24 max-w-2xl">
          <h2 className="text-sm font-bold text-blue-600 tracking-wide uppercase mb-3">Flux de treball</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
            Enginyeria de sistemes, <br/>però divertida.
          </h3>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-start">

          {/* Left Column: Steps with Progress Line */}
          <div className="lg:w-5/12 flex flex-col gap-[400px] py-12 relative z-20 steps-container pb-[200px]">
             {/* Progress Line Track */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-slate-200 hidden lg:block h-full">
              {/* Active Progress */}
              <div className="progress-line-fill w-full bg-blue-600 h-0 shadow-[0_0_10px_rgba(37,99,235,0.5)]"></div>
            </div>

            {steps.map((step) => (
              <div key={step.id} id={`step-${step.id}`} className={`relative pl-20 lg:pl-24 group transition-opacity duration-500 ${activeStep === step.id ? 'opacity-100' : 'opacity-40'}`}>
                {/* Step Number/Icon */}
                <div className={`step-icon-wrapper absolute left-0 top-0 w-12 h-12 rounded-2xl border flex items-center justify-center z-10 shadow-sm transition-all duration-300 ${activeStep === step.id ? 'bg-white border-blue-500 text-blue-600 scale-110 shadow-blue-200' : 'bg-slate-50 border-slate-200 text-slate-400'}`}>
                  {step.icon}
                </div>

                {/* Content */}
                <div className="step-content">
                   <span className="text-sm font-bold text-blue-600 mb-2 block uppercase tracking-wider">Pas 0{step.id}</span>
                   <h4 className="text-3xl font-bold text-slate-900 mb-4">{step.title}</h4>
                   <p className="text-lg text-slate-600 leading-relaxed font-medium">
                     {step.description}
                   </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Sticky Visual Container using CSS Sticky */}
          <div className="lg:w-7/12 relative hidden lg:block h-[600px] sticky top-32">
             <div className="relative w-full h-full perspective-[1000px]">

                  {/* Visual 1: Canvas Design (Glassmorphic Card) */}
                  <div ref={(el) => { if (el) visualsRef.current[0] = el; }} className="visual-card absolute inset-0 bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/50 ring-1 ring-slate-900/5 overflow-hidden transform-gpu">
                     <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:24px_24px] opacity-50"></div>

                     {/* Window Controls */}
                     <div className="absolute top-6 left-6 right-6 flex justify-between items-center bg-white/50 backdrop-blur-md border border-white/60 rounded-full px-4 py-2 shadow-sm z-10">
                        <div className="flex gap-2">
                           <div className="w-2.5 h-2.5 rounded-full bg-slate-300"></div>
                           <div className="w-2.5 h-2.5 rounded-full bg-slate-300"></div>
                        </div>
                        <div className="text-[10px] font-mono font-medium text-slate-400 tracking-wider">CANVAS_EDIT_MODE</div>
                     </div>

                     <div className="absolute inset-0 flex items-center justify-center">
                        <svg className="w-full h-full overflow-visible">
                           {/* Animated Connection */}
                           <path className="anim-draw" d="M200,300 C250,300 250,200 350,200" fill="none" stroke="#2563eb" strokeWidth="3" strokeDasharray="300" strokeLinecap="round" />

                           {/* Node 1: LB */}
                           <foreignObject x="150" y="250" width="100" height="100" className="anim-pop">
                              <div className="w-20 h-20 bg-white rounded-2xl border border-slate-200 shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex flex-col items-center justify-center group hover:scale-105 transition-transform duration-300">
                                 <div className="p-2 bg-blue-50 rounded-lg mb-2 text-blue-600">
                                    <Globe className="w-6 h-6" />
                                 </div>
                                 <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Ingress</span>
                              </div>
                           </foreignObject>

                           {/* Node 2: App (New) */}
                           <foreignObject x="350" y="150" width="100" height="100" className="anim-pop">
                              <div className="w-20 h-20 bg-white rounded-2xl border-2 border-blue-500 shadow-[0_8px_30px_rgb(37,99,235,0.15)] flex flex-col items-center justify-center relative">
                                 <div className="absolute -top-2 -right-2 w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center text-white text-[8px] font-bold border-2 border-white">+</div>
                                 <div className="p-2 bg-blue-50 rounded-lg mb-2 text-blue-600">
                                    <Server className="w-6 h-6" />
                                 </div>
                                 <span className="text-[10px] font-bold text-slate-700 uppercase tracking-wider">App</span>
                              </div>
                           </foreignObject>
                        </svg>
                     </div>
                  </div>

                  {/* Visual 2: Configuration (Dashboard Style) */}
                  <div ref={(el) => { if (el) visualsRef.current[1] = el; }} className="visual-card absolute inset-0 bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/50 ring-1 ring-slate-900/5 overflow-hidden opacity-0 transform-gpu">
                     <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
                     <div className="p-10 flex flex-col justify-center h-full">
                        <div className="flex items-center gap-5 mb-10 pb-6 border-b border-slate-100">
                           <div className="w-14 h-14 bg-slate-900 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-slate-900/20">
                              <Server className="w-7 h-7" />
                           </div>
                           <div>
                              <h4 className="text-xl font-bold text-slate-900 tracking-tight">App Server</h4>
                              <p className="text-xs font-medium text-slate-400 uppercase tracking-wider mt-1">Production • eu-west-1</p>
                           </div>
                        </div>

                        <div className="space-y-8">
                           {/* Slider 1 */}
                           <div className="space-y-3">
                              <div className="flex justify-between text-sm font-semibold text-slate-700">
                                 <span>Memory Allocation</span>
                                 <span className="text-blue-600">8 GB</span>
                              </div>
                              <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                                 <div className="anim-slide h-full bg-blue-600 rounded-full w-0 shadow-[0_0_10px_rgba(37,99,235,0.3)]"></div>
                              </div>
                           </div>

                           {/* Slider 2 */}
                           <div className="space-y-3">
                              <div className="flex justify-between text-sm font-semibold text-slate-700">
                                 <span>CPU Limits</span>
                                 <span className="text-purple-600">4 vCPU</span>
                              </div>
                              <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                                 <div className="anim-slide h-full bg-purple-600 rounded-full w-0 shadow-[0_0_10px_rgba(147,51,234,0.3)]"></div>
                              </div>
                           </div>

                           {/* Toggle Card */}
                           <div className="flex items-center justify-between p-5 bg-slate-50 rounded-2xl border border-slate-100 mt-4 transition-colors hover:border-slate-200">
                              <div className="flex items-center gap-3">
                                 <div className="p-2 bg-white rounded-lg border border-slate-100 text-slate-600">
                                    <Sliders className="w-5 h-5" />
                                 </div>
                                 <div>
                                    <span className="font-bold text-slate-900 block text-sm">Auto-Scaling</span>
                                    <span className="text-xs text-slate-500">Dynamic replica management</span>
                                 </div>
                              </div>
                              <div className="w-12 h-7 bg-slate-200 rounded-full relative cursor-pointer overflow-hidden">
                                 <div className="anim-toggle absolute left-1 top-1 w-5 h-5 bg-white rounded-full shadow-sm"></div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>

                  {/* Visual 3: Deployment (Dark Mode Map) */}
                  <div ref={(el) => { if (el) visualsRef.current[2] = el; }} className="visual-card absolute inset-0 bg-[#0f172a] rounded-3xl shadow-2xl border border-slate-800 ring-1 ring-white/10 overflow-hidden opacity-0 transform-gpu">
                     {/* Map Background */}
                     <div className="absolute inset-0 opacity-20">
                        <Globe className="w-[800px] h-[800px] text-slate-400 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" strokeWidth={0.3} />
                     </div>

                     <div className="absolute inset-0">
                        {/* Radar Scan */}
                        <div className="anim-radar absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 border border-blue-500/20 rounded-full"></div>
                        <div className="anim-radar absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-60 h-60 border border-blue-500/40 rounded-full" style={{ animationDelay: "0.3s" }}></div>

                        {/* Active Regions */}
                        <div className="anim-dot absolute top-[35%] left-[38%] group cursor-pointer">
                           <div className="w-3 h-3 bg-blue-500 rounded-full shadow-[0_0_20px_rgba(59,130,246,1)] animate-pulse relative z-10"></div>
                           <div className="absolute top-1/2 left-6 -translate-y-1/2 bg-slate-800/90 text-white text-[10px] font-bold px-2 py-1 rounded border border-slate-700 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                              US East (N. Virginia)
                           </div>
                        </div>

                        <div className="anim-dot absolute top-[28%] right-[42%] group cursor-pointer">
                           <div className="w-3 h-3 bg-purple-500 rounded-full shadow-[0_0_20px_rgba(168,85,247,1)] animate-pulse relative z-10"></div>
                           <div className="absolute top-1/2 left-6 -translate-y-1/2 bg-slate-800/90 text-white text-[10px] font-bold px-2 py-1 rounded border border-slate-700 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                              EU West (Paris)
                           </div>
                        </div>

                        {/* Status Footer */}
                        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-[#0f172a] to-transparent">
                           <div className="flex items-center justify-between">
                              <div className="flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 px-3 py-1.5 rounded-full backdrop-blur-md">
                                 <Check className="w-3 h-3" />
                                 <span className="text-xs font-bold tracking-wide">SYSTEM OPERATIONAL</span>
                              </div>
                              <div className="text-[10px] font-mono text-slate-500">
                                 LATENCY: <span className="text-slate-300">24ms</span>
                              </div>
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
