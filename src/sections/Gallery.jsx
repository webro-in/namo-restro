import "./Gallery.scss";

const galleryImages = [
  1, 2, 3, 4, 5, 6, 7,
  8, 9, 10, 11, 12, 13, 14, 15,
  17, 18, 19, 20, 21, 22, 23, 24,
  25, 26, 27, 28,
].map((number) => ({
  src: `/images/gallery/${number}.webp`,
  number,
}));

const firstRowImages = galleryImages.slice(0, 14);
const secondRowImages = galleryImages.slice(14);

const firstRow = [...firstRowImages, ...firstRowImages];
const secondRow = [...secondRowImages, ...secondRowImages];

const Gallery = () => {
  return (
    <section className="gallery" id="gallery">

      <div
        className="gallery__ambient gallery__ambient--one"
        aria-hidden="true"
      />

      <div
        className="gallery__ambient gallery__ambient--two"
        aria-hidden="true"
      />

      <div className="container">

        {/* HEADER */}

        <header className="gallery__header">

          <div className="gallery__eyebrow">
            <span />
            OUR GALLERY
            <span />
          </div>

          <div className="gallery__heading">

            <div className="gallery__heading-main">

              <span className="gallery__mini">
                FOOD · PEOPLE · MOMENTS · EXPERIENCES
              </span>

              <h2>
                Moments at
                <em> Namo.</em>
              </h2>

            </div>

            <div className="gallery__intro">

              <p>
                Step inside Namo Restro and discover the moments
                that make every visit memorable. Great food, warm
                ambience and experiences worth coming back for.
              </p>

              <div className="gallery__location">
                <span className="gallery__location-dot" />
                NAMO RESTRO · JAIPUR
              </div>

            </div>

          </div>

        </header>


        {/* ROW 1 */}

        <div className="gallery__slider">

          <div className="gallery__track gallery__track--left">

            {firstRow.map((image, index) => (
              <div
                className="gallery__item"
                key={`first-${image.number}-${index}`}
              >
                <img
                  src={image.src}
                  alt={`Namo Restro gallery ${image.number}`}
                  width="420"
                  height="275"
                  loading={index < 2 ? "eager" : "lazy"}
                  fetchPriority={index < 2 ? "high" : "auto"}
                  decoding="async"
                />

                <div className="gallery__item-overlay" />
              </div>
            ))}

          </div>

        </div>


        {/* ROW 2 */}

        <div className="gallery__slider gallery__slider--second">

          <div className="gallery__track gallery__track--right">

            {secondRow.map((image, index) => (
              <div
                className="gallery__item"
                key={`second-${image.number}-${index}`}
              >
                <img
                  src={image.src}
                  alt={`Namo Restro gallery ${image.number}`}
                  width="420"
                  height="275"
                  loading={index < 2 ? "eager" : "lazy"}
                  fetchPriority={index < 2 ? "high" : "auto"}
                  decoding="async"
                />

                <div className="gallery__item-overlay" />
              </div>
            ))}

          </div>

        </div>


        {/* BOTTOM */}

        <div className="gallery__bottom">

          <div
            className="gallery__bottom-line"
            aria-hidden="true"
          />

          <p>
            <span>Good food.</span>
            Beautiful moments.
          </p>

          <a href="#reservation">
            <span>Reserve a Table</span>

            <svg
              viewBox="0 0 24 24"
              width="17"
              height="17"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
              aria-hidden="true"
            >
              <path d="M5 12h13" />
              <path d="m13 6 6 6-6 6" />
            </svg>

          </a>

        </div>

      </div>
    </section>
  );
};

export default Gallery;