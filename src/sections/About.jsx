import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  Clock3,
  PartyPopper,
  Sparkles,
  ArrowDownRight,
} from "lucide-react";

import SectionTitle from "../components/SectionTitle";
import "./About.scss";

const aboutImages = Array.from(
  { length: 13 },
  (_, index) => `/images/gallery/${index + 15}.webp`
);

function About() {
  const [currentImage, setCurrentImage] = useState(0);
  const [nextImage, setNextImage] = useState(null);

  useEffect(() => {
    const nextIndex =
      (currentImage + 1) % aboutImages.length;

    const image = new Image();
    image.src = aboutImages[nextIndex];

    image.onload = () => {
      setNextImage(nextIndex);
    };

    const timer = setTimeout(() => {
      setCurrentImage(nextIndex);
      setNextImage(null);
    }, 5200);

    return () => clearTimeout(timer);
  }, [currentImage]);

  const currentNumber = String(
    currentImage + 15
  ).padStart(2, "0");

  return (
    <section className="about section" id="about">
      <div className="container">

        {/* =====================================
            SECTION HEADER
        ====================================== */}
        <SectionTitle
          number="01"
          eyebrow="Our Story"
          title="More than a meal."
          highlight="A memory."
          description="Namo Restro brings together comforting food, a warm atmosphere and the kind of moments you want to repeat."
        />

        {/* =====================================
            MAIN STORY
        ====================================== */}
        <div className="about__main">

          {/* ===================================
              CINEMATIC VISUAL
          ==================================== */}
          <div className="about__visual">

            <div className="about__image-wrap">

              {/* Current Image */}
              <img
                key={`about-current-${currentImage}`}
                className="about__slide about__slide--active"
                src={aboutImages[currentImage]}
                alt={`Namo Restro dining experience ${currentNumber}`}
                loading="lazy"
              />

              {/* Next Image */}
              {nextImage !== null && (
                <img
                  key={`about-next-${nextImage}`}
                  className="about__slide about__slide--next"
                  src={aboutImages[nextImage]}
                  alt=""
                  aria-hidden="true"
                />
              )}

              <div className="about__image-overlay" />

              {/* Image Grain */}
              <div className="about__grain" />

              {/* Image Top Line */}
              <div className="about__image-top">
                <span>THE NAMO EXPERIENCE</span>
                <span>JAIPUR · INDIA</span>
              </div>

              {/* Image Counter */}
              <div className="about__counter">
                <span>{currentNumber}</span>
                <i />
                <span>27</span>
              </div>

              {/* Progress */}
              <div className="about__progress">
                <span
                  style={{
                    width: `${
                      ((currentImage + 1) /
                        aboutImages.length) *
                      100
                    }%`,
                  }}
                />
              </div>

              {/* Bottom Caption */}
              <div className="about__image-caption">
                <span>EST.</span>

                <strong>NAMO RESTRO</strong>

                <small>RAMNAGARIYA · JAIPUR</small>
              </div>
            </div>

            {/* Vertical Badge */}
            <div className="about__floating">
              <Sparkles size={15} />

              <span>
                MADE FOR
                <strong>GOOD MOMENTS</strong>
              </span>
            </div>

            {/* Decorative Number */}
            <div className="about__visual-number">
              01
            </div>
          </div>

          {/* ===================================
              CONTENT
          ==================================== */}
          <div className="about__content">

            <span className="about__label">
              The Namo Experience
            </span>

            <h3>
              Come for the food.
              <br />
              <em>Stay for the feeling.</em>
            </h3>

            <div className="about__accent-line">
              <span />
              <i />
              <span />
            </div>

            <p>
              At Namo Restro, every plate is part of a
              bigger experience. Whether it is a quick
              bite with friends, a late-night craving or
              a celebration worth remembering, our space
              is made to bring people together.
            </p>

            <p>
              Located opposite SKIT College Road in
              Ramnagariya, Jaipur, Namo Restro is your
              place to dine, celebrate and create moments
              over great food.
            </p>

            {/* Discover */}
            <a
              href="#menu"
              className="about__discover"
            >
              <span>Discover our menu</span>

              <span className="about__discover-icon">
                <ArrowUpRight size={16} />
              </span>
            </a>

            {/* =================================
                FEATURES
            ================================== */}
            <div className="about__features">

              <div className="about__feature">
                <div className="about__feature-icon">
                  <Clock3 size={19} />
                </div>

                <div>
                  <strong>24 Hours</strong>
                  <span>Open every day</span>
                </div>
              </div>

              <div className="about__feature">
                <div className="about__feature-icon">
                  <PartyPopper size={19} />
                </div>

                <div>
                  <strong>Celebrate</strong>
                  <span>Events & gatherings</span>
                </div>
              </div>

            </div>

            {/* Small Bottom Detail */}
            <div className="about__content-footer">
              <span>GOOD FOOD</span>

              <div />

              <span>GOOD PEOPLE</span>

              <ArrowDownRight size={14} />
            </div>
          </div>
        </div>

        {/* =====================================
            BOTTOM STATEMENT
        ====================================== */}
        <div className="about__statement">

          <span>01</span>

          <div className="about__statement-line" />

          <p>
            Good food. Good people.
            <br />
            <em>Great moments.</em>
          </p>

          <div className="about__statement-line" />

          <span>02</span>
        </div>

      </div>
    </section>
  );
}

export default About;