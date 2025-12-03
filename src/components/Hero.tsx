import { Code, Zap, Globe, ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative pt-12 pb-12 bg-white overflow-hidden border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Column: Text */}
          <div className="text-left">
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-gray-900 mb-4">
              Construye software <br />
              <span className="text-gray-900">
                junto con el mundo.
              </span>
            </h1>

            <p className="text-base text-gray-500 mb-6 leading-relaxed font-light max-w-lg">
              GitClone es la plataforma completa para alojar código, gestionar proyectos y colaborar con millones de desarrolladores.
            </p>

            <div className="flex flex-row gap-3">
              <button className="bg-black text-white px-5 py-2 rounded-md font-medium text-sm hover:bg-gray-800 transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm">
                Empieza ahora <ArrowRight className="w-4 h-4" />
              </button>
              <button className="bg-white border border-gray-200 text-gray-700 px-5 py-2 rounded-md font-medium text-sm hover:border-gray-400 hover:text-black transition-colors cursor-pointer">
                Contactar ventas
              </button>
            </div>
          </div>

          {/* Right Column: Compact Grid Visual */}
          <div className="relative">
            <div className="grid grid-cols-1 gap-4">
               <div className="p-5 flex items-start gap-4 rounded-lg border border-gray-100 bg-gray-50/50">
                  <div className="p-2 bg-white border border-gray-200 rounded-md shadow-sm">
                    <Code className="w-5 h-5 text-black" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-gray-900">Código Seguro</h3>
                    <p className="text-gray-500 text-xs mt-1">Repositorios privados y públicos con seguridad integrada.</p>
                  </div>
               </div>
               <div className="p-5 flex items-start gap-4 rounded-lg border border-gray-100 bg-gray-50/50">
                  <div className="p-2 bg-white border border-gray-200 rounded-md shadow-sm">
                    <Zap className="w-5 h-5 text-black" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-gray-900">CI/CD Rápido</h3>
                    <p className="text-gray-500 text-xs mt-1">Automatiza flujos de trabajo desde el repositorio.</p>
                  </div>
               </div>
               <div className="p-5 flex items-start gap-4 rounded-lg border border-gray-100 bg-gray-50/50">
                  <div className="p-2 bg-white border border-gray-200 rounded-md shadow-sm">
                    <Globe className="w-5 h-5 text-black" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-gray-900">Colaboración Global</h3>
                    <p className="text-gray-500 text-xs mt-1">Conecta con equipos de todo el mundo sin fricción.</p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
