import { useState } from 'react';
import { Menu, X, Github } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center cursor-pointer">
            <Github className="h-7 w-7 text-black" />
            <span className="ml-2 text-lg font-bold text-black tracking-tight">GitClone</span>
          </div>

          <div className="hidden md:flex space-x-8">
            <a href="#features" className="text-gray-500 hover:text-black transition-colors duration-200 cursor-pointer text-sm font-medium">Características</a>
            <a href="#community" className="text-gray-500 hover:text-black transition-colors duration-200 cursor-pointer text-sm font-medium">Comunidad</a>
            <a href="#pricing" className="text-gray-500 hover:text-black transition-colors duration-200 cursor-pointer text-sm font-medium">Precios</a>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <button className="text-gray-500 hover:text-black transition-colors cursor-pointer text-sm font-medium">Iniciar sesión</button>
            <button className="bg-black text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-800 transition-colors cursor-pointer border border-transparent">
              Registrarse
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-500 hover:text-black cursor-pointer">
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100">
          <div className="px-4 pt-4 pb-6 space-y-2">
            <a href="#features" className="block px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-black hover:bg-gray-50 cursor-pointer">Características</a>
            <a href="#community" className="block px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-black hover:bg-gray-50 cursor-pointer">Comunidad</a>
            <a href="#pricing" className="block px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-black hover:bg-gray-50 cursor-pointer">Precios</a>
            <div className="pt-4 flex flex-col space-y-3">
              <button className="w-full text-left px-3 py-2 text-gray-700 hover:text-black text-sm font-medium cursor-pointer">Iniciar sesión</button>
              <button className="w-full bg-black text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-800 cursor-pointer">Registrarse</button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
