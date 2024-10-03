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
        'bg-slate-800 hover:bg-slate-700/90 rounded-lg text-white px-8 py-4 font-medium flex items-center gap-1 transition',
        className
      )}
    >
      {children}
    </a>
  );
};

export default DownloadLink;
