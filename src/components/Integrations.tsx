import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Github, Gitlab, Slack, Database, Cloud, Server, Box, Terminal, Cpu, Globe, Layers, Shield } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const integrations = [
  { name: "AWS", icon: <Cloud className="w-5 h-5" /> },
  { name: "GitHub", icon: <Github className="w-5 h-5" /> },
  { name: "Postgres", icon: <Database className="w-5 h-5" /> },
  { name: "Docker", icon: <Box className="w-5 h-5" /> },
  { name: "Terraform", icon: <Layers className="w-5 h-5" /> },
  { name: "Kubernetes", icon: <Cpu className="w-5 h-5" /> },
  { name: "GitLab", icon: <Gitlab className="w-5 h-5" /> },
  { name: "Slack", icon: <Slack className="w-5 h-5" /> },
  { name: "Cloudflare", icon: <Globe className="w-5 h-5" /> },
  { name: "Vault", icon: <Shield className="w-5 h-5" /> },
  { name: "Ansible", icon: <Terminal className="w-5 h-5" /> },
  { name: "Redis", icon: <Server className="w-5 h-5" /> },
];

export default function Integrations() {
  const containerRef = useRef(null);
  const row1Ref = useRef(null);
  const row2Ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      // Row 1 moves Left
      gsap.to(row1Ref.current, {
        xPercent: -20,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1
        }
      });

      // Row 2 moves Right
      gsap.fromTo(row2Ref.current, { xPercent: -20 }, {
        xPercent: 0,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1
        }
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-24 bg-white overflow-hidden border-b border-slate-200">
      <div className="container mx-auto px-6 text-center mb-16">
        <h2 className="text-xs font-bold text-slate-500 tracking-[0.2em] uppercase mb-4">Integracions</h2>
        <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 tracking-tight">
          Funciona amb el teu stack actual
        </h3>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto font-light">
          No cal que canviïs la teva manera de treballar. Origen s'integra amb els proveïdors i eines que ja utilitzes.
        </p>
      </div>

      <div className="flex flex-col gap-6 opacity-100">
        {/* Row 1 */}
        <div ref={row1Ref} className="flex gap-6 whitespace-nowrap pl-6">
          {[...integrations, ...integrations, ...integrations].map((tech, i) => (
            <div key={`r1-${i}`} className="flex items-center gap-3 bg-white border border-slate-200 px-5 py-3 rounded-lg text-slate-700 font-medium text-sm min-w-max hover:border-slate-400 hover:text-slate-900 transition-colors shadow-sm">
              {tech.icon}
              <span>{tech.name}</span>
            </div>
          ))}
        </div>

        {/* Row 2 */}
        <div ref={row2Ref} className="flex gap-6 whitespace-nowrap pl-6">
           {[...integrations.reverse(), ...integrations, ...integrations].map((tech, i) => (
            <div key={`r2-${i}`} className="flex items-center gap-3 bg-white border border-slate-200 px-5 py-3 rounded-lg text-slate-700 font-medium text-sm min-w-max hover:border-slate-400 hover:text-slate-900 transition-colors shadow-sm">
              {tech.icon}
              <span>{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
