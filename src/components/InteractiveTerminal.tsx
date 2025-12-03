import React, { useState, useRef, useEffect } from 'react';
import { Terminal } from 'lucide-react';

const InteractiveTerminal = () => {
  const [history, setHistory] = useState([
    { type: 'output', content: 'Bienvenido a GitClone CLI v1.0.0' },
    { type: 'output', content: "Escribe 'ayuda' para ver los comandos disponibles." },
  ]);
  const [input, setInput] = useState('');
  const bottomRef = useRef<HTMLDivElement>(null);
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommand = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const cmd = input.trim().toLowerCase();
      const newHistory = [...history, { type: 'input', content: input }];

      let response = '';
      switch (cmd) {
        case 'ayuda':
          response = "Comandos disponibles: \n  init      - Inicializa un nuevo repositorio\n  status    - Muestra el estado de los archivos\n  push      - Sube los cambios al servidor\n  clear     - Limpia la terminal";
          break;
        case 'init':
          response = "Repositorio Git vacío inicializado en /proyecto/.git/";
          break;
        case 'status':
          response = "En la rama main\nNada para commitear, el árbol de trabajo está limpio";
          break;
        case 'push':
          response = "Enumerando objetos: 5, hecho.\nContando objetos: 100% (5/5), hecho.\nEscribiendo objetos: 100% (5/5), 420 bytes | 420.00 KiB/s, hecho.\nTotal 5 (delta 0), reusado 0 (delta 0)\nA https://gitclone.com/usuario/proyecto.git\n * [nueva rama]      main -> main";
          break;
        case 'clear':
          setHistory([]);
          setInput('');
          return;
        default:
          response = `Comando no encontrado: ${cmd}. Escribe 'ayuda' para ver las opciones.`;
      }

      setHistory([...newHistory, { type: 'output', content: response }]);
      setInput('');
    }
  };

  return (
    <section className="py-12 bg-gray-50 flex justify-center px-4 border-t border-gray-200">
      <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="text-left">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Interactividad real</h2>
            <p className="text-gray-600 font-light text-sm leading-relaxed mb-4">
              La potencia de la línea de comandos, simplificada para ti.
              Prueba escribiendo <code className="bg-white px-1.5 py-0.5 rounded text-black text-xs font-bold border border-gray-300">push</code>.
            </p>
        </div>

        <div className="bg-[#1e1e1e] rounded-lg shadow-md overflow-hidden border border-gray-300 font-mono text-xs">
          <div className="bg-[#2d2d2d] px-3 py-1.5 flex items-center gap-2 border-b border-gray-700">
            <div className="flex gap-1">
              <div className="w-2 h-2 rounded-full bg-red-500"></div>
              <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
              <div className="w-2 h-2 rounded-full bg-green-500"></div>
            </div>
            <div className="ml-2 text-gray-400 text-[10px] flex items-center gap-1">
              <Terminal size={10} /> bash
            </div>
          </div>

          <div className="p-3 h-[200px] overflow-y-auto text-gray-300 cursor-text" onClick={() => document.getElementById('terminal-input')?.focus()}>
            {history.map((entry, i) => (
              <div key={i} className="mb-1 whitespace-pre-wrap">
                {entry.type === 'input' ? (
                  <div className="flex">
                    <span className="text-green-400 mr-2">➜</span>
                    <span className="text-blue-400 mr-2">~</span>
                    <span className="text-white">{entry.content}</span>
                  </div>
                ) : (
                  <div className="text-gray-400 ml-6">{entry.content}</div>
                )}
              </div>
            ))}
            <div className="flex items-center">
              <span className="text-green-400 mr-2">➜</span>
              <span className="text-blue-400 mr-2">~</span>
              <input
                id="terminal-input"
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleCommand}
                className="bg-transparent border-none outline-none text-white w-full cursor-text"
                autoComplete="off"
              />
            </div>
            <div ref={bottomRef}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveTerminal;
