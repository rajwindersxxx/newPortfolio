import About from './sections/About';
import Header from './sections/Header';
import Hero from './sections/Hero';
import ParticleEffect from './components/ParticleEffect';
import MovingIcons from './components/MovingIcons';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
function App() {
  return (
    <>
      <ParticleEffect />
      <Header />
      <div className='flex flex-col gap-24'>
        <Hero>
          <MovingIcons />
        </Hero>
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </>
  );
}

export default App;
