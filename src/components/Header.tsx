import { Terminal } from 'lucide-react';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="bg-blue-600 p-1.5 rounded-lg">
            <Terminal className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold text-slate-900 tracking-tight">
            Origen
          </span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          <a href="#features" className="hover:text-blue-600 transition-colors">Funcionalitats</a>
          <a href="#pricing" className="hover:text-blue-600 transition-colors">Preus</a>
          <a href="#docs" className="hover:text-blue-600 transition-colors">Documentació</a>
        </nav>
        <div className="flex items-center gap-4">
          <a href="#login" className="text-sm font-medium text-slate-600 hover:text-slate-900 hidden sm:block">
            Iniciar Sessió
          </a>
          <button className="bg-slate-900 hover:bg-slate-800 text-white px-5 py-2 rounded-lg text-sm font-medium transition-all shadow-sm">
            Començar
          </button>
        </div>
      </div>
    </header>
  );
}
