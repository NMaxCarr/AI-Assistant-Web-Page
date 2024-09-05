import s from './Navbar.module.css';
import Navlinks from './Navlinks';

export default async function Navbar() {
  // const {
  //   data: { user }
  // } = await supabase.auth.getUser();

  return (
    <nav className={s.root}>
      <a href="#skip" className="sr-only focus:not-sr-only">
        Skip to content
      </a>
      <Navlinks />
    </nav>
  );
}
