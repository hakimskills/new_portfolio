import { LanguageProvider } from "./context/LanguageContext";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-cream text-ink dark:bg-night dark:text-cream font-mono selection:bg-clay transition-colors duration-300">
        <Nav />
        <main>
          <Hero />
          <Projects />
          <About />
          <Education />
          <Skills />
          <Contact />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}
