import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import InteractiveTerminal from './components/InteractiveTerminal';
import Community from './components/Community';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-white min-h-screen text-gray-900 font-sans selection:bg-blue-100 selection:text-blue-900">
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
