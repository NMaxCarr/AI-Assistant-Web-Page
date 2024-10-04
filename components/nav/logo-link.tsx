import Link from 'next/link';
import { AiLikesHuman } from '@/components/icons';

import { BRAND_NAME } from '@/app/configuration';


interface Props {
    href: string;
}

export default function LogoLink({ href }: Props) {
  return (
    <Link href={href} className="p-1 sm:mx-6 md:text-2xl outline-none ring-0 ring-transparent ring-opacity-0 cursor-pointer rounded-full transform duration-100 ease-in-out flex flex-row gap-2" aria-label={BRAND_NAME}>
      <AiLikesHuman className='w-10 h-10' /><span>{ BRAND_NAME }</span>
    </Link>
  );
}
