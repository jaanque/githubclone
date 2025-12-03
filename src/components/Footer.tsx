import { Terminal, Github, Twitter, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 pt-20 pb-10 border-t border-slate-900">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <Terminal className="w-6 h-6 text-blue-500" />
              <span className="text-xl font-bold text-white">Origen</span>
            </div>
            <p className="text-slate-400 max-w-sm mb-6">
              La plataforma de creació d'infraestructura low-code dissenyada per a startups modernes que volen moure's ràpid.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-slate-500 hover:text-white transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-slate-500 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-slate-500 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6">Producte</h4>
            <ul className="space-y-4 text-slate-400">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Característiques</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Integracions</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Preus</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Changelog</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6">Empresa</h4>
            <ul className="space-y-4 text-slate-400">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Sobre nosaltres</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Carreres</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Contacte</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>© 2024 Origen Inc. Tots els drets reservats.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacitat</a>
            <a href="#" className="hover:text-white transition-colors">Termes</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
