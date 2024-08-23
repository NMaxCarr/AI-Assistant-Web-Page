import Link from 'next/link';
import Logo from '@/components/icons/Logo';
import s from './Navbar.module.css';

interface NavlinksProps {
  user?: any;
}

export default function Navlinks({ user }: NavlinksProps) {
  return (
    <div className="grid grid-cols-3 py-4 align-center md:py-6">
      <div className="flex items-center">
        <Link href="/" className={s.logo} aria-label="Logo">
          <Logo />
        </Link>
      </div>
      <nav className="flex flex-row gap-5 justify-center">
        <Link href="#features" className={s.link}>
          Features
        </Link>
        <Link href="#demo" className={s.link}>
          Tour
        </Link>
        <Link href="#pricing" className={s.link}>
          Pricing
        </Link>
      </nav>
      <nav className="flex flex-row mx-6 justify-end">
        {user && (
          <Link href="/account" className={s.link}>
            Account
          </Link>
        )}
      </nav>
    </div>
  );
}
