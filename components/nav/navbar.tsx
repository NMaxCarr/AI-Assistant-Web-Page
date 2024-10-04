import Navlinks from './nav-links';


export default async function Navbar() {
  return (
    <nav className="sticky top-0 bg-background z-40 transition-all duration-150 h-16 md:h-20">
      <Navlinks />
    </nav>
  );
}
