import { Button } from '../ui/button';
import Link from 'next/link';


type DownloadLinkProps = {
  href: string;
  children?: React.ReactNode;
  className?: string;
};

const DownloadLink = ({ children, href, className }: DownloadLinkProps) => {
  return (
    <Button className={className} asChild>
      <Link href={href}>{children}</Link>
    </Button>
  );
};

export default DownloadLink;
