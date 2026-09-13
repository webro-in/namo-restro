import {
  ArrowUpRight,
  Check,
  Clock3,
  Crown,
  PartyPopper,
  Users,
} from "lucide-react";

import "./Experience.scss";

const experiences = [
  {
    number: "01",
    icon: Clock3,
    title: "24 Hours",
    text: "Whenever the craving hits, Namo is ready for you.",
  },
  {
    number: "02",
    icon: PartyPopper,
    title: "Celebrate",
    text: "Birthdays, gatherings and moments worth making special.",
  },
  {
    number: "03",
    icon: Users,
    title: "Come Together",
    text: "A relaxed space made for friends, families and good conversations.",
  },
];

const highlights = [
  "Freshly prepared food",
  "Comfortable dining experience",
  "Perfect for celebrations",
  "Late-night dining",
  "Events & gatherings",
  "Warm, welcoming atmosphere",
];

function Experience() {
  return (
    <section className="experience section" id="experience">
      <div className="experience__ambient experience__ambient--one" />
      <div className="experience__ambient experience__ambient--two" />

      <div className="container">

        {/* =========================
            HEADER
        ========================== */}
        <div className="experience__header">
          <div className="experience__eyebrow">
            <span />
            Why Namo
            <span />
          </div>

          <div className="experience__heading">
            <div className="experience__heading-main">
              <span className="experience__mini">
                More than just a restaurant
              </span>

              <h2>
                Come as you are.
                <br />
                <em>Leave with a story.</em>
              </h2>
            </div>

            <div className="experience__intro">
              <span className="experience__intro-line" />

              <p>
                Some places are simply where you eat. Namo is where
                you slow down, meet your people, celebrate little
                wins and make memories over something delicious.
              </p>
            </div>
          </div>
        </div>

        {/* =========================
            MAIN EXPERIENCE
        ========================== */}
        <div className="experience__main">

          {/* VISUAL */}
          <div className="experience__visual">
            <div className="experience__visual-frame">

              <div className="experience__visual-bg" />

              <div className="experience__visual-overlay" />

              <div className="experience__visual-content">
                <span>THE NAMO</span>

                <strong>
                  EXPERIENCE
                </strong>

                <div className="experience__visual-divider" />

                <small>
                  JAIPUR · RAMNAGARIYA
                </small>
              </div>

              {/* STAMP */}
              <div className="experience__stamp">
                <div className="experience__stamp-ring">
                  <Crown size={15} />
                </div>

                <span>NAMO</span>

                <small>RESTRO</small>
              </div>

              {/* QUOTE */}
              <div className="experience__quote">
                <span>“</span>

                <p>
                  Good food is
                  <br />
                  always a
                  <em> good idea.</em>
                </p>
              </div>

              {/* CORNER LABEL */}
              <div className="experience__visual-label">
                <span>EST.</span>
                <strong>2024</strong>
              </div>
            </div>
          </div>

          {/* CONTENT */}
          <div className="experience__content">

            <div className="experience__content-top">
              <span className="experience__label">
                The Namo Way
              </span>

              <span className="experience__content-number">
                01 / 01
              </span>
            </div>

            <h3>
              Food tastes better
              <br />
              <em>when shared.</em>
            </h3>

            <p className="experience__description">
              Whether you are dropping in for a quick bite,
              catching up with friends over coffee, satisfying
              a late-night craving or planning a celebration,
              Namo Restro is designed around one simple idea —
              make every visit feel worth remembering.
            </p>

            <div className="experience__rule" />

            {/* HIGHLIGHTS */}
            <div className="experience__highlights">
              {highlights.map((item, index) => (
                <div
                  className="experience__highlight"
                  key={item}
                >
                  <span className="experience__highlight-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="experience__highlight-check">
                    <Check size={11} />
                  </span>

                  <p>{item}</p>
                </div>
              ))}
            </div>

            <a
              href="#reservation"
              className="experience__link"
            >
              <span>Plan your visit</span>

              <span className="experience__link-icon">
                <ArrowUpRight size={17} />
              </span>
            </a>
          </div>
        </div>

        {/* =========================
            EXPERIENCE CARDS
        ========================== */}
        <div className="experience__cards">
          {experiences.map((item) => {
            const Icon = item.icon;

            return (
              <article
                className="experience-card"
                key={item.number}
              >
                <div className="experience-card__number">
                  {item.number}
                </div>

                <div className="experience-card__icon">
                  <Icon size={19} />
                </div>

                <div className="experience-card__body">
                  <h3>{item.title}</h3>

                  <p>{item.text}</p>
                </div>

                <div className="experience-card__arrow">
                  <ArrowUpRight size={16} />
                </div>

                <div className="experience-card__line" />
              </article>
            );
          })}
        </div>

        {/* =========================
            FINAL STATEMENT
        ========================== */}
        <div className="experience__statement">

          <div className="experience__statement-mark">
            <span>24</span>
            <small>× 7</small>
          </div>

          <div className="experience__statement-divider" />

          <div className="experience__statement-content">
            <span>OPEN FOR GOOD TIMES</span>

            <p>
              Your table is waiting.
              <br />
              <em>Any time. Any day.</em>
            </p>
          </div>

          <a href="#reservation">
            <span>Book a table</span>

            <ArrowUpRight size={17} />
          </a>
        </div>

      </div>
    </section>
  );
}

export default Experience;