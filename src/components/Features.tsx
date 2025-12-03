import { GitBranch, Database, ShieldCheck, Terminal, Users, Cpu } from 'lucide-react';

const features = [
  {
    icon: <GitBranch className="w-4 h-4 text-black" />,
    title: "Control de Versiones",
    description: "Ramas y revisiones de código sin esfuerzo."
  },
  {
    icon: <Database className="w-4 h-4 text-black" />,
    title: "Alojamiento",
    description: "Repositorios ilimitados para todos tus proyectos."
  },
  {
    icon: <ShieldCheck className="w-4 h-4 text-black" />,
    title: "Seguridad",
    description: "Escaneo de vulnerabilidades automático."
  },
  {
    icon: <Terminal className="w-4 h-4 text-black" />,
    title: "CLI",
    description: "Intégrate perfectamente con tu terminal."
  },
  {
    icon: <Users className="w-4 h-4 text-black" />,
    title: "Equipos",
    description: "Gestiona permisos y roles con granularidad."
  },
  {
    icon: <Cpu className="w-4 h-4 text-black" />,
    title: "DevOps",
    description: "Pipelines de CI/CD configurables en minutos."
  }
];

const Features = () => {
  return (
    <section id="features" className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-900">Todo lo que necesitas</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-4 rounded-lg bg-white border border-gray-200 hover:border-gray-400 transition-colors duration-200 group cursor-default"
            >
              <div className="mb-3">
                {feature.icon}
              </div>
              <h3 className="text-sm font-bold text-gray-900 mb-1">{feature.title}</h3>
              <p className="text-gray-500 text-xs leading-tight">
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
