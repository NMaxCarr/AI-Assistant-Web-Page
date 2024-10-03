import s from './Navbar.module.css';
import Navlinks from './Navlinks';

export default async function Navbar() {
  return (
    <nav className={s.root}>
      <Navlinks />
    </nav>
  );
}
