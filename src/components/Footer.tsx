import { Github, Twitter, Linkedin, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
          <div className="col-span-2 lg:col-span-2">
            <div className="flex items-center mb-4 cursor-pointer">
              <Github className="h-8 w-8 text-black" />
              <span className="ml-2 text-xl font-bold text-black tracking-tight">GitClone</span>
            </div>
            <p className="text-gray-500 max-w-sm text-sm">
              La plataforma líder para el desarrollo de software colaborativo.
              Seguridad, velocidad e innovación en un solo lugar.
            </p>
          </div>

          <div>
            <h4 className="text-gray-900 font-bold mb-4">Producto</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-500 hover:text-blue-600 transition-colors cursor-pointer text-sm">Características</a></li>
              <li><a href="#" className="text-gray-500 hover:text-blue-600 transition-colors cursor-pointer text-sm">Seguridad</a></li>
              <li><a href="#" className="text-gray-500 hover:text-blue-600 transition-colors cursor-pointer text-sm">Equipos</a></li>
              <li><a href="#" className="text-gray-500 hover:text-blue-600 transition-colors cursor-pointer text-sm">Empresas</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-gray-900 font-bold mb-4">Plataforma</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-500 hover:text-blue-600 transition-colors cursor-pointer text-sm">API</a></li>
              <li><a href="#" className="text-gray-500 hover:text-blue-600 transition-colors cursor-pointer text-sm">Partners</a></li>
              <li><a href="#" className="text-gray-500 hover:text-blue-600 transition-colors cursor-pointer text-sm">Electron</a></li>
              <li><a href="#" className="text-gray-500 hover:text-blue-600 transition-colors cursor-pointer text-sm">Desktop</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-gray-900 font-bold mb-4">Soporte</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-500 hover:text-blue-600 transition-colors cursor-pointer text-sm">Documentación</a></li>
              <li><a href="#" className="text-gray-500 hover:text-blue-600 transition-colors cursor-pointer text-sm">Comunidad</a></li>
              <li><a href="#" className="text-gray-500 hover:text-blue-600 transition-colors cursor-pointer text-sm">Servicios Profesionales</a></li>
              <li><a href="#" className="text-gray-500 hover:text-blue-600 transition-colors cursor-pointer text-sm">Estado</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © 2024 GitClone, Inc. Todos los derechos reservados.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-black transition-colors cursor-pointer">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-black transition-colors cursor-pointer">
              <Github className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-black transition-colors cursor-pointer">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-black transition-colors cursor-pointer">
              <Youtube className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
