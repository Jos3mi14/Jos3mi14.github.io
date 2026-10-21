import { useState, useEffect, useRef, useMemo } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  HOME_NAV_ITEMS,
  MINIMAL_NAV_ITEMS,
  type NavItem,
} from "../constants/navigation";
import { useSectionObserver, useScrolled } from "../hooks/useSectionObserver";
import { handleSmoothScroll } from "../utils/scrollUtils";
import Icon from "./shared/Icon";

interface HeaderProps {
  minimal?: boolean;
}

const SECTION_IDS = ["hero", "about", "skills", "projects", "contact"];

export default function Header({ minimal = false }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef<HTMLUListElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);
  const navItems: NavItem[] = minimal ? MINIMAL_NAV_ITEMS : HOME_NAV_ITEMS;
  const { pathname } = useLocation();

  const sectionIds = useMemo(() => SECTION_IDS, []);
  const activeSection = useSectionObserver(sectionIds, {
    rootMargin: "-200px 0px -60% 0px",
  });
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

  useEffect(() => {
    if (!menuOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
        btnRef.current?.focus();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
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
    <header className={`navbar${scrolled ? " scrolled" : ""}`}>
      <div className="nav-container">
        <Link to="/" className="logo" onClick={handleLinkClick}>
          <span className="logo-monogram" aria-hidden="true">
            JE
          </span>
          <span className="logo-label">
            <span className="logo-full-name">José Emilio Sánchez Miñón</span>
            <span className="logo-tagline">Dev &amp; producto</span>
          </span>
        </Link>

        <nav aria-label="Navegación principal">
          <ul
            id="mobile-navigation"
            ref={navRef}
            className={`nav-links${menuOpen ? " active" : ""}`}
          >
            {navItems.map((item) => {
              const isRouteActive = item.isRoute && pathname === item.href;
              const isSectionActive =
                !minimal &&
                !item.isRoute &&
                activeSection === item.href.slice(1);
              const isActive = isRouteActive || isSectionActive;

              if (item.isRoute) {
                return (
                  <li key={item.href}>
                    <Link
                      to={item.href}
                      className={`nav-link${isActive ? " active" : ""}`}
                      aria-current={isRouteActive ? "page" : undefined}
                      onClick={handleLinkClick}
                    >
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
                    aria-current={isSectionActive ? "true" : undefined}
                    onClick={(e) => handleNavClick(e, item.href)}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <button
          ref={btnRef}
          className="menu-toggle"
          type="button"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
        >
          <Icon name={menuOpen ? "close" : "menu"} size={20} />
        </button>
      </div>
    </header>
  );
}
