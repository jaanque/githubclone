import React, { useState, useRef, useEffect } from 'react';
import { Terminal } from 'lucide-react';

const InteractiveTerminal = () => {
  const [history, setHistory] = useState([
    { type: 'output', content: 'Bienvenido a GitClone CLI v1.0.0' },
    { type: 'output', content: "Escribe 'ayuda' para ver los comandos disponibles." },
  ]);
  const [input, setInput] = useState('');
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
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
    <section className="py-16 bg-white flex justify-center px-4 border-t border-gray-100">
      <div className="max-w-3xl w-full">
        <div className="text-center mb-8">
            <span className="text-gray-900 font-mono text-xs tracking-wider uppercase mb-2 block font-bold">Pruébalo tú mismo</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Interactividad real</h2>
            <p className="text-gray-500 font-light text-sm">Experimenta la sencillez. Escribe <code className="bg-gray-100 px-1.5 py-0.5 rounded text-gray-800 text-xs font-semibold border border-gray-200">push</code>.</p>
        </div>

        <div className="bg-[#1e1e1e] rounded-lg shadow-lg overflow-hidden border border-gray-200 font-mono text-xs sm:text-sm">
          <div className="bg-[#2d2d2d] px-4 py-2 flex items-center gap-2 border-b border-gray-700">
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
            </div>
            <div className="ml-3 text-gray-400 text-[10px] flex items-center gap-1">
              <Terminal size={10} /> bash — usuario@gitclone
            </div>
          </div>

          <div className="p-4 h-[300px] overflow-y-auto text-gray-300 cursor-text" onClick={() => document.getElementById('terminal-input')?.focus()}>
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
