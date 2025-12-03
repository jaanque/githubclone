import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Github, Gitlab, Slack, Database, Cloud, Server, Box, Terminal, Cpu, Globe, Layers, Shield } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const integrations = [
  { name: "AWS", icon: <Cloud className="w-8 h-8" /> },
  { name: "GitHub", icon: <Github className="w-8 h-8" /> },
  { name: "Postgres", icon: <Database className="w-8 h-8" /> },
  { name: "Docker", icon: <Box className="w-8 h-8" /> },
  { name: "Terraform", icon: <Layers className="w-8 h-8" /> },
  { name: "Kubernetes", icon: <Cpu className="w-8 h-8" /> },
  { name: "GitLab", icon: <Gitlab className="w-8 h-8" /> },
  { name: "Slack", icon: <Slack className="w-8 h-8" /> },
  { name: "Cloudflare", icon: <Globe className="w-8 h-8" /> },
  { name: "Vault", icon: <Shield className="w-8 h-8" /> },
  { name: "Ansible", icon: <Terminal className="w-8 h-8" /> },
  { name: "Redis", icon: <Server className="w-8 h-8" /> },
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
    <section ref={containerRef} className="py-24 bg-white overflow-hidden border-y border-slate-100">
      <div className="container mx-auto px-6 text-center mb-16">
        <h2 className="text-sm font-bold text-blue-600 tracking-wide uppercase mb-3">Integracions</h2>
        <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
          Funciona amb el teu stack actual
        </h3>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          No cal que canviïs la teva manera de treballar. Origen s'integra amb els proveïdors i eines que ja utilitzes.
        </p>
      </div>

      <div className="flex flex-col gap-8 opacity-80">
        {/* Row 1 */}
        <div ref={row1Ref} className="flex gap-8 whitespace-nowrap pl-8">
          {[...integrations, ...integrations, ...integrations].map((tech, i) => (
            <div key={`r1-${i}`} className="flex items-center gap-3 bg-slate-50 border border-slate-200 px-6 py-4 rounded-xl text-slate-600 font-bold text-lg min-w-max hover:border-blue-300 hover:text-blue-600 transition-colors">
              {tech.icon}
              <span>{tech.name}</span>
            </div>
          ))}
        </div>

        {/* Row 2 */}
        <div ref={row2Ref} className="flex gap-8 whitespace-nowrap pl-8">
           {[...integrations.reverse(), ...integrations, ...integrations].map((tech, i) => (
            <div key={`r2-${i}`} className="flex items-center gap-3 bg-slate-50 border border-slate-200 px-6 py-4 rounded-xl text-slate-600 font-bold text-lg min-w-max hover:border-blue-300 hover:text-blue-600 transition-colors">
              {tech.icon}
              <span>{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
