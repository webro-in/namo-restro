import {
  ArrowUpRight,
  Clock3,
  ExternalLink,
  MapPin,
  Phone,
} from "lucide-react";

import "./Footer.scss";

const instagramUrl =
  "https://www.instagram.com/namorestro.skit/";

const googleMapsUrl =
  "https://www.google.com/maps/place/Namo+Restro/@26.823708,75.8615205,17z/data=!3m1!4b1!4m6!3m5!1s0x396dc9b86805c24b:0xc6dd1810a1723f55!8m2!3d26.8237081!4d75.8663914!16s%2Fg%2F11xyg394m7?entry=ttu";

const directionsUrl =
  "https://www.google.com/maps/dir/?api=1&destination=26.8237081,75.8663914";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" id="footer">

      {/* =====================================
          AMBIENT BACKGROUND
      ====================================== */}
      <div className="footer__ambient footer__ambient--one" />
      <div className="footer__ambient footer__ambient--two" />
      <div className="footer__grain" />

      {/* =====================================
          FOOTER TOP
      ====================================== */}
      <div className="footer__top">
        <div className="container">
          <div className="footer__grid">

            {/* =================================
                BRAND
            ================================== */}
            <div className="footer__brand">

              <a
                href="#home"
                className="footer__logo"
                aria-label="Namo Restro Home"
              >
                <span className="footer__logo-main">
                  NAMO
                </span>

                <span className="footer__logo-sub">
                  RESTRO
                </span>

                <span className="footer__logo-location">
                  <i />
                  SKIT
                  <i />
                </span>
              </a>

              <p className="footer__intro">
                Good food, good people and great moments —
                all in one place, right here in Jaipur.
              </p>

              <a
                href="#reservation"
                className="footer__reserve"
              >
                <span>Reserve a Table</span>

                <span className="footer__reserve-icon">
                  <ArrowUpRight size={15} />
                </span>
              </a>

            </div>

            {/* =================================
                EXPLORE
            ================================== */}
            <div className="footer__column">

              <span className="footer__label">
                EXPLORE
              </span>

              <nav className="footer__links">

                <a href="#home">
                  <span>
                    <small>01</small>
                    Home
                  </span>

                  <ArrowUpRight size={13} />
                </a>

                <a href="#about">
                  <span>
                    <small>02</small>
                    About
                  </span>

                  <ArrowUpRight size={13} />
                </a>

                <a href="#menu">
                  <span>
                    <small>03</small>
                    Menu
                  </span>

                  <ArrowUpRight size={13} />
                </a>

                <a href="#gallery">
                  <span>
                    <small>04</small>
                    Gallery
                  </span>

                  <ArrowUpRight size={13} />
                </a>

                <a href="#contact">
                  <span>
                    <small>05</small>
                    Contact
                  </span>

                  <ArrowUpRight size={13} />
                </a>

              </nav>

            </div>

            {/* =================================
                VISIT US
            ================================== */}
            <div className="footer__column">

              <span className="footer__label">
                VISIT US
              </span>

              <div className="footer__details">

                {/* ADDRESS */}
                <div className="footer__detail">

                  <div className="footer__detail-icon">
                    <MapPin
                      size={16}
                      strokeWidth={1.5}
                    />
                  </div>

                  <div className="footer__detail-content">

                    <span className="footer__detail-title">
                      FIND US
                    </span>

                    <p>
                      No. 2-47, Opposite SKIT College Road,
                      Shri Ram Vihar, Ramnagariya,
                      Jaipur, Rajasthan 302017
                    </p>

                  </div>

                </div>

                {/* HOURS */}
                <div className="footer__detail">

                  <div className="footer__detail-icon">
                    <Clock3
                      size={16}
                      strokeWidth={1.5}
                    />
                  </div>

                  <div className="footer__detail-content">

                    <span className="footer__detail-title">
                      OPENING HOURS
                    </span>

                    <p>
                      Open 24 Hours

                      <small>
                        Every day
                      </small>
                    </p>

                  </div>

                </div>

              </div>

              {/* DIRECTIONS */}
              <a
                href={directionsUrl}
                target="_blank"
                rel="noreferrer"
                className="footer__map"
              >
                <span>
                  Get Directions
                </span>

                <span className="footer__map-arrow">
                  <ArrowUpRight size={13} />
                </span>
              </a>

            </div>

            {/* =================================
                CONTACT
            ================================== */}
            <div className="footer__column footer__contact">

              <span className="footer__label">
                SAY HELLO
              </span>

              {/* PHONE */}
              <a
                href="tel:+918829017272"
                className="footer__phone"
              >

                <span className="footer__phone-icon">
                  <Phone
                    size={16}
                    strokeWidth={1.5}
                  />
                </span>

                <span className="footer__phone-number">
                  +91 88290 17272
                </span>

                <ExternalLink
                  className="footer__phone-external"
                  size={12}
                />

              </a>

              {/* =================================
                  SOCIAL
              ================================== */}
              <div className="footer__social-block">

                <span className="footer__social-title">
                  FOLLOW ALONG
                </span>

                <div className="footer__socials">

                  {/* =================================
                      INSTAGRAM
                  ================================== */}
                  <a
                    href={instagramUrl}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Namo Restro Instagram"
                    className="footer__social"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      width="18"
                      height="18"
                      fill="none"
                      aria-hidden="true"
                    >
                      <rect
                        x="3"
                        y="3"
                        width="18"
                        height="18"
                        rx="5"
                        stroke="currentColor"
                        strokeWidth="1.8"
                      />

                      <circle
                        cx="12"
                        cy="12"
                        r="4.2"
                        stroke="currentColor"
                        strokeWidth="1.8"
                      />

                      <circle
                        cx="17.4"
                        cy="6.6"
                        r="1.15"
                        fill="currentColor"
                      />
                    </svg>
                  </a>

                  {/* =================================
                      GOOGLE MAPS
                  ================================== */}
                  <a
                    href={googleMapsUrl}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Namo Restro Google Maps"
                    className="footer__social"
                  >
                    <svg
                      className="footer__google-icon"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fill="#4285F4"
                        d="M21.35 12.27c0-.79-.07-1.55-.22-2.27H12v4.3h5.22a4.46 4.46 0 0 1-1.94 2.93v2.43h3.14c1.84-1.7 2.93-4.2 2.93-7.39Z"
                      />

                      <path
                        fill="#34A853"
                        d="M12 21.99c2.63 0 4.84-.87 6.45-2.33l-3.14-2.43c-.87.58-1.98.92-3.31.92-2.55 0-4.71-1.72-5.49-4.04H3.27v2.51A9.74 9.74 0 0 0 12 21.99Z"
                      />

                      <path
                        fill="#FBBC05"
                        d="M6.51 14.11A5.85 5.85 0 0 1 6.2 12c0-.73.12-1.44.31-2.11V7.38H3.27A9.96 9.96 0 0 0 2.25 12c0 1.67.4 3.25 1.02 4.62l3.24-2.51Z"
                      />

                      <path
                        fill="#EA4335"
                        d="M12 5.85c1.43 0 2.71.49 3.72 1.46l2.79-2.79C16.83 2.96 14.63 2 12 2a9.74 9.74 0 0 0-8.73 5.38l3.24 2.51C7.29 7.57 9.45 5.85 12 5.85Z"
                      />
                    </svg>
                  </a>

                </div>

              </div>

              <p className="footer__small-text">
                Food tastes better when
                shared with good people.
              </p>

            </div>

          </div>
        </div>
      </div>

      {/* =====================================
          FOOTER BOTTOM
      ====================================== */}
      <div className="footer__bottom">

        <div className="container">

          <div className="footer__bottom-inner">

            <span className="footer__copyright">
              © {currentYear} Namo Restro.
              <span>
                {" "}All rights reserved.
              </span>
            </span>

            <a
              href="#home"
              className="footer__backtop"
            >
              <span>
                Back to top
              </span>

              <span className="footer__backtop-icon">
                <ArrowUpRight size={13} />
              </span>
            </a>

            <span className="footer__made">
              JAIPUR · RAMNAGARIYA
            </span>

          </div>

        </div>

      </div>

    </footer>
  );
}

export default Footer;