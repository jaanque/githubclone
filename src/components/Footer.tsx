import { Github, Twitter, Linkedin, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
          <div className="col-span-2 lg:col-span-2">
            <div className="flex items-center mb-4 cursor-pointer">
              <Github className="h-6 w-6 text-black" />
              <span className="ml-2 text-lg font-bold text-black tracking-tight">GitClone</span>
            </div>
            <p className="text-gray-500 max-w-sm text-xs leading-relaxed">
              La plataforma líder para el desarrollo de software colaborativo.
              Seguridad, velocidad e innovación.
            </p>
          </div>

          <div>
            <h4 className="text-gray-900 font-bold mb-3 text-sm">Producto</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-500 hover:text-black transition-colors cursor-pointer text-xs">Características</a></li>
              <li><a href="#" className="text-gray-500 hover:text-black transition-colors cursor-pointer text-xs">Seguridad</a></li>
              <li><a href="#" className="text-gray-500 hover:text-black transition-colors cursor-pointer text-xs">Equipos</a></li>
              <li><a href="#" className="text-gray-500 hover:text-black transition-colors cursor-pointer text-xs">Empresas</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-gray-900 font-bold mb-3 text-sm">Plataforma</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-500 hover:text-black transition-colors cursor-pointer text-xs">API</a></li>
              <li><a href="#" className="text-gray-500 hover:text-black transition-colors cursor-pointer text-xs">Partners</a></li>
              <li><a href="#" className="text-gray-500 hover:text-black transition-colors cursor-pointer text-xs">Electron</a></li>
              <li><a href="#" className="text-gray-500 hover:text-black transition-colors cursor-pointer text-xs">Desktop</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-gray-900 font-bold mb-3 text-sm">Soporte</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-500 hover:text-black transition-colors cursor-pointer text-xs">Documentación</a></li>
              <li><a href="#" className="text-gray-500 hover:text-black transition-colors cursor-pointer text-xs">Comunidad</a></li>
              <li><a href="#" className="text-gray-500 hover:text-black transition-colors cursor-pointer text-xs">Servicios</a></li>
              <li><a href="#" className="text-gray-500 hover:text-black transition-colors cursor-pointer text-xs">Estado</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-xs mb-4 md:mb-0">
            © 2024 GitClone, Inc.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-black transition-colors cursor-pointer">
              <Twitter className="h-4 w-4" />
            </a>
            <a href="#" className="text-gray-400 hover:text-black transition-colors cursor-pointer">
              <Github className="h-4 w-4" />
            </a>
            <a href="#" className="text-gray-400 hover:text-black transition-colors cursor-pointer">
              <Linkedin className="h-4 w-4" />
            </a>
            <a href="#" className="text-gray-400 hover:text-black transition-colors cursor-pointer">
              <Youtube className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
