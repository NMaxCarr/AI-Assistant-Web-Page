import s from './Hero.module.css';

interface HeroProps {
  className?: string;
}

const Hero = ({ className }: HeroProps): React.ReactNode => {
  return (
    <section id="hero" className={className}>
      <h2 className={s.title}>AI-Assistant 🤖</h2>
      <div className={s.description}>
        A new approach for human to finally love AI and use it for day to day
        tasks
      </div>
    </section>
  );
};

export default Hero;
