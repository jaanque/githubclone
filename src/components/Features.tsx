import { Box, Layers, Cpu, Globe, Lock, Activity } from 'lucide-react';

const features = [
  {
    icon: <Box className="w-6 h-6 text-blue-400" />,
    title: "Components Modulars",
    description: "Utilitza blocs preconfigurats per construir la teva infraestructura com si fossin peces de LEGO."
  },
  {
    icon: <Layers className="w-6 h-6 text-emerald-400" />,
    title: "Escalat Automàtic",
    description: "La teva infraestructura creix amb els teus usuaris. Sense intervenció manual necessària."
  },
  {
    icon: <Cpu className="w-6 h-6 text-purple-400" />,
    title: "Optimització de Costos",
    description: "Analitzem i optimitzem els recursos per assegurar que només pagues pel que necessites."
  },
  {
    icon: <Globe className="w-6 h-6 text-cyan-400" />,
    title: "Desplegament Global",
    description: "Distribueix la teva aplicació a la vora (edge) amb un sol clic per a una latència mínima."
  },
  {
    icon: <Lock className="w-6 h-6 text-red-400" />,
    title: "Seguretat per Defecte",
    description: "Cumpliment estàndard de la indústria, xifratge i protecció contra DDoS inclosos."
  },
  {
    icon: <Activity className="w-6 h-6 text-amber-400" />,
    title: "Monitorització en Temps Real",
    description: "Visió completa del rendiment de la teva infraestructura amb panells detallats."
  }
];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-slate-900/50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Tot el que necessites per créixer</h2>
          <p className="text-slate-400">
            Origen et proporciona les eines necessàries per oblidar-te de la infraestructura i centrar-te en el teu producte.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-6 rounded-2xl bg-slate-800/50 border border-slate-700/50 hover:bg-slate-800 transition-colors group">
              <div className="w-12 h-12 rounded-lg bg-slate-900 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">{feature.title}</h3>
              <p className="text-slate-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
