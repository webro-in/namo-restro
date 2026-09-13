import { ArrowUpRight, Sparkles } from "lucide-react";
import "./FoodCard.scss";

function FoodCard({
  title,
  description,
  price,
  image,
  category,
  featured = false,
  href = "#menu",
}) {
  return (
    <article
      className={`food-card ${featured ? "food-card--featured" : ""}`}
    >
      {/* =========================
          IMAGE
      ========================== */}
      <div className="food-card__visual">
        {image ? (
          <img
            src={image}
            alt={title}
            className="food-card__image"
            loading="lazy"
          />
        ) : (
          <div className="food-card__placeholder">
            <span>NAMO</span>
            <small>RESTRO</small>
          </div>
        )}

        <div className="food-card__overlay" />

        {/* Category */}
        {category && (
          <span className="food-card__category">
            {category}
          </span>
        )}

        {/* Featured Badge */}
        {featured && (
          <div className="food-card__featured">
            <Sparkles size={13} />
            <span>Chef's Pick</span>
          </div>
        )}

        {/* Image Number */}
        <span className="food-card__number">01</span>
      </div>

      {/* =========================
          CONTENT
      ========================== */}
      <div className="food-card__content">
        <div className="food-card__heading">
          <h3>{title}</h3>

          {price && (
            <span className="food-card__price">
              ₹{price}
            </span>
          )}
        </div>

        {description && (
          <p className="food-card__description">
            {description}
          </p>
        )}

        <a
          href={href}
          className="food-card__link"
          aria-label={`Explore ${title}`}
        >
          <span>Explore Dish</span>

          <span className="food-card__link-icon">
            <ArrowUpRight size={15} />
          </span>
        </a>
      </div>
    </article>
  );
}

export default FoodCard;