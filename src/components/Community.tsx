import { Heart, Globe, MessageCircle } from 'lucide-react';

const Community = () => {
  return (
    <section id="community" className="py-12 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="md:w-1/3">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Únete a la comunidad
          </h2>
          <p className="text-gray-500 text-sm font-light mb-6">
            Más de 50 millones de desarrolladores utilizan GitClone.
          </p>
          <button className="px-5 py-2 bg-black text-white rounded-md font-bold text-xs hover:bg-gray-800 transition-colors cursor-pointer">
            Crea tu cuenta gratis
          </button>
        </div>

        <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-3 gap-4 w-full">
          <div className="p-4 bg-gray-50 rounded-lg border border-gray-100">
            <Heart className="w-5 h-5 text-gray-900 mb-2" />
            <h3 className="text-sm font-bold text-gray-900">Open Source</h3>
            <p className="text-gray-500 text-xs mt-1">Contribuye al futuro.</p>
          </div>

          <div className="p-4 bg-gray-50 rounded-lg border border-gray-100">
            <Globe className="w-5 h-5 text-gray-900 mb-2" />
            <h3 className="text-sm font-bold text-gray-900">Conecta</h3>
            <p className="text-gray-500 text-xs mt-1">Encuentra mentores.</p>
          </div>

          <div className="p-4 bg-gray-50 rounded-lg border border-gray-100">
            <MessageCircle className="w-5 h-5 text-gray-900 mb-2" />
            <h3 className="text-sm font-bold text-gray-900">Discusiones</h3>
            <p className="text-gray-500 text-xs mt-1">Comparte ideas.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;
