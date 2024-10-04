import Link from 'next/link';
import AiLikesHumanLogo from '@/components/icons/AiLikesHuman';

import { ReactNode } from 'react';

interface Props {
    href: string;
}

export default function LogoLink({ href }: Props) {
  return (
    <Link href={href} className="p-1 sm:mx-6 md:text-2xl outline-none ring-0 ring-transparent ring-opacity-0 cursor-pointer rounded-full transform duration-100 ease-in-out !important" aria-label="Logo">
        <AiLikesHumanLogo />
    </Link>
  );
}
