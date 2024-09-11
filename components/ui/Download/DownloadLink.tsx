import { cn } from '@/utils/cn';

type DownloadLinkProps = {
  href: string;
  children?: React.ReactNode;
  className?: string;
};

const DownloadLink = ({ children, href, className }: DownloadLinkProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={cn(
        'p-2 font-medium flex items-center gap-1 hover:bg-gray-700/50 transition',
        className
      )}
    >
      {children}
    </a>
  );
};

export default DownloadLink;
