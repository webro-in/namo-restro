import {
  ArrowUpRight,
  CalendarDays,
  Clock3,
  MapPin,
  X,
} from "lucide-react";

import "./MobileMenu.scss";

function MobileMenu({ isOpen, onClose }) {
  const links = [
    { number: "01", label: "Home", href: "#home" },
    { number: "02", label: "About", href: "#about" },
    { number: "03", label: "Specials", href: "#specials" },
    { number: "04", label: "Menu", href: "#menu" },
    { number: "05", label: "Gallery", href: "#gallery" },
    { number: "06", label: "Contact", href: "#contact" },
  ];

  const handleLinkClick = () => {
    onClose();
  };

  return (
    <div
      className={`mobile-menu ${isOpen ? "is-open" : ""}`}
      aria-hidden={!isOpen}
    >
      <button
        type="button"
        className="mobile-menu__backdrop"
        onClick={onClose}
        aria-label="Close navigation menu"
      />

      <aside
        className="mobile-menu__panel"
        aria-label="Mobile navigation"
      >
        {/* HEADER */}
        <div className="mobile-menu__head">
          <a
            href="#home"
            className="mobile-menu__logo"
            onClick={handleLinkClick}
          >
            <span>NAMO</span>
            <small>RESTRO</small>
          </a>

          <button
            type="button"
            className="mobile-menu__close"
            onClick={onClose}
            aria-label="Close navigation menu"
          >
            <X size={21} />
          </button>
        </div>

        {/* NAVIGATION */}
        <nav className="mobile-menu__nav">
          {links.map((link) => (
            <a
              key={link.number}
              href={link.href}
              className="mobile-menu__link"
              onClick={handleLinkClick}
            >
              <span>{link.number}</span>
              <strong>{link.label}</strong>
              <ArrowUpRight size={16} />
            </a>
          ))}
        </nav>

        {/* BOTTOM */}
        <div className="mobile-menu__bottom">
          <div className="mobile-menu__hours">
            <Clock3 size={17} />

            <div>
              <span>OPEN EVERY DAY</span>
              <strong>24 Hours</strong>
            </div>
          </div>

          <div className="mobile-menu__location">
            <MapPin size={15} />

            <span>
              Ramnagariya · Jaipur
            </span>
          </div>

          <a
            href="#reservation"
            className="mobile-menu__reserve"
            onClick={handleLinkClick}
          >
            <CalendarDays size={16} />
            <span>Reserve a Table</span>
            <ArrowUpRight size={16} />
          </a>
        </div>
      </aside>
    </div>
  );
}

export default MobileMenu;