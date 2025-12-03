import { Code2, Cpu, Lock, RefreshCw, Zap, Layout } from 'lucide-react';

const features = [
  {
    icon: <Layout className="w-6 h-6 text-blue-600" />,
    title: "Disseny Visual",
    description: "Arrossega i deixa anar components per crear la teva infraestructura. El que veus és el que obtens."
  },
  {
    icon: <Code2 className="w-6 h-6 text-purple-600" />,
    title: "Exportació a Terraform",
    description: "No et tanquem en la nostra plataforma. Exporta el teu disseny a codi Terraform estàndard en qualsevol moment."
  },
  {
    icon: <Zap className="w-6 h-6 text-amber-500" />,
    title: "Desplegament Instantani",
    description: "Connecta el teu compte de núvol i desplega la teva arquitectura completa en qüestió de minuts, no setmanes."
  },
  {
    icon: <Lock className="w-6 h-6 text-emerald-500" />,
    title: "Seguretat per Defecte",
    description: "Tots els components venen pre-configurats amb les millors pràctiques de seguretat de la indústria."
  },
  {
    icon: <RefreshCw className="w-6 h-6 text-indigo-500" />,
    title: "Sincronització Bidireccional",
    description: "Els canvis en el teu codi es reflecteixen al diagrama visual i viceversa. Mantingues-ho tot sincronitzat."
  },
  {
    icon: <Cpu className="w-6 h-6 text-rose-500" />,
    title: "Auto-Escalat Intel·ligent",
    description: "Configura regles d'escalat visualment i deixa que la teva infraestructura s'adapti al trànsit automàticament."
  }
];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-slate-50 border-y border-slate-200">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-blue-600 tracking-wide uppercase mb-3">
            Per què Origen?
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Tot el que necessites per escalar
          </h3>
          <p className="text-lg text-slate-600">
            Oblida't de scripts complexos i fitxers de configuració interminables. Origen et dóna el control sense el mal de cap.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow group">
              <div className="mb-6 p-3 bg-slate-50 rounded-xl inline-block group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h4>
              <p className="text-slate-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
