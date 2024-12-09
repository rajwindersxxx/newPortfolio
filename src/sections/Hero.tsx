

interface props {
  children?: React.ReactNode;
}
export default function Hero({children}: props) {
  return (
    <section id="home" className="h-full">
      <div className="container mx-auto h-[100vh]  text-center flex flex-col gap-4 p-8 justify-center items-center">
        <div className="mb-8"></div>
        <div className="mb-2">
          <h2 className="text-6xl md:text-7xl text-teal-100 mb-4">Rajwinder Singh</h2>
          <h3 className="text-3xl md:text-4xl text-teal-300 ">A web Developer</h3>
        </div>

        <div className="flex gap-4 justify-center mb-24">
          <button className="bg-teal-700 text-teal-200  w-24 h-12 rounded hover:bg-teal-800 transition-all">
            Hire me
          </button>
          <button className="bg-teal-700  text-teal-200  w-24 h-12   rounded hover:bg-teal-800 transition-all">
            Get CV
          </button>
        </div>
      {children}
      </div>
    </section>
  );
}
