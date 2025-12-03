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
          ease: "back.out(1.2)",
          overwrite: 'auto'
        });

        // Trigger specific internal animations
        if (index === 0) {
           gsap.fromTo(el.querySelectorAll(".anim-pop"), { scale: 0 }, { scale: 1, stagger: 0.1, duration: 0.4, delay: 0.2 });
           gsap.fromTo(el.querySelectorAll(".anim-draw"), { strokeDashoffset: 200 }, { strokeDashoffset: 0, duration: 0.8, delay: 0.4 });
        } else if (index === 1) {
           gsap.fromTo(el.querySelectorAll(".anim-slide"), { width: "0%" }, { width: "70%", stagger: 0.2, duration: 0.6, delay: 0.2 });
        } else if (index === 2) {
           gsap.fromTo(el.querySelectorAll(".anim-radar"), { scale: 0.5, opacity: 0 }, { scale: 1.5, opacity: 0, duration: 1.5, repeat: -1, delay: 0.2 });
        }

      } else {
        // Animate Out
        gsap.to(el, {
          autoAlpha: 0,
          scale: 0.9,
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
             <div className="relative w-full h-full">

                  {/* Visual 1: Canvas Design */}
                  <div ref={(el) => { if (el) visualsRef.current[0] = el; }} className="visual-card absolute inset-0 bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden">
                     <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px]"></div>

                     <div className="absolute top-6 left-6 right-6 flex justify-between items-center bg-white/80 backdrop-blur border border-slate-100 rounded-full px-4 py-2 shadow-sm z-10">
                        <div className="flex gap-2">
                           <div className="w-3 h-3 rounded-full bg-red-400"></div>
                           <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                           <div className="w-3 h-3 rounded-full bg-green-400"></div>
                        </div>
                        <div className="text-xs font-mono text-slate-400">canvas.ts</div>
                     </div>

                     <div className="absolute inset-0 flex items-center justify-center">
                        <svg className="w-full h-full overflow-visible">
                           <path className="anim-draw" d="M200,300 C250,300 250,200 350,200" fill="none" stroke="#3b82f6" strokeWidth="3" strokeDasharray="200" strokeLinecap="round" />

                           <foreignObject x="150" y="250" width="100" height="100" className="anim-pop">
                              <div className="w-24 h-24 bg-white rounded-2xl border border-slate-200 shadow-lg flex flex-col items-center justify-center">
                                 <Globe className="w-8 h-8 text-blue-500 mb-2" />
                                 <span className="text-xs font-bold text-slate-600">LB</span>
                              </div>
                           </foreignObject>

                           <foreignObject x="350" y="150" width="100" height="100" className="anim-pop">
                              <div className="w-24 h-24 bg-white rounded-2xl border-2 border-blue-500 shadow-xl shadow-blue-500/20 flex flex-col items-center justify-center">
                                 <Server className="w-8 h-8 text-blue-600 mb-2" />
                                 <span className="text-xs font-bold text-slate-600">App</span>
                                 <div className="absolute -bottom-3 px-2 py-0.5 bg-blue-600 text-white text-[10px] rounded-full">New</div>
                              </div>
                           </foreignObject>
                        </svg>
                     </div>
                  </div>

                  {/* Visual 2: Configuration */}
                  <div ref={(el) => { if (el) visualsRef.current[1] = el; }} className="visual-card absolute inset-0 bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden opacity-0">
                     <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-blue-500 to-purple-500"></div>
                     <div className="p-12 flex flex-col justify-center h-full">
                        <div className="flex items-center gap-4 mb-8">
                           <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600">
                              <Server className="w-8 h-8" />
                           </div>
                           <div>
                              <h4 className="text-xl font-bold text-slate-900">App Server Config</h4>
                              <p className="text-sm text-slate-500">Production Environment</p>
                           </div>
                        </div>

                        <div className="space-y-8">
                           <div className="space-y-2">
                              <div className="flex justify-between text-sm font-medium text-slate-600">
                                 <span>Memory Allocation</span>
                                 <span>4 GB</span>
                              </div>
                              <div className="h-3 bg-slate-100 rounded-full overflow-hidden">
                                 <div className="anim-slide h-full bg-blue-500 rounded-full w-0"></div>
                              </div>
                           </div>

                           <div className="space-y-2">
                              <div className="flex justify-between text-sm font-medium text-slate-600">
                                 <span>CPU Cores</span>
                                 <span>2 vCPU</span>
                              </div>
                              <div className="h-3 bg-slate-100 rounded-full overflow-hidden">
                                 <div className="anim-slide h-full bg-purple-500 rounded-full w-0"></div>
                              </div>
                           </div>

                           <div className="flex items-center justify-between p-4 bg-slate-50 rounded-xl border border-slate-100 mt-6">
                              <div className="flex items-center gap-3">
                                 <Sliders className="w-5 h-5 text-slate-500" />
                                 <span className="font-bold text-slate-700">Auto-Scaling</span>
                              </div>
                              <div className="w-10 h-6 bg-green-500 rounded-full relative cursor-pointer">
                                 <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full shadow-sm"></div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>

                  {/* Visual 3: Deployment */}
                  <div ref={(el) => { if (el) visualsRef.current[2] = el; }} className="visual-card absolute inset-0 bg-[#0f172a] rounded-3xl shadow-2xl border border-slate-800 overflow-hidden opacity-0">
                     <div className="absolute inset-0 opacity-30">
                        <Globe className="w-[600px] h-[600px] text-slate-500 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" strokeWidth={0.5} />
                     </div>

                     <div className="absolute inset-0">
                        <div className="anim-radar absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-blue-500/30 rounded-full"></div>
                        <div className="anim-radar absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-blue-500/50 rounded-full" style={{ animationDelay: "0.5s" }}></div>

                        <div className="absolute top-[30%] left-[40%]">
                           <div className="w-4 h-4 bg-blue-500 rounded-full shadow-[0_0_20px_rgba(59,130,246,1)] animate-pulse"></div>
                        </div>

                        <div className="absolute top-[40%] right-[35%]">
                           <div className="w-4 h-4 bg-emerald-500 rounded-full shadow-[0_0_20px_rgba(16,185,129,1)] animate-pulse"></div>
                        </div>

                        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-emerald-500/20 border border-emerald-500/50 text-emerald-400 px-4 py-2 rounded-full backdrop-blur-md">
                           <Check className="w-4 h-4" />
                           <span className="text-sm font-bold">Desplegament completat (2.3s)</span>
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
