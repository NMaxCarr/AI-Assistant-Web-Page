import BlurFade from '@/components/animations/blur-fade';
import s from './Navbar.module.css';
import Navlinks from './Navlinks';

// import { createClient } from '@/utils/supabase/client';

export default async function Navbar() {
  // const supabase = createClient();
  // const {
  //   data: { user }
  // } = await supabase.auth.getUser();

  return (
    <nav className={s.root}>
      <a href="#ski p" className="sr-only focus:not-sr-only">
        Skip to content
      </a>
      <BlurFade delay={0.15}>
        <Navlinks />
      </BlurFade>
    </nav>
  );
}
