import { Button } from '../ui/button';


type DownloadLinkProps = {
  href: string;
  children?: React.ReactNode;
  className?: string;
};

const DownloadLink = ({ children, href, className }: DownloadLinkProps) => {
  return (
    <Button className={className} asChild>
      {/* Do not use next/link, since it prevent to download the file twice */}
      <a href={href} download>{children}</a>
    </Button>
  );
};

export default DownloadLink;
