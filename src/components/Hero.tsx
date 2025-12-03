import { Code, Zap, Globe, ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative pt-24 pb-12 bg-white overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-gray-900 mb-6">
          Construye software <br />
          <span className="text-gray-900">
            junto con el mundo.
          </span>
        </h1>

        <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto mb-8 leading-relaxed font-light">
          GitClone es la plataforma de desarrollo completa para alojar y revisar código,
          gestionar proyectos y crear software con millones de desarrolladores.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-3">
          <button className="bg-black text-white px-6 py-2.5 rounded-md font-medium text-sm hover:bg-gray-800 transition-colors flex items-center justify-center gap-2 cursor-pointer">
            Empieza ahora <ArrowRight className="w-4 h-4" />
          </button>
          <button className="bg-white border border-gray-200 text-gray-700 px-6 py-2.5 rounded-md font-medium text-sm hover:border-gray-400 hover:text-black transition-colors cursor-pointer">
            Contactar ventas
          </button>
        </div>

        {/* Visual Element / Grid */}
        <div className="mt-16 relative mx-auto max-w-4xl border border-gray-200 rounded-xl bg-white overflow-hidden shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-100">
            <div className="p-8 flex flex-col items-center">
              <div className="p-2 bg-gray-50 rounded-lg mb-3">
                <Code className="w-5 h-5 text-gray-700" />
              </div>
              <h3 className="text-base font-bold text-gray-900 mb-1">Código Seguro</h3>
              <p className="text-gray-500 text-xs leading-relaxed max-w-[200px]">Repositorios privados y públicos con seguridad avanzada integrada.</p>
            </div>
            <div className="p-8 flex flex-col items-center">
              <div className="p-2 bg-gray-50 rounded-lg mb-3">
                <Zap className="w-5 h-5 text-gray-700" />
              </div>
              <h3 className="text-base font-bold text-gray-900 mb-1">CI/CD Rápido</h3>
              <p className="text-gray-500 text-xs leading-relaxed max-w-[200px]">Automatiza tus flujos de trabajo directamente desde el repositorio.</p>
            </div>
            <div className="p-8 flex flex-col items-center">
              <div className="p-2 bg-gray-50 rounded-lg mb-3">
                <Globe className="w-5 h-5 text-gray-700" />
              </div>
              <h3 className="text-base font-bold text-gray-900 mb-1">Colaboración Global</h3>
              <p className="text-gray-500 text-xs leading-relaxed max-w-[200px]">Conecta con equipos de todo el mundo sin fricción.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
