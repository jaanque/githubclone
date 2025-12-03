import { Code2, Cpu, Lock, RefreshCw, Zap, Layout } from 'lucide-react';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    icon: <Layout className="w-6 h-6 text-slate-700" />,
    title: "Disseny Visual",
    description: "Arrossega i deixa anar components per crear la teva infraestructura. El que veus és el que obtens."
  },
  {
    icon: <Code2 className="w-6 h-6 text-slate-700" />,
    title: "Exportació a Terraform",
    description: "No et tanquem en la nostra plataforma. Exporta el teu disseny a codi Terraform estàndard en qualsevol moment."
  },
  {
    icon: <Zap className="w-6 h-6 text-slate-700" />,
    title: "Desplegament Instantani",
    description: "Connecta el teu compte de núvol i desplega la teva arquitectura completa en qüestió de minuts, no setmanes."
  },
  {
    icon: <Lock className="w-6 h-6 text-slate-700" />,
    title: "Seguretat per Defecte",
    description: "Tots els components venen pre-configurats amb les millors pràctiques de seguretat de la indústria."
  },
  {
    icon: <RefreshCw className="w-6 h-6 text-slate-700" />,
    title: "Sincronització Bidireccional",
    description: "Els canvis en el teu codi es reflecteixen al diagrama visual i viceversa. Mantingues-ho tot sincronitzat."
  },
  {
    icon: <Cpu className="w-6 h-6 text-slate-700" />,
    title: "Auto-Escalat Intel·ligent",
    description: "Configura regles d'escalat visualment i deixa que la teva infraestructura s'adapti al trànsit automàticament."
  }
];

export default function Features() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".feature-card", {
        y: 30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom-=100",
          toggleActions: "play none none reverse"
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="features" ref={containerRef} className="py-32 bg-slate-50 relative border-t border-slate-200">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-xs font-bold text-slate-500 tracking-[0.2em] uppercase mb-4">
            Per què Origen?
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
            Tot el que necessites per escalar
          </h3>
          <p className="text-xl text-slate-600 leading-relaxed font-light">
            Oblida't de scripts complexos i fitxers de configuració interminables. Origen et dóna el control sense el mal de cap.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="feature-card group relative bg-white p-8 rounded-xl border border-slate-200 transition-all duration-300 hover:border-blue-400 hover:shadow-lg hover:-translate-y-1">

              <div className="mb-6 p-4 bg-slate-50 rounded-lg inline-block border border-slate-100 group-hover:bg-blue-50 group-hover:border-blue-100 transition-colors duration-300">
                {feature.icon}
              </div>

              <h4 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">
                {feature.title}
              </h4>

              <p className="text-slate-600 leading-relaxed font-light">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
