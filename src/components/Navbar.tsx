
import { useState, useEffect } from "react";
import { Sun, Moon, Menu, X } from "lucide-react";
import clickSoundFile from "../assets/click.mp3";
import { NavLink } from "react-router-dom";

type Props = {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
};

const links = [
  { name: "Home", path: "/" },
  { name: "Projects", path: "/projects" },
  { name: "Contact", path: "/contact" },
];

const Navbar = ({ darkMode, setDarkMode }: Props) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleTheme = () => {
    const clickSound = new Audio(clickSoundFile);
    clickSound.play().catch(() => {});

    setDarkMode((prev) => !prev);
    document.documentElement.classList.toggle("light", darkMode);
  };

  useEffect(() => {
    setMenuOpen(false);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-white/10 px-5 py-4 backdrop-blur-xl sm:px-8 lg:px-14">
      <nav className="mx-auto flex max-w-7xl items-center justify-between">
        {/* Logo / Name */}
        <NavLink
          to="/"
          onClick={() => setMenuOpen(false)}
          className="whitespace-nowrap font-roboto text-xl sm:text-2xl"
        >
          Saumya Chaudhary
        </NavLink>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-6 font-light md:flex lg:gap-7">
          {links.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `group relative transition-all duration-300 hover:-translate-y-0.5 ${
                  isActive
                    ? "text-[var(--primary)]"
                    : "text-[var(--muted-foreground)] hover:text-[var(--primary-hover)]"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {link.name}
                  <span
                    className={`absolute -bottom-2 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-[var(--primary)] transition-all duration-300 ${
                      isActive
                        ? "scale-100 opacity-100"
                        : "scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100"
                    }`}
                  />
                </>
              )}
            </NavLink>
          ))}

          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="cursor-pointer rounded-full p-2 transition-all duration-300 hover:rotate-45 active:scale-90"
          >
            {darkMode ? (
              <Sun size={19} className="text-[var(--primary)]" />
            ) : (
              <Moon size={19} className="text-[var(--primary)]" />
            )}
          </button>
        </div>

        {/* Mobile Controls */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="rounded-full p-2 transition-transform duration-300 hover:rotate-12 active:scale-90"
          >
            {darkMode ? (
              <Sun size={19} className="text-[var(--primary)]" />
            ) : (
              <Moon size={19} className="text-[var(--primary)]" />
            )}
          </button>

          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className="rounded-xl border border-[var(--border)] p-2 text-[var(--foreground)] transition-colors hover:text-[var(--primary)]"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`grid transition-all duration-300 ease-in-out md:hidden ${
          menuOpen
            ? "grid-rows-[1fr] opacity-100"
            : "pointer-events-none grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="flex flex-col gap-1 pt-4">
            {links.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `rounded-xl px-4 py-3 text-sm transition-colors duration-200 ${
                    isActive
                      ? "bg-[var(--primary)]/10 text-[var(--primary)]"
                      : "text-[var(--muted-foreground)] hover:bg-[var(--primary)]/5 hover:text-[var(--primary)]"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;