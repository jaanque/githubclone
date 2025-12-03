import { Heart, Globe, MessageCircle } from 'lucide-react';

const Community = () => {
  return (
    <section id="community" className="py-16 bg-gray-50 text-center border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-4">
          Únete a la comunidad
        </h2>
        <p className="text-gray-500 text-base max-w-2xl mx-auto mb-12 font-light">
          Más de 50 millones de desarrolladores utilizan GitClone para compartir código.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex flex-col items-center p-6 bg-white rounded-xl border border-gray-100 shadow-sm transition-all duration-300">
            <div className="w-12 h-12 bg-pink-50 rounded-full flex items-center justify-center mb-4">
              <Heart className="w-6 h-6 text-pink-600" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Open Source</h3>
            <p className="text-gray-500 text-sm">Contribuye a proyectos que cambian el mundo.</p>
          </div>

          <div className="flex flex-col items-center p-6 bg-white rounded-xl border border-gray-100 shadow-sm transition-all duration-300">
            <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mb-4">
              <Globe className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Conecta</h3>
            <p className="text-gray-500 text-sm">Encuentra mentores y colaboradores.</p>
          </div>

          <div className="flex flex-col items-center p-6 bg-white rounded-xl border border-gray-100 shadow-sm transition-all duration-300">
            <div className="w-12 h-12 bg-yellow-50 rounded-full flex items-center justify-center mb-4">
              <MessageCircle className="w-6 h-6 text-yellow-600" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Discusiones</h3>
            <p className="text-gray-500 text-sm">Comparte ideas y resuelve dudas.</p>
          </div>
        </div>

        <div className="mt-16">
          <div className="inline-block">
            <button className="px-8 py-3 bg-black text-white rounded-full font-bold text-sm hover:bg-gray-800 transition-colors cursor-pointer">
              Crea tu cuenta gratis
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;
