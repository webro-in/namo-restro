import { useEffect, useState } from "react";
import {
  ArrowRight,
  ArrowDown,
  Clock3,
  MapPin,
  Utensils,
  Play,
} from "lucide-react";

import "./Hero.scss";

const heroImages = Array.from(
  { length: 28 },
  (_, index) => `/images/gallery/${index + 1}.webp`
);

function Hero() {
  const [currentImage, setCurrentImage] = useState(0);
  const [nextImage, setNextImage] = useState(null);

  useEffect(() => {
    const nextIndex = (currentImage + 1) % heroImages.length;

    const img = new Image();
    img.src = heroImages[nextIndex];

    img.onload = () => {
      setNextImage(nextIndex);
    };

    const timer = setTimeout(() => {
      setCurrentImage(nextIndex);
      setNextImage(null);
    }, 5500);

    return () => clearTimeout(timer);
  }, [currentImage]);

  const imageNumber = String(currentImage + 1).padStart(2, "0");

  return (
    <section className="hero" id="home">

      {/* =========================================
          CINEMATIC BACKGROUND
      ========================================= */}
      <div className="hero__background">
        <img
          key={currentImage}
          src={heroImages[currentImage]}
          alt="Namo Restro dining experience"
        />
      </div>

      <div className="hero__shade" />

      {/* Decorative glow */}
      <div className="hero__glow hero__glow--one" />
      <div className="hero__glow hero__glow--two" />

      <div className="container hero__container">

        {/* =========================================
            LEFT SOCIAL RAIL
        ========================================= */}
        <div className="hero__social">

          <a href="#" aria-label="Instagram">
            IG
          </a>

          <a href="#" aria-label="Facebook">
            FB
          </a>

          <a href="#" aria-label="Google">
            G
          </a>

          <span className="hero__social-line" />

          <span className="hero__social-text">
            GOOD FOOD · GOOD PEOPLE · GREAT MOMENTS
          </span>

        </div>

        {/* =========================================
            MAIN CONTENT
        ========================================= */}
        <div className="hero__content">

          <div className="hero__eyebrow">
            <span />
            Jaipur · Ramnagariya
            <span />
          </div>

          <h1 className="hero__title">
            Exceptional
            <span>Food</span>
            <small>for memorable</small>
            moments.
          </h1>

          <p className="hero__description">
            At Namo Restro, we serve more than food —
            we create experiences, one plate at a time.
          </p>

          <div className="hero__buttons">

            <a
              href="#menu"
              className="hero__button hero__button--primary"
            >
              <span>Explore Our Menu</span>
              <ArrowRight size={17} />
            </a>

            <a
              href="#about"
              className="hero__button hero__button--secondary"
            >
              <span className="hero__play">
                <Play size={12} fill="currentColor" />
              </span>

              <span>Discover Our Story</span>
            </a>

          </div>

        </div>

        {/* =========================================
            RIGHT CINEMATIC VISUAL
        ========================================= */}
        <div className="hero__visual">

          <div className="hero__image-frame">

            <div className="hero__image">

              {/* Current image */}
              <img
                key={`hero-current-${currentImage}`}
                className="hero__slide hero__slide--active"
                src={heroImages[currentImage]}
                alt={`Namo Restro signature experience ${imageNumber}`}
              />

              {/* Preloaded next image */}
              {nextImage !== null && (
                <img
                  key={`hero-next-${nextImage}`}
                  className="hero__slide hero__slide--next"
                  src={heroImages[nextImage]}
                  alt=""
                  aria-hidden="true"
                />
              )}

            </div>

            {/* Image counter */}
            <div className="hero__image-number">
              <span>{imageNumber}</span>
              <i />
              <span>28</span>
            </div>

            {/* Progress line */}
            <div className="hero__progress">
              <span
                style={{
                  width: `${((currentImage + 1) / heroImages.length) * 100}%`,
                }}
              />
            </div>

          </div>

          {/* Floating handwritten message */}
          <div className="hero__note">
            <span>Food</span>
            <span>Friends</span>
            <span>Always a</span>
            <strong>Good Idea!</strong>
          </div>

        </div>

        {/* =========================================
            BOTTOM INFORMATION
        ========================================= */}
        <div className="hero__bottom">

          <div className="hero__info">

            <div className="hero__info-item">

              <div className="hero__info-icon">
                <MapPin size={18} />
              </div>

              <div>
                <span>Find Us</span>

                <strong>
                  Opposite SKIT College Road,
                  Ramnagariya
                </strong>
              </div>

            </div>

            <div className="hero__divider" />

            <div className="hero__info-item">

              <div className="hero__info-icon">
                <Clock3 size={18} />
              </div>

              <div>
                <span>We're Open</span>

                <strong>
                  24 Hours · Every Day
                </strong>
              </div>

            </div>

            <div className="hero__divider" />

            <div className="hero__info-item">

              <div className="hero__info-icon">
                <Utensils size={18} />
              </div>

              <div>
                <span>Come For</span>

                <strong>
                  Dine · Celebrate · Repeat
                </strong>
              </div>

            </div>

          </div>

          {/* Scroll */}
          <a href="#about" className="hero__scroll">

            <span>Scroll</span>

            <div className="hero__scroll-circle">
              <ArrowDown size={15} />
            </div>

          </a>

        </div>

      </div>
    </section>
  );
}

export default Hero;