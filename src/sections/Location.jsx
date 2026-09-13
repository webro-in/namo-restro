import {
  ArrowUpRight,
  Clock3,
  ExternalLink,
  MapPin,
  Navigation,
  Phone,
} from "lucide-react";

import "./Location.scss";

const mapUrl =
  "https://www.google.com/maps/dir/?api=1&destination=26.8237081,75.8663914";

const directionsUrl =
  "https://www.google.com/maps/place/Namo+Restro/@26.823708,75.8615205,17z/data=!3m1!4b1!4m6!3m5!1s0x396dc9b86805c24b:0xc6dd1810a1723f55!8m2!3d26.8237081!4d75.8663914!16s%2Fg%2F11xyg394m7?entry=ttu&g_ep=EgoyMDI2MDkwMi4wIKXMDSoASAFQAw%3D%3D";

function Location() {
  return (
    <section className="location section" id="contact">
      <div className="location__glow location__glow--one" />

      <div className="container">
        {/* =========================
            HEADER
        ========================== */}
        <div className="location__header">
          <div className="location__eyebrow">
            <span />
            Find Namo
            <span />
          </div>

          <div className="location__heading">
            <div>
              <span className="location__mini">
                Come find your table
              </span>

              <h2>
                Right here in
                <em> Jaipur.</em>
              </h2>
            </div>

            <p>
              Easy to find, easy to reach and open around the clock.
              Come over whenever you're ready for good food and good
              company.
            </p>
          </div>
        </div>

        {/* =========================
            LOCATION MAIN
        ========================== */}
        <div className="location__main">
          {/* =========================
              MAP
          ========================== */}
          <div className="location__map">
            <iframe
              title="Namo Restro Location"
              src="https://www.google.com/maps?q=26.8237081,75.8663914&z=17&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />

            <div className="location__map-overlay">
              <div className="location__pin">
                <MapPin size={19} />
              </div>

              <div className="location__map-label">
                <span>NAMO RESTRO</span>
                <strong>Ramnagariya · Jaipur</strong>
              </div>
            </div>

            <a
              href={directionsUrl}
              target="_blank"
              rel="noreferrer"
              className="location__directions"
            >
              <Navigation size={15} />
              <span>Open in Google Maps</span>
              <ArrowUpRight size={15} />
            </a>
          </div>

          {/* =========================
              DETAILS
          ========================== */}
          <div className="location__details">
            <div className="location__detail-head">
              <span>01</span>

              <div>
                <span>OUR LOCATION</span>

                <h3>
                  Come
                  <em> over.</em>
                </h3>
              </div>
            </div>

            {/* =========================
                ADDRESS
            ========================== */}
            <div className="location__block">
              <div className="location__block-icon">
                <MapPin size={18} />
              </div>

              <div>
                <span>ADDRESS</span>

                <p>
                  No. 2-47, Opposite SKIT College Road,
                  Shri Ram Vihar, Ramnagariya,
                  Jaipur, Rajasthan 302017
                </p>
              </div>
            </div>

            {/* =========================
                HOURS
            ========================== */}
            <div className="location__block">
              <div className="location__block-icon">
                <Clock3 size={18} />
              </div>

              <div>
                <span>OPENING HOURS</span>

                <p>
                  Open 24 Hours
                  <small>Every day</small>
                </p>
              </div>
            </div>

            {/* =========================
                PHONE
            ========================== */}
            <div className="location__block">
              <div className="location__block-icon">
                <Phone size={18} />
              </div>

              <div>
                <span>CALL US</span>

                <a href="tel:+918829017272">
                  +91 88290 17272
                  <ExternalLink size={13} />
                </a>
              </div>
            </div>

            {/* =========================
                ACTIONS
            ========================== */}
            <div className="location__actions">
              <a
                href={mapUrl}
                target="_blank"
                rel="noreferrer"
                className="location__primary"
              >
                <Navigation size={16} />

                <span>Get Directions</span>

                <ArrowUpRight size={16} />
              </a>

              <a
                href="tel:+918829017272"
                className="location__secondary"
              >
                <Phone size={15} />

                <span>Call Namo</span>
              </a>
            </div>
          </div>
        </div>

        {/* =========================
            BOTTOM STRIP
        ========================== */}
        <div className="location__bottom">
          <div>
            <span>JAIPUR</span>
            <i />
            <span>RAMNAGARIYA</span>
            <i />
            <span>SKIT ROAD</span>
          </div>

          <p>
            Your next good meal is
            <em> closer than you think.</em>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Location;