import About from './sections/About';
import Header from './sections/Header';
import Hero from './sections/Hero';
import ParticleEffect from './components/ParticleEffect';
import MovingIcons from './components/MovingIcons';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
function App() {
  return (
    <>
      <ParticleEffect />
      <Header />
      <Hero>
        <MovingIcons />
      </Hero>
      <About />
      <Skills />
      <Projects/>
    </>
  );
}

export default App;
