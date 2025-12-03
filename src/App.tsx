import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-blue-500/30">
      <Header />
      <main>
        <Hero />
        <Features />
        {/* Placeholder for CTA section if needed, or just Footer directly */}
        <section className="py-20 border-t border-slate-900 bg-gradient-to-b from-slate-950 to-slate-900">
           <div className="container mx-auto px-6 text-center">
             <h2 className="text-3xl font-bold mb-6">Llest per començar?</h2>
             <p className="text-slate-400 mb-8 max-w-xl mx-auto">Uneix-te a centenars de startups que ja utilitzen Origen per escalar la seva infraestructura.</p>
             <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-bold transition-all shadow-lg shadow-blue-500/20">
               Crear compte gratuït
             </button>
           </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
