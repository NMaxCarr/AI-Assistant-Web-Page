import RetroGrid from '../retro-grid';

const Hero = (): React.ReactNode => {
  return (
    <section id="hero" className="relative flex h-[500px] w-full flex-col items-center justify-center">
      <span className="pointer-events-none z-10 whitespace-pre-wrap bg-gradient-to-b from-[#004ECF] to-[#081E91] bg-clip-text text-center text-7xl font-bold leading-none tracking-tighter text-transparent">
        Perfect AI Client for Software Developers
      </span>

      <RetroGrid />
    </section>
  );
};

export default Hero;
