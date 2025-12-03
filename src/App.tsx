import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';
import InteractiveWorkflow from './components/InteractiveWorkflow';

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-blue-100 selection:text-blue-900 font-sans">
      <Header />
      <main>
        <Hero />
        <InteractiveWorkflow />
        <Features />

        {/* CTA Section */}
        <section className="py-32 bg-slate-900 relative overflow-hidden">
           {/* Abstract Background Shapes */}
           <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
             <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-3xl"></div>
             <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-3xl"></div>
           </div>

           <div className="container mx-auto px-6 text-center relative z-10">
             <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white tracking-tight">Preparat per accelerar el teu desenvolupament?</h2>
             <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto">
               Uneix-te als desenvolupadors que ja estan construint el futur amb Origen. Comença gratis avui mateix, sense targeta de crèdit.
             </p>
             <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
               <button className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg hover:shadow-blue-500/25 hover:-translate-y-1 w-full sm:w-auto">
                 Crear compte de franc
               </button>
               <button className="bg-transparent border border-slate-700 text-white hover:bg-slate-800 px-8 py-4 rounded-xl font-bold text-lg transition-all w-full sm:w-auto">
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
