import { PrimaryButton, SecondaryButton } from '../components/Buttons';
import MovingIcons from '../components/MovingIcons';
import { HeroAnimations } from '../hooks/useAnimations';

export default function Hero() {
  return (
    <HeroAnimations>
      <section id="home" className="hero-section h-full">
        <div className="container mx-auto flex h-[100vh] flex-col items-center justify-center gap-4 p-8 text-center">
          <div className="mb-8"></div>
          <div className="heroHeading mb-2">
            <h2 className="mb-4 text-6xl text-teal-100 md:text-7xl">
              Rajwinder Singh
            </h2>
            <h3 className="text-3xl text-teal-300 md:text-4xl">
              A web Developer
            </h3>
          </div>
          <div className="mb-24 flex justify-center gap-4">
            <a href="#contact">
              <PrimaryButton>Hire me</PrimaryButton>
            </a>
            <a
              href="https://onedrive.live.com/edit?id=F222A8BFC7A351FC!59384&resid=F222A8BFC7A351FC!59384&ithint=file%2cdocx&authkey=!AP94SocnTBgtRos&wdo=2&cid=f222a8bfc7a351fc"
              target="_blank"
              rel="noopener"
            >
              <SecondaryButton>Get CV</SecondaryButton>
            </a>
          </div>
          <MovingIcons />
        </div>
      </section>
    </HeroAnimations>
  );
}
