import GitHub from '@/components/icons/GitHub';
import Navlink from './Navlink';
import LogoLink from './LogoLink';

interface NavlinksProps {
  user?: any;
}

export default async function Navlinks({ user }: NavlinksProps) {
  return (
    <div className="grid grid-cols-3 py-2 align-center sm:py-6">
      <div className="flex items-center">
        <LogoLink href="/" aria-label="Logo"/>
      </div>
      <nav className="flex flex-row gap-5 justify-center">
        <Navlink href="/#download">
          Download
        </Navlink>
        <Navlink href="/#features">
          Features
        </Navlink>
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
          <Navlink href="/account">
            Account
          </Navlink>
        )}
      </nav>
    </div>
  );
}
