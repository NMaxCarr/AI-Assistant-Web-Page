import { cn } from '@/utils/cn';

type LogoProps = {
  classNames?: string;
};

const Logo = ({ classNames }: LogoProps) => (
  <span className={cn('font-bold whitespace-nowrap', { classNames })}>
    HumanLovesAI ❤️
  </span>
);

export default Logo;
