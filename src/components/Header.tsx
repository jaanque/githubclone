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
    <header ref={headerRef} className="fixed top-0 w-full z-50 bg-[#0d1117]/80 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Github className="h-8 w-8 text-white" />
            <span className="ml-2 text-xl font-bold text-white tracking-tight">GitClone</span>
          </div>

          <div className="hidden md:flex space-x-8">
            <a href="#features" className="text-gray-300 hover:text-white transition-colors duration-200">Característiques</a>
            <a href="#community" className="text-gray-300 hover:text-white transition-colors duration-200">Comunitat</a>
            <a href="#pricing" className="text-gray-300 hover:text-white transition-colors duration-200">Preus</a>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <button className="text-gray-300 hover:text-white transition-colors">Inicia sessió</button>
            <button className="bg-white text-black px-4 py-2 rounded-md font-medium hover:bg-gray-200 transition-colors">
              Registra't
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-300 hover:text-white">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-[#161b22] border-b border-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#features" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800">Característiques</a>
            <a href="#community" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800">Comunitat</a>
            <a href="#pricing" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800">Preus</a>
            <div className="pt-4 flex flex-col space-y-2">
              <button className="w-full text-left px-3 py-2 text-gray-300 hover:text-white">Inicia sessió</button>
              <button className="w-full bg-white text-black px-3 py-2 rounded-md font-medium hover:bg-gray-200">Registra't</button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
