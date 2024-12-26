import { lazy, Suspense } from 'react';
import LoadingSpinner from './components/LoadingSpinner';

const About = lazy(() => import('./sections/About'));
const Header = lazy(() => import('./sections/Header'));
const Hero = lazy(() => import('./sections/Hero'));
const ParticleEffect = lazy(() => import('./components/ParticleEffect'));
const Skills = lazy(() => import('./sections/Skills'));
const Projects = lazy(() => import('./sections/Projects'));
const Contact = lazy(() => import('./sections/Contact'));
const Footer = lazy(() => import('./sections/Footer'));
function App() {
  return (
    <>
      <Suspense fallback={<LoadingSpinner />}>
        <ParticleEffect />
        <Header />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </Suspense>
    </>
  );
}

export default App;
