import { Github, Twitter, Linkedin, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#0d1117] border-t border-gray-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
          <div className="col-span-2 lg:col-span-2">
            <div className="flex items-center mb-4">
              <Github className="h-8 w-8 text-white" />
              <span className="ml-2 text-xl font-bold text-white tracking-tight">GitClone</span>
            </div>
            <p className="text-gray-400 max-w-sm">
              La plataforma líder per al desenvolupament de software col·laboratiu.
              Seguretat, velocitat i innovació en un sol lloc.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Producte</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Característiques</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Seguretat</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Equips</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Empreses</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Plataforma</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">API</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Partners</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Electron</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Desktop</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Suport</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Documentació</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Comunitat</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Serveis Professionals</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Estat</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © 2024 GitClone, Inc. Tots els drets reservats.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Github className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Youtube className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
