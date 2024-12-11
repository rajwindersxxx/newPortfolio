export default function About() {
  return (
    <section id="about" className="h-screen ">
      <div className="container flex flex-col gap-8 justify-center items-center text-center m-auto h-full">
        <div className="">
          <img
            className="w-64 rounded-full border-4 border-teal-600 "
            src="./img/Profile-img.jpg"
            alt="Profile pic"
            width="100%"
          />
        </div>
        <h2 className="text-teal-200 text-3xl text-center">I’m Rajwinder</h2>
        <p className="text-teal-300 text-center p-4">
          A passionate programmer and web developer who began coding at 23
          during college. My love for creating impactful digital experiences
          drives my dream of becoming a recognized programmer, developing
          applications that make a difference. Here’s a bit more about my
          skills, and projects!
        </p>
      </div>
    </section>
  );
}
