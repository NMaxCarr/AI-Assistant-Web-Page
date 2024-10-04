import { cn } from '@/utils/cn';


type Props = {
  className?: string;
  children?: React.ReactNode;
};

const Container = ({ className = '', children }: Props) => {
  return <div className={cn('container', className)}>{children}</div>;
};

export default Container;
