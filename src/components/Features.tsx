import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { GitBranch, Database, ShieldCheck, Terminal, Users, Cpu } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    icon: <GitBranch className="w-6 h-6 text-blue-600" />,
    title: "Control de Versiones",
    description: "Ramas, fusiones y revisiones de código sin esfuerzo. Mantén el historial de tu proyecto limpio y accesible."
  },
  {
    icon: <Database className="w-6 h-6 text-purple-600" />,
    title: "Alojamiento de Código",
    description: "Repositorios ilimitados para todos tus proyectos, desde pequeños scripts hasta grandes aplicaciones empresariales."
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-green-600" />,
    title: "Seguridad Avanzada",
    description: "Escaneo de vulnerabilidades automático y gestión de secretos para proteger tu código desde el primer día."
  },
  {
    icon: <Terminal className="w-6 h-6 text-orange-600" />,
    title: "Línea de Comandos",
    description: "Intégrate perfectamente con tu terminal preferida. Sube y descarga código con comandos sencillos."
  },
  {
    icon: <Users className="w-6 h-6 text-pink-600" />,
    title: "Equipos y Organizaciones",
    description: "Gestiona permisos, roles y accesos con granularidad para equipos de cualquier tamaño."
  },
  {
    icon: <Cpu className="w-6 h-6 text-cyan-600" />,
    title: "DevOps Integrado",
    description: "Pipelines de CI/CD configurables en minutos para testear y desplegar tu código automáticamente."
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
    <section id="features" ref={sectionRef} className="py-24 bg-white relative">
       <div className="absolute top-0 left-0 w-full h-px bg-gray-100"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Todo lo que necesitas para crear</h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg font-light">
            Una suite completa de herramientas diseñada para potenciar tu productividad y la colaboración de tu equipo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              ref={(el) => { cardsRef.current[index] = el; }}
              className="p-8 rounded-2xl bg-white border border-gray-100 hover:border-gray-300 hover:shadow-lg transition-all duration-300 group cursor-default"
            >
              <div className="mb-6 bg-gray-50 w-14 h-14 rounded-xl flex items-center justify-center group-hover:bg-gray-100 transition-colors duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
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
