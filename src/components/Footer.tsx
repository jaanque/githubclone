import { Github, Twitter, Linkedin, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-4">
            <div className="flex items-center cursor-pointer">
              <Github className="h-5 w-5 text-black" />
              <span className="ml-2 text-base font-bold text-black tracking-tight">GitClone</span>
            </div>
            <span className="text-gray-300">|</span>
            <p className="text-gray-500 text-xs">
              © 2024 GitClone, Inc.
            </p>
          </div>

          <div className="flex gap-6 text-xs text-gray-500">
            <a href="#" className="hover:text-black transition-colors cursor-pointer">Términos</a>
            <a href="#" className="hover:text-black transition-colors cursor-pointer">Privacidad</a>
            <a href="#" className="hover:text-black transition-colors cursor-pointer">Seguridad</a>
            <a href="#" className="hover:text-black transition-colors cursor-pointer">Estado</a>
            <a href="#" className="hover:text-black transition-colors cursor-pointer">Contacto</a>
          </div>

          <div className="flex space-x-4">
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
