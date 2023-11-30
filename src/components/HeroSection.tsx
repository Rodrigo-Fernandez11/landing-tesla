export const HeroSection = () => {
  return (
    <section className="bg-black h-screen w-screen text-center relative overflow-hidden">
      <div className="z-30 relative h-full flex flex-col">
        <header>
          <h2 className="text-white pt-40 text-2xl font-medium">
            Disfrute de Tesla
          </h2>
          <p className="text-white text-sm">
            Programe una prueba de conduccion hoy mismo
          </p>
        </header>
        <footer className="flex flex-col flex-grow justify-end pb-20">
          <div>
            <a
              className="text-white border-[3px] bg-white/5 backdrop-blur-sm text-sm rounded font-medium px-12 py-2 inline-block hover:bg-white hover:text-black transition-colors"
              href="#"
            >
              Prueba de conducir
            </a>
          </div>
        </footer>
      </div>
      <div className="absolute top-0 bottom-0 w-full h-full z-10">
        <video
          className="object-center object-cover w-full h-full"
          autoPlay
          muted
          loop
          src="/video.webm"
        ></video>
      </div>
    </section>
  );
};