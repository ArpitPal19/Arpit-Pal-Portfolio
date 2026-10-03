import { useState } from "react";
import { FaBars, FaXmark } from "react-icons/fa6";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const closeMenu = () => setShowMenu(false);

  return (
    <nav className="fixed top-0 z-50 w-full bg-dark-100/90 px-6 py-4 shadow-lg backdrop-blur-sm md:px-8">
      <div className="container mx-auto flex items-center justify-between">
        <a
          href="#home"
          onClick={closeMenu}
          className="flex items-center text-3xl font-bold text-white"
        >
          Arpit
          <span className="text-purple"> Pal</span>
          <span className="ml-2 h-3 w-3 rounded-full bg-purple" />
        </a>

        <div className="hidden items-center space-x-10 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="group relative text-white/80 transition duration-300 hover:text-purple"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-purple transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        <button
          type="button"
          onClick={() => setShowMenu((prev) => !prev)}
          className="rounded-md p-2 text-white transition hover:text-purple md:hidden"
          aria-label={
            showMenu ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={showMenu}
          aria-controls="mobile-navigation"
        >
          {showMenu ? (
            <FaXmark className="text-2xl" />
          ) : (
            <FaBars className="text-2xl" />
          )}
        </button>
      </div>

      {showMenu && (
        <div
          id="mobile-navigation"
          className="mt-4 rounded-lg bg-dark-300 p-6 md:hidden"
        >
          <div className="flex flex-col items-center space-y-6">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className="text-lg text-white/80 transition hover:text-purple"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
