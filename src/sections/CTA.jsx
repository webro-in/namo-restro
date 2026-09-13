import {
  ArrowUpRight,
  CalendarDays,
  Clock3,
  MapPin,
  Sparkles,
} from "lucide-react";

import "./CTA.scss";

function CTA() {
  return (
    <section className="cta section" id="cta">
      <div className="cta__glow cta__glow--one" />
      <div className="cta__glow cta__glow--two" />

      <div className="container">
        <div className="cta__card">

          {/* Decorative rings */}
          <div className="cta__ring cta__ring--one" />
          <div className="cta__ring cta__ring--two" />

          {/* Soft decorative line */}
          <div className="cta__shine" />

          {/* =====================================
              TOP
          ===================================== */}
          <div className="cta__top">

            <div className="cta__eyebrow">
              <span />
              One More Good Reason
              <span />
            </div>

            <div className="cta__badge">
              <Sparkles size={14} />
              <span>24 HOURS OPEN</span>
            </div>

          </div>

          {/* =====================================
              MAIN CONTENT
          ===================================== */}
          <div className="cta__content">

            <span className="cta__mini">
              Your table is waiting
            </span>

            <h2>
              Good food is
              <br />
              always a <em>good idea.</em>
            </h2>

            <p>
              Whether it's a quick bite, a late-night craving or a
              celebration with your favourite people — make your next
              moment a Namo moment.
            </p>

            <div className="cta__actions">

              <a
                href="#reservation"
                className="cta__primary"
              >
                <CalendarDays size={17} />

                <span>Reserve Your Table</span>

                <ArrowUpRight size={17} />
              </a>

              <a
                href="#menu"
                className="cta__secondary"
              >
                <span>Explore Menu</span>

                <ArrowUpRight size={16} />
              </a>

            </div>

          </div>

          {/* =====================================
              FOOTER INFO
          ===================================== */}
          <div className="cta__footer">

            <div className="cta__info">

              {/* Hours */}
              <div className="cta__info-item">

                <div className="cta__icon">
                  <Clock3 size={17} />
                </div>

                <div>
                  <span>OPEN EVERY DAY</span>
                  <strong>24 Hours</strong>
                </div>

              </div>

              <div className="cta__divider" />

              {/* Location */}
              <div className="cta__info-item">

                <div className="cta__icon">
                  <MapPin size={17} />
                </div>

                <div>
                  <span>FIND US</span>
                  <strong>Ramnagariya · Jaipur</strong>
                </div>

              </div>

            </div>

            <span className="cta__brand">
              NAMO RESTRO
            </span>

          </div>

        </div>
      </div>
    </section>
  );
}

export default CTA;