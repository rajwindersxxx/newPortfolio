import { PrimaryButton, SecondaryButton } from '../components/Buttons';
import MovingIcons from '../components/MovingIcons';

export default function Hero() {
  return (
    <section id="home" className="h-full">
      <div className="container mx-auto h-[100vh]  text-center flex flex-col gap-4 p-8 justify-center items-center">
        <div className="mb-8"></div>
        <div className="mb-2">
          <h2 className="text-6xl md:text-7xl text-teal-100 mb-4">
            Rajwinder Singh
          </h2>
          <h3 className="text-3xl md:text-4xl text-teal-300 ">
            A web Developer
          </h3>
        </div>
        <div className="flex gap-4 justify-center mb-24">
          <a href="#contact">
            <PrimaryButton>Hire me</PrimaryButton>
          </a>
          <a
            href="https://drive.google.com/file/d/14ra0zwh9c4dGpclhcnEcMaCQ2odDu94B/view"
            target="_blank"
          >
            <SecondaryButton>Get CV</SecondaryButton>
          </a>
        </div>
        <MovingIcons />
      </div>
    </section>
  );
}
