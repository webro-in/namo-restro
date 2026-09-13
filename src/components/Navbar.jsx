import { useState } from "react";
import {
  CalendarDays,
  Clock3,
  Menu,
  ArrowUpRight,
} from "lucide-react";

import MobileMenu from "./MobileMenu";
import "./Navbar.scss";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className="navbar">
        <div className="navbar__shell">
          <div className="navbar__inner">

            {/* =========================
                LOGO
            ========================== */}
            <a
              href="#home"
              className="navbar__brand"
              onClick={closeMenu}
              aria-label="Namo Restro - Home"
            >
              <div className="navbar__logo">
                <span className="navbar__logo-main">
                  NAMO
                </span>

                <small className="navbar__logo-restro">
                  RESTRO
                </small>

                <em className="navbar__logo-skit">
                  <span />
                  SKIT
                  <span />
                </em>
              </div>

              <div className="navbar__brand-line" />

              <div className="navbar__tagline">
                <span>GOOD FOOD</span>
                <span>GOOD PEOPLE</span>
              </div>
            </a>

            {/* =========================
                DESKTOP NAVIGATION
            ========================== */}
            <nav
              className="navbar__nav"
              aria-label="Main navigation"
            >
              <a
                href="#home"
                className="navbar__link navbar__link--active"
              >
                <span>01</span>
                Home
              </a>

              <a
                href="#about"
                className="navbar__link"
              >
                <span>02</span>
                About
              </a>

              <a
                href="#menu"
                className="navbar__link"
              >
                <span>03</span>
                Menu
              </a>

              <a
                href="#gallery"
                className="navbar__link"
              >
                <span>04</span>
                Gallery
              </a>

              <a
                href="#contact"
                className="navbar__link"
              >
                <span>05</span>
                Contact
              </a>
            </nav>

            {/* =========================
                RIGHT ACTIONS
            ========================== */}
            <div className="navbar__actions">

              {/* Opening Hours */}
              <div className="navbar__hours">
                <Clock3
                  size={15}
                  aria-hidden="true"
                />

                <div>
                  <span>OPEN TODAY</span>
                  <strong>24 HOURS</strong>
                </div>
              </div>

              {/* Reservation */}
              <a
                href="#reservation"
                className="navbar__reservation"
              >
                <CalendarDays
                  size={16}
                  aria-hidden="true"
                />

                <span>Reserve a Table</span>

                <ArrowUpRight
                  size={15}
                  aria-hidden="true"
                />
              </a>

              {/* Mobile Menu */}
              <button
                type="button"
                className="navbar__menu"
                aria-label={
                  menuOpen
                    ? "Close navigation menu"
                    : "Open navigation menu"
                }
                aria-expanded={menuOpen}
                aria-controls="mobile-navigation"
                onClick={() => setMenuOpen(true)}
              >
                <Menu
                  size={22}
                  aria-hidden="true"
                />
              </button>

            </div>
          </div>
        </div>
      </header>

      {/* =========================
          MOBILE MENU
      ========================== */}
      <div id="mobile-navigation">
        <MobileMenu
          isOpen={menuOpen}
          onClose={closeMenu}
        />
      </div>
    </>
  );
}

export default Navbar;