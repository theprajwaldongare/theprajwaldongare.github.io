import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import GitHubSection from './components/GitHubSection';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#101110]">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <GitHubSection />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
