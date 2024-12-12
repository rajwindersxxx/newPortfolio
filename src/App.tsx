import About from './sections/About';
import Header from './sections/Header';
import Hero from './sections/Hero';
import ParticleEffect from './components/ParticleEffect';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
function App() {
  return (
    <>
      <ParticleEffect />
      <Header />
        <Hero/>
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer/>
    </>
  );
}

export default App;
