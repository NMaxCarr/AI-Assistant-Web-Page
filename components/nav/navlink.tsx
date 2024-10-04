import Link from 'next/link';
import { ReactNode } from 'react';


interface Props {
    href: string;
    children?: ReactNode;
}

export default function Navlink({ href, children }: Props) {
  return (
    <Link href={href} className='hover:text-accent inline-flex items-center justify-center min-w-16 leading-6 transition ease-in-out duration-75 cursor-pointer rounded-md p-1'>
      {children}
    </Link>
  );
}
