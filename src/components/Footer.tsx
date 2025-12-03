import { Terminal, Github, Twitter, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div className="flex items-center gap-2 mb-6 md:mb-0">
            <div className="bg-blue-600 p-1.5 rounded-lg">
              <Terminal className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-white tracking-tight">
              Origen
            </span>
          </div>

          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors"><Github className="w-5 h-5" /></a>
            <a href="#" className="hover:text-white transition-colors"><Twitter className="w-5 h-5" /></a>
            <a href="#" className="hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></a>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12 border-b border-slate-800 pb-12">
          <div>
            <h5 className="text-white font-bold mb-4">Producte</h5>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Característiques</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Integracions</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Preus</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Canvis</a></li>
            </ul>
          </div>
          <div>
            <h5 className="text-white font-bold mb-4">Recursos</h5>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Documentació</a></li>
              <li><a href="#" className="hover:text-white transition-colors">API</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Comunitat</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Ajuda</a></li>
            </ul>
          </div>
          <div>
            <h5 className="text-white font-bold mb-4">Empresa</h5>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Sobre nosaltres</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Carreres</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contacte</a></li>
            </ul>
          </div>
          <div>
            <h5 className="text-white font-bold mb-4">Legal</h5>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Privadesa</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Termes</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cookies</a></li>
            </ul>
          </div>
        </div>

        <div className="text-center text-sm text-slate-500">
          © {new Date().getFullYear()} Origen. Tots els drets reservats. Fet amb ❤️ a Catalunya.
        </div>
      </div>
    </footer>
  );
}
