import { BRAND_NAME } from '@/app/configuration';
import { cn } from '@/utils/cn';
import LogoSvg from './Logo.svg';
type LogoProps = {
  classNames?: string;
};

const Logo = ({ classNames }: LogoProps) => (
  <span className={cn('font-bold whitespace-nowrap', { classNames })}>
    {BRAND_NAME}
  </span>
);

export default Logo;
