import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { Menu, X, Github } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(headerRef.current,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
    );
  }, []);

  return (
    <header ref={headerRef} className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center cursor-pointer">
            <Github className="h-8 w-8 text-black" />
            <span className="ml-2 text-xl font-bold text-black tracking-tight">GitClone</span>
          </div>

          <div className="hidden md:flex space-x-8">
            <a href="#features" className="text-gray-600 hover:text-black transition-colors duration-200 cursor-pointer">Características</a>
            <a href="#community" className="text-gray-600 hover:text-black transition-colors duration-200 cursor-pointer">Comunidad</a>
            <a href="#pricing" className="text-gray-600 hover:text-black transition-colors duration-200 cursor-pointer">Precios</a>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <button className="text-gray-600 hover:text-black transition-colors cursor-pointer font-medium">Iniciar sesión</button>
            <button className="bg-black text-white px-5 py-2 rounded-full font-medium hover:bg-gray-800 transition-colors cursor-pointer border border-transparent hover:border-gray-500">
              Registrarse
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 hover:text-black cursor-pointer">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-200">
          <div className="px-4 pt-4 pb-6 space-y-2">
            <a href="#features" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-black hover:bg-gray-50 cursor-pointer">Características</a>
            <a href="#community" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-black hover:bg-gray-50 cursor-pointer">Comunidad</a>
            <a href="#pricing" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-black hover:bg-gray-50 cursor-pointer">Precios</a>
            <div className="pt-4 flex flex-col space-y-3">
              <button className="w-full text-left px-3 py-2 text-gray-700 hover:text-black font-medium cursor-pointer">Iniciar sesión</button>
              <button className="w-full bg-black text-white px-3 py-3 rounded-full font-medium hover:bg-gray-800 cursor-pointer">Registrarse</button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
