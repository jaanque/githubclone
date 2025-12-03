import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-blue-100 selection:text-blue-900">
      <Header />
      <main>
        <Hero />
        <Features />
        <section className="py-24 bg-slate-50 border-t border-slate-100">
           <div className="container mx-auto px-6 text-center">
             <h2 className="text-3xl font-bold mb-6 text-slate-900">Preparat per accelerar el teu desenvolupament?</h2>
             <p className="text-slate-600 mb-8 max-w-xl mx-auto">Uneix-te als desenvolupadors que ja estan construint el futur amb Origen.</p>
             <button className="btn-primary">
               Crear compte de franc
             </button>
           </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
