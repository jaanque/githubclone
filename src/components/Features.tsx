import { GitBranch, Database, ShieldCheck, Terminal, Users, Cpu } from 'lucide-react';

const features = [
  {
    icon: <GitBranch className="w-5 h-5 text-gray-700" />,
    title: "Control de Versiones",
    description: "Ramas, fusiones y revisiones de código sin esfuerzo. Mantén el historial limpio."
  },
  {
    icon: <Database className="w-5 h-5 text-gray-700" />,
    title: "Alojamiento de Código",
    description: "Repositorios ilimitados para todos tus proyectos, desde scripts hasta apps empresariales."
  },
  {
    icon: <ShieldCheck className="w-5 h-5 text-gray-700" />,
    title: "Seguridad Avanzada",
    description: "Escaneo de vulnerabilidades automático y gestión de secretos para proteger tu código."
  },
  {
    icon: <Terminal className="w-5 h-5 text-gray-700" />,
    title: "Línea de Comandos",
    description: "Intégrate perfectamente con tu terminal preferida. Sube y descarga con comandos sencillos."
  },
  {
    icon: <Users className="w-5 h-5 text-gray-700" />,
    title: "Equipos",
    description: "Gestiona permisos, roles y accesos con granularidad para equipos de cualquier tamaño."
  },
  {
    icon: <Cpu className="w-5 h-5 text-gray-700" />,
    title: "DevOps Integrado",
    description: "Pipelines de CI/CD configurables en minutos para testear y desplegar automáticamente."
  }
];

const Features = () => {
  return (
    <section id="features" className="py-16 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">Todo lo que necesitas</h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-base font-light">
            Una suite completa de herramientas diseñada para potenciar tu productividad.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-white border border-gray-100 hover:border-gray-300 transition-colors duration-200 group cursor-default"
            >
              <div className="mb-4 bg-gray-50 w-10 h-10 rounded-lg flex items-center justify-center group-hover:bg-gray-100 transition-colors duration-200">
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
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
