import "./SectionTitle.scss";

function SectionTitle({
  eyebrow,
  title,
  highlight,
  description,
  align = "left",
  number,
  light = false,
}) {
  return (
    <div
      className={[
        "section-title",
        `section-title--${align}`,
        light ? "section-title--light" : "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div className="section-title__top">
        {number && (
          <span className="section-title__number">
            {number}
          </span>
        )}

        {eyebrow && (
          <div className="section-title__eyebrow">
            <span className="section-title__line" />
            <span>{eyebrow}</span>
            <span className="section-title__line" />
          </div>
        )}
      </div>

      {title && (
        <h2 className="section-title__heading">
          {title}

          {highlight && (
            <>
              {" "}
              <em>{highlight}</em>
            </>
          )}
        </h2>
      )}

      {description && (
        <p className="section-title__description">
          {description}
        </p>
      )}
    </div>
  );
}

export default SectionTitle;