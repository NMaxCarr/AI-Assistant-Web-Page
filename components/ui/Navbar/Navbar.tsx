import { createClient } from '@/utils/supabase/server';
import s from './Navbar.module.css';
import Navlinks from './Navlinks';
import BlurFade from '@/components/animations/blur-fade';

export default async function Navbar() {
  // const supabase = createClient();

  // const {
  //   data: { user }
  // } = await supabase.auth.getUser();

  return (
    <nav className={s.root}>
      <a href="#skip" className="sr-only focus:not-sr-only">
        Skip to content
      </a>
      <BlurFade delay={0.15}>
        <Navlinks />
      </BlurFade>
    </nav>
  );
}
