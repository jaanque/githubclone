import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';
import InteractiveWorkflow from './components/InteractiveWorkflow';
import Integrations from './components/Integrations';

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-slate-200 selection:text-slate-900 font-sans antialiased">
      <Header />
      <main>
        <Hero />
        <Integrations />
        <InteractiveWorkflow />
        <Features />

        {/* CTA Section - Clean & Minimal */}
        <section className="py-32 bg-white relative overflow-hidden border-t border-slate-200">
           {/* Simple Grid Background */}
           <div className="absolute inset-0 bg-[linear-gradient(to_right,#f8fafc_1px,transparent_1px),linear-gradient(to_bottom,#f8fafc_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>

           <div className="container mx-auto px-6 text-center relative z-10">
             <h2 className="text-4xl md:text-5xl font-bold mb-8 text-slate-900 tracking-tight">Preparat per accelerar el teu desenvolupament?</h2>
             <p className="text-xl text-slate-500 mb-12 max-w-2xl mx-auto font-light">
               Uneix-te als desenvolupadors que ja estan construint el futur amb Origen.
             </p>
             <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
               <button className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all shadow-sm hover:translate-y-[-2px] w-full sm:w-auto">
                 Crear compte de franc
               </button>
               <button className="bg-white border border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-50 px-8 py-4 rounded-lg font-bold text-lg transition-all w-full sm:w-auto">
                 Contactar amb vendes
               </button>
             </div>
           </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
