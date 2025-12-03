import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import InteractiveTerminal from './components/InteractiveTerminal';
import Community from './components/Community';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-[#0d1117] min-h-screen text-white font-sans selection:bg-blue-500 selection:text-white">
      <Header />
      <main>
        <Hero />
        <Features />
        <InteractiveTerminal />
        <Community />
      </main>
      <Footer />
    </div>
  );
}

export default App;
