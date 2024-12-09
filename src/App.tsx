import About from './sections/About';
import Header from './sections/Header';
import Hero from './sections/Hero';
import ParticleEffect from './components/ParticleEffect';
import MovingIcons from './components/MovingIcons';
function App() {
  return (
    <>
      <ParticleEffect />
      <Header />
      <Hero>
        <MovingIcons />
      </Hero>
      <About />
    </>
  );
}

export default App;
