import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react';

import { handleRequest } from '@/utils/auth-helpers/client';
import { SignOut } from '@/utils/auth-helpers/server';
import { getRedirectMethod } from '@/utils/auth-helpers/settings';

import s from './Navbar.module.css';

interface NavUserLinksProps {
  user?: any;
}

export default function NavUserLinks({ user }: NavUserLinksProps) {
  const router = getRedirectMethod() === 'client' ? useRouter() : null;

  return (
    <div className="flex justify-end space-x-8">
      {user ? (
        <form onSubmit={(e) => handleRequest(e, SignOut, router)}>
          <input type="hidden" name="pathName" value={usePathname()} />
          <button type="submit" className={s.link}>
            Sign out
          </button>
        </form>
      ) : (
        <Link href="/signin" className={s.link}>
          Sign In
        </Link>
      )}
    </div>
  );
}
