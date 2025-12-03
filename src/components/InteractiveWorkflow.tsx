import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Globe, Server, Settings, Zap, ArrowRight } from 'lucide-react';

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
      const sections = gsap.utils.toArray('.workflow-step');

      // Pin the right side while scrolling the left
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top+=100",
        end: "bottom bottom-=100",
        pin: ".visual-container",
        pinSpacing: false, // Maintain layout
      });

      // Animate specific elements in the visual container based on which step is in view
      sections.forEach((section: any, index) => {
        ScrollTrigger.create({
          trigger: section,
          start: "top center",
          end: "bottom center",
          onToggle: ({ isActive }) => {
            if (isActive) {
              gsap.to(`.visual-step-${index + 1}`, { opacity: 1, scale: 1, duration: 0.5, ease: "back.out(1.7)" });
              gsap.to(`.visual-step-${index + 1}-bg`, { opacity: 1, duration: 0.5 });

              // Hide others
              steps.forEach(s => {
                if (s.id !== index + 1) {
                  gsap.to(`.visual-step-${s.id}`, { opacity: 0, scale: 0.8, duration: 0.3 });
                  gsap.to(`.visual-step-${s.id}-bg`, { opacity: 0, duration: 0.3 });
                }
              });
            }
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
          <div className="lg:w-1/2 flex flex-col gap-24 py-12 relative z-10">
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-slate-200 hidden lg:block"></div>

            {steps.map((step) => (
              <div key={step.id} className="workflow-step relative pl-12 lg:pl-16">
                <div className="absolute left-0 lg:left-2 top-0 w-8 h-8 rounded-full bg-white border-2 border-blue-600 flex items-center justify-center font-bold text-blue-600 z-10 shadow-sm">
                  {step.id}
                </div>
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-all duration-300">
                  <div className="bg-blue-50 w-12 h-12 rounded-lg flex items-center justify-center text-blue-600 mb-6">
                    {step.icon}
                  </div>
                  <h4 className="text-2xl font-bold text-slate-900 mb-4">{step.title}</h4>
                  <p className="text-lg text-slate-600 leading-relaxed mb-6">
                    {step.description}
                  </p>
                  <div className="flex items-center text-blue-600 font-medium group cursor-pointer">
                    Saber-ne més <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Sticky Visuals */}
          <div className="lg:w-1/2 relative lg:h-[600px]">
            <div className="visual-container lg:absolute lg:top-0 lg:right-0 w-full h-[500px] lg:h-full bg-slate-900 rounded-2xl shadow-2xl overflow-hidden border border-slate-800">
              {/* Background Grid */}
              <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

              {/* Step 1 Visual: Canvas & Nodes */}
              <div className="visual-step-1 absolute inset-0 flex items-center justify-center opacity-1">
                 <div className="relative w-full max-w-md aspect-video bg-slate-800/50 rounded-lg border border-slate-700 p-6 backdrop-blur-sm">
                    <div className="absolute top-4 left-4 right-4 h-2 bg-slate-700 rounded-full w-1/3"></div>
                    {/* Dragging Hand Animation Simulator */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full flex items-center justify-center gap-8">
                       <div className="w-20 h-20 bg-blue-500/20 border border-blue-500 rounded-lg flex flex-col items-center justify-center text-blue-400">
                         <Globe className="mb-2" /> <span className="text-xs">LB</span>
                       </div>
                       <div className="w-8 h-0.5 bg-slate-600"></div>
                       <div className="w-20 h-20 bg-amber-500/20 border border-amber-500 rounded-lg flex flex-col items-center justify-center text-amber-400">
                         <Server className="mb-2" /> <span className="text-xs">App</span>
                       </div>
                    </div>
                    <div className="absolute bottom-4 right-4 bg-blue-600 text-white text-xs px-3 py-1 rounded">Canvas Actiu</div>
                 </div>
              </div>

              {/* Step 2 Visual: Config Panel */}
              <div className="visual-step-2 absolute inset-0 flex items-center justify-center opacity-0 scale-90">
                 <div className="relative w-full max-w-xs bg-white rounded-lg shadow-xl overflow-hidden border border-slate-200">
                    <div className="bg-slate-50 border-b border-slate-200 p-3 flex justify-between items-center">
                      <span className="text-xs font-bold text-slate-700">Configuració: App-Server-01</span>
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    </div>
                    <div className="p-4 space-y-4">
                      <div>
                        <div className="text-xs text-slate-500 mb-1">Instance Type</div>
                        <div className="w-full h-8 bg-slate-100 rounded border border-slate-200 px-2 flex items-center text-sm text-slate-700">t3.micro</div>
                      </div>
                      <div>
                        <div className="text-xs text-slate-500 mb-1">Memory Limit</div>
                        <div className="w-full h-1 bg-slate-200 rounded overflow-hidden">
                           <div className="h-full w-3/4 bg-blue-500"></div>
                        </div>
                        <div className="text-right text-xs text-slate-400 mt-1">512MB / 1GB</div>
                      </div>
                      <div className="flex gap-2 pt-2">
                        <div className="flex-1 h-8 bg-blue-600 rounded flex items-center justify-center text-white text-xs font-bold">Desar Canvis</div>
                      </div>
                    </div>
                 </div>
              </div>

              {/* Step 3 Visual: Global Map */}
              <div className="visual-step-3 absolute inset-0 flex items-center justify-center opacity-0 scale-90">
                 <div className="relative w-full h-full flex items-center justify-center">
                    <div className="absolute w-64 h-64 border border-blue-500/30 rounded-full animate-pulse"></div>
                    <div className="absolute w-48 h-48 border border-blue-500/50 rounded-full"></div>
                    <Globe className="w-24 h-24 text-blue-500" />

                    {/* Satellites */}
                    <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-emerald-400 rounded-full shadow-[0_0_10px_rgba(52,211,153,0.8)]"></div>
                    <div className="absolute bottom-1/3 right-1/4 w-3 h-3 bg-purple-400 rounded-full shadow-[0_0_10px_rgba(167,139,250,0.8)]"></div>
                    <div className="absolute top-1/2 right-10 w-3 h-3 bg-amber-400 rounded-full shadow-[0_0_10px_rgba(251,191,36,0.8)]"></div>

                    <div className="absolute bottom-8 bg-slate-800/80 backdrop-blur text-white px-4 py-2 rounded-full border border-slate-700 text-sm flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      Desplegat: us-east-1, eu-west-3
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
