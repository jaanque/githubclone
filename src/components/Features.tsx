import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { GitBranch, Database, ShieldCheck, Terminal, Users, Cpu } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    icon: <GitBranch className="w-8 h-8 text-blue-400" />,
    title: "Control de Versions",
    description: "Brancat, fusions i revisions de codi sense esforç. Mantén l'historial del teu projecte net i accessible."
  },
  {
    icon: <Database className="w-8 h-8 text-purple-400" />,
    title: "Allotjament de Codi",
    description: "Repositoris il·limitats per a tots els teus projectes, des de petits scripts fins a grans aplicacions empresarials."
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-green-400" />,
    title: "Seguretat Avançada",
    description: "Escaneig de vulnerabilitats automàtic i gestió de secrets per protegir el teu codi des del primer dia."
  },
  {
    icon: <Terminal className="w-8 h-8 text-orange-400" />,
    title: "Línia de Comandes",
    description: "Integra't perfectament amb la teva terminal preferida. Puja i baixa codi amb comandes senzilles."
  },
  {
    icon: <Users className="w-8 h-8 text-pink-400" />,
    title: "Equips i Organitzacions",
    description: "Gestiona permisos, rols i accessos amb granularitat per a equips de qualsevol mida."
  },
  {
    icon: <Cpu className="w-8 h-8 text-cyan-400" />,
    title: "DevOps Integrat",
    description: "Pipelines de CI/CD configurables en minuts per testejar i desplegar el teu codi automàticament."
  }
];

const Features = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    gsap.fromTo(sectionRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        }
      }
    );

    cardsRef.current.forEach((card, index) => {
      if (card) {
        gsap.fromTo(card,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            delay: index * 0.1,
            scrollTrigger: {
              trigger: card,
              start: "top 90%",
            }
          }
        );
      }
    });
  }, []);

  return (
    <section id="features" ref={sectionRef} className="py-24 bg-[#0d1117] relative">
       <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent opacity-50"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Tot el que necessites per crear</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Una suite completa d'eines dissenyada per potenciar la teva productivitat i la col·laboració del teu equip.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              ref={(el) => { cardsRef.current[index] = el; }}
              className="p-6 rounded-2xl bg-[#161b22] border border-gray-800 hover:border-gray-600 transition-colors duration-300 group"
            >
              <div className="mb-4 bg-[#0d1117] w-14 h-14 rounded-lg flex items-center justify-center border border-gray-800 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
