import Link from 'next/link';
import AiLikesHumanLogo from '@/components/icons/AiLikesHuman';
import s from './Navbar.module.css';

import { showPricing } from '@/app/flags';
import GitHub from '@/components/icons/GitHub';

interface NavlinksProps {
  user?: any;
}

export default async function Navlinks({ user }: NavlinksProps) {
  const flag = await showPricing();
  return (
    <div className="grid grid-cols-3 py-2 align-center sm:py-6">
      <div className="flex items-center">
        <Link href="/" className={s.logo} aria-label="Logo">
          <AiLikesHumanLogo />
        </Link>
      </div>
      <nav className="flex flex-row gap-5 justify-center">
        <Link href="/#download" className={s.link}>
          Download
        </Link>
        <Link href="/#features" className={s.link}>
          Features
        </Link>
        {flag && (
          <Link href="/#pricing" className={s.link}>
            Pricing
          </Link>
        )}
      </nav>
      <nav className="flex flex-row mx-6 justify-end">
        <a
          aria-label="Github Repository"
          href="https://github.com/samuelint/ai-assistant"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="h-6 mx-2"
            alt="GitHub Repo stars"
            src="https://img.shields.io/github/stars/samuelint/ai-assistant"
          />
        </a>
        <a
          className="text-black"
          aria-label="Github Repository"
          href="https://github.com/samuelint/ai-assistant"
        >
          <GitHub />
        </a>
        {user && (
          <Link href="/account" className={s.link}>
            Account
          </Link>
        )}
      </nav>
    </div>
  );
}
