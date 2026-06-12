import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  HOME_NAV_ITEMS,
  MINIMAL_NAV_ITEMS,
  type NavItem,
} from "../constants/navigation";
import { useSectionObserver, useScrolled } from "../hooks/useSectionObserver";
import { handleSmoothScroll } from "../utils/scrollUtils";

interface HeaderProps {
  minimal?: boolean;
}

export default function Header({ minimal = false }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef<HTMLUListElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);
  const navItems: NavItem[] = minimal ? MINIMAL_NAV_ITEMS : HOME_NAV_ITEMS;

  const activeSection = useSectionObserver(
    ["hero", "about", "skills", "projects", "contact"],
    { rootMargin: "-200px 0px -60% 0px" },
  );
  const scrolled = useScrolled(100);

  useEffect(() => {
    const handleClickOut = (e: MouseEvent) => {
      if (
        menuOpen &&
        !btnRef.current?.contains(e.target as Node) &&
        !navRef.current?.contains(e.target as Node)
      ) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("click", handleClickOut);
    return () => document.removeEventListener("click", handleClickOut);
  }, [menuOpen]);

  const handleLinkClick = () => setMenuOpen(false);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    handleSmoothScroll(e, href, 80);
    setMenuOpen(false);
  };

  return (
    <header
      className="navbar"
      style={{
        background: scrolled ? "rgba(5,10,15,0.97)" : "rgba(5,10,15,0.75)",
        boxShadow: scrolled
          ? "0 6px 24px rgba(0,0,0,0.6), 0 1px 0 rgba(0,229,255,0.1)"
          : "none",
        transition: "background 0.3s, box-shadow 0.3s",
      }}
    >
      <div className="nav-container">
        <div className="logo">
          <div className="logo-monogram">JE</div>
          <div className="logo-label">
            <span className="logo-full-name">José Emilio</span>
            <span className="logo-tagline">dev &amp; product</span>
          </div>
        </div>

        <nav aria-label="Navegación principal">
          <ul
            id="mobile-navigation"
            ref={navRef}
            className={`nav-links${menuOpen ? " active" : ""}`}
          >
            {navItems.map((item) => {
              const isActive = !minimal && activeSection === item.href.slice(1);
              if (item.isRoute) {
                return (
                  <li key={item.href}>
                    <Link
                      to={item.href}
                      className={`nav-link${isActive ? " active" : ""}`}
                      onClick={handleLinkClick}
                    >
                      <i className={`fas ${item.icon}`} aria-hidden="true"></i>{" "}
                      {item.label}
                    </Link>
                  </li>
                );
              }
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className={`nav-link${isActive ? " active" : ""}`}
                    onClick={(e) => handleNavClick(e, item.href)}
                  >
                    <i className={`fas ${item.icon}`} aria-hidden="true"></i>{" "}
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <button
          ref={btnRef}
          className={`menu-toggle${menuOpen ? " active" : ""}`}
          id="mobile-menu"
          type="button"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
        >
          <span
            className="bar"
            style={
              menuOpen
                ? { transform: "rotate(-45deg) translate(-5px, 6px)" }
                : {}
            }
          />
          <span className="bar" style={menuOpen ? { opacity: "0" } : {}} />
          <span
            className="bar"
            style={
              menuOpen
                ? { transform: "rotate(45deg) translate(-5px, -6px)" }
                : {}
            }
          />
        </button>
      </div>
    </header>
  );
}
