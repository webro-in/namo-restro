import { ArrowUpRight, Quote, Star } from "lucide-react";
import "./ReviewCard.scss";

function ReviewCard({
  quote,
  name = "Namo Guest",
  type = "Restaurant Guest",
  rating = 5,
  featured = false,
}) {
  return (
    <article
      className={`review-card ${
        featured ? "review-card--featured" : ""
      }`}
    >
      {/* Top */}
      <div className="review-card__top">
        <div className="review-card__quote">
          <Quote size={20} />
        </div>

        <div className="review-card__stars" aria-label={`${rating} out of 5 stars`}>
          {Array.from({ length: 5 }).map((_, index) => (
            <Star
              key={index}
              size={13}
              fill={index < rating ? "currentColor" : "none"}
            />
          ))}
        </div>
      </div>

      {/* Review */}
      <blockquote className="review-card__text">
        “{quote}”
      </blockquote>

      {/* Bottom */}
      <div className="review-card__bottom">
        <div className="review-card__person">
          <div className="review-card__avatar">
            {name.charAt(0).toUpperCase()}
          </div>

          <div>
            <strong>{name}</strong>
            <span>{type}</span>
          </div>
        </div>

        <span className="review-card__arrow">
          <ArrowUpRight size={15} />
        </span>
      </div>

      {/* Featured accent */}
      {featured && (
        <div className="review-card__badge">
          <span>GUEST LOVE</span>
        </div>
      )}
    </article>
  );
}

export default ReviewCard;