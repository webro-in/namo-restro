import { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Quote,
  Star,
} from "lucide-react";

import { reviewsData } from "../data/reviewsData";
import "./Reviews.scss";

function Reviews() {
  const [active, setActive] = useState(0);

  const currentReview = reviewsData[active];

  const nextReview = () => {
    setActive((prev) => (prev + 1) % reviewsData.length);
  };

  const previousReview = () => {
    setActive(
      (prev) =>
        (prev - 1 + reviewsData.length) % reviewsData.length
    );
  };

  return (
    <section className="reviews section" id="reviews">
      {/* Ambient */}
      <div className="reviews__ambient reviews__ambient--one" />
      <div className="reviews__ambient reviews__ambient--two" />

      <div className="container">

        {/* =========================
            HEADER
        ========================== */}
        <header className="reviews__header">
          <div className="reviews__eyebrow">
            <span />
            Guest Love
            <span />
          </div>

          <div className="reviews__heading">
            <div>
              <span className="reviews__mini">
                The word around the table
              </span>

              <h2>
                Good food.
                <br />
                <em>Good words.</em>
              </h2>
            </div>

            <div className="reviews__intro">
              <span />

              <p>
                The best part of a restaurant is the people who
                return, recommend it and make the place feel alive.
              </p>
            </div>
          </div>
        </header>

        {/* =========================
            MAIN REVIEW
        ========================== */}
        <div className="reviews__main">

          {/* VISUAL SIDE */}
          <div className="reviews__visual">
            <div className="reviews__visual-inner">

              <div className="reviews__visual-frame" />

              <div className="reviews__visual-overlay" />

              <div className="reviews__visual-copy">
                <span>WHAT MATTERS MOST</span>

                <h3>
                  Moments
                  <br />
                  worth
                  <em> sharing.</em>
                </h3>
              </div>

              <div className="reviews__big-quote">
                <Quote size={38} />
              </div>

              <div className="reviews__circle">
                <span>
                  GOOD FOOD · GOOD PEOPLE · NAMO RESTRO ·
                </span>
              </div>

              <div className="reviews__visual-number">
                03
              </div>

              <div className="reviews__visual-location">
                JAIPUR
                <span>RAMNAGARIYA</span>
              </div>
            </div>
          </div>

          {/* REVIEW CONTENT */}
          <div className="reviews__content">

            {/* TOP */}
            <div className="reviews__top">
              <div className="reviews__rating">
                <div className="reviews__stars">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      size={15}
                      fill="currentColor"
                    />
                  ))}
                </div>

                <div className="reviews__rating-copy">
                  <strong>Guest Favourite</strong>
                  <span>
                    Food · Ambience · Moments
                  </span>
                </div>
              </div>

              <span className="reviews__index">
                {String(active + 1).padStart(2, "0")}
                <i />
                {String(reviewsData.length).padStart(2, "0")}
              </span>
            </div>

            {/* REVIEW QUOTE */}
            <div className="reviews__quote">
              <span className="reviews__quote-mark">
                “
              </span>

              <p key={currentReview.id}>
                {currentReview.quote}
              </p>
            </div>

            {/* AUTHOR */}
            <div className="reviews__author">
              <div className="reviews__avatar">
                {currentReview.name.charAt(0)}
              </div>

              <div className="reviews__author-info">
                <strong>{currentReview.name}</strong>

                <span>
                  {currentReview.type}
                </span>
              </div>
            </div>

            {/* BOTTOM CONTROLS */}
            <div className="reviews__bottom">

              <div className="reviews__progress">
                <span
                  style={{
                    width: `${
                      ((active + 1) / reviewsData.length) * 100
                    }%`,
                  }}
                />
              </div>

              <div className="reviews__controls">
                <div className="reviews__counter">
                  <strong>
                    {String(active + 1).padStart(2, "0")}
                  </strong>

                  <span>/</span>

                  <small>
                    {String(reviewsData.length).padStart(2, "0")}
                  </small>
                </div>

                <div className="reviews__arrows">
                  <button
                    type="button"
                    onClick={previousReview}
                    aria-label="Previous review"
                  >
                    <ArrowLeft size={17} />
                  </button>

                  <button
                    type="button"
                    onClick={nextReview}
                    aria-label="Next review"
                  >
                    <ArrowRight size={17} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* =========================
            TRUST STRIP
        ========================== */}
        <div className="reviews__trust">

          <div className="reviews__trust-item">
            <strong>24×7</strong>
            <span>Open for you</span>
          </div>

          <div className="reviews__trust-line" />

          <div className="reviews__trust-item">
            <strong>Veg</strong>
            <span>Food menu</span>
          </div>

          <div className="reviews__trust-line" />

          <div className="reviews__trust-item">
            <strong>Jaipur</strong>
            <span>Ramnagariya</span>
          </div>

          <div className="reviews__trust-line" />

          <a
            href="#reservation"
            className="reviews__trust-link"
          >
            <span>Come experience it</span>
            <ArrowUpRight size={16} />
          </a>
        </div>

      </div>
    </section>
  );
}

export default Reviews;