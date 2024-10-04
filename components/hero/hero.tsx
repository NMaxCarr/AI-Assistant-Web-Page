import RetroGrid from '../ui/retro-grid';


const Hero = (): React.ReactNode => {
  return (
    <section id="hero" className="relative flex h-[500px] w-full flex-col items-center justify-center gap-2">
      <span className="pointer-events-none z-10 whitespace-pre-wrap bg-gradient-to-b from-[#004ECF] to-[#081E91] bg-clip-text text-center text-7xl font-bold leading-none tracking-tighter text-transparent">
        AI Client you will love
      </span>
      <span className="text-4xl font-bold text-black dark:text-white">Perfect for Software Developers</span>
      <RetroGrid className='absolute w-screen' />
    </section>
  );
};

export default Hero;
