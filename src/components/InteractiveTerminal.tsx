import React, { useState, useRef, useEffect } from 'react';
import { Terminal } from 'lucide-react';
import { gsap } from 'gsap';

const InteractiveTerminal = () => {
  const [history, setHistory] = useState([
    { type: 'output', content: 'Bienvenido a GitClone CLI v1.0.0' },
    { type: 'output', content: "Escribe 'ayuda' para ver los comandos disponibles." },
  ]);
  const [input, setInput] = useState('');
  const bottomRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  useEffect(() => {
    gsap.fromTo(containerRef.current,
      { opacity: 0, scale: 0.95 },
      { opacity: 1, scale: 1, duration: 0.8, scrollTrigger: { trigger: containerRef.current, start: "top 85%" } }
    );
  }, []);

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
    <section className="py-24 bg-white flex justify-center px-4">
      <div className="max-w-4xl w-full">
        <div className="text-center mb-10">
            <span className="text-blue-600 font-mono text-sm tracking-wider uppercase mb-2 block font-semibold">Pruébalo tú mismo</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Interactividad real</h2>
            <p className="text-gray-500 font-light">Experimenta la sencillez de nuestra línea de comandos. Escribe <code className="bg-gray-100 px-2 py-1 rounded text-gray-800 text-sm font-semibold border border-gray-200">push</code> para ver la magia.</p>
        </div>

        <div ref={containerRef} className="bg-[#1e1e1e] rounded-xl shadow-2xl overflow-hidden border border-gray-300 font-mono text-sm sm:text-base">
          <div className="bg-[#2d2d2d] px-4 py-2 flex items-center gap-2 border-b border-gray-700">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="ml-4 text-gray-400 text-xs flex items-center gap-1">
              <Terminal size={12} /> bash — usuario@gitclone
            </div>
          </div>

          <div className="p-6 h-[400px] overflow-y-auto text-gray-300 cursor-text" onClick={() => document.getElementById('terminal-input')?.focus()}>
            {history.map((entry, i) => (
              <div key={i} className="mb-2 whitespace-pre-wrap">
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
                autoFocus
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
