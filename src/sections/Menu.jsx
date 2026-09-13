import { useState } from "react";
import { ChevronRight, Coffee, Utensils } from "lucide-react";

import { menuData } from "../data/menuData";
import "./Menu.scss";

function Menu() {
  const [type, setType] = useState("food");
  const [activeCategory, setActiveCategory] = useState(null);

  const categories = menuData[type];

  const visibleCategories = activeCategory
    ? categories.filter((category) => category.id === activeCategory)
    : categories;

  const handleTypeChange = (nextType) => {
    setType(nextType);
    setActiveCategory(null);
  };

  return (
    <section className="menu section" id="menu">
      <div className="menu__top-glow" />
      <div className="menu__grain" />

      <div className="container">
        {/* HEADER */}
        <div className="menu__header">
          <div className="menu__eyebrow">
            <span />
            The Namo Menu
            <span />
          </div>

          <div className="menu__heading">
            <div>
              <span className="menu__mini">
                Crafted for every craving
              </span>

              <h2>
                Something for
                <em> everyone.</em>
              </h2>
            </div>

            <p>
              From comforting Indian favourites to refreshing beverages
              and indulgent desserts — discover flavours made for
              memorable moments at Namo.
            </p>
          </div>
        </div>

        {/* MENU TYPE */}
        <div className="menu__controls">
          <div className="menu__switch">
            <button
              type="button"
              className={type === "food" ? "is-active" : ""}
              onClick={() => handleTypeChange("food")}
            >
              <Utensils size={16} />
              <span>Food Menu</span>
            </button>

            <button
              type="button"
              className={type === "beverages" ? "is-active" : ""}
              onClick={() => handleTypeChange("beverages")}
            >
              <Coffee size={16} />
              <span>Beverages</span>
            </button>
          </div>

          <div className="menu__controls-note">
            <span className="menu__controls-dot" />
            Freshly prepared at Namo
          </div>
        </div>

        {/* CATEGORY NAVIGATION */}
        <div className="menu__categories">
          {categories.map((category) => (
            <button
              type="button"
              key={category.id}
              className={
                activeCategory === category.id ? "is-active" : ""
              }
              onClick={() =>
                setActiveCategory(
                  activeCategory === category.id
                    ? null
                    : category.id
                )
              }
            >
              <span>{category.title}</span>
              <small>
                {String(category.items.length).padStart(2, "0")}
              </small>
            </button>
          ))}
        </div>

        {/* MENU CONTENT */}
        <div className="menu__content">
          <aside className="menu__side">
            <span className="menu__side-number">
              {type === "food" ? "01" : "02"}
            </span>

            <span className="menu__side-line" />

            <span className="menu__side-text">
              {type === "food" ? "FOOD" : "DRINKS"}
            </span>
          </aside>

          <div className="menu__list">
            {visibleCategories.map((category, index) => (
              <article
                className="menu-group"
                key={category.id}
              >
                <div className="menu-group__header">
                  <div className="menu-group__title">
                    <span>
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <div>
                      <small>OUR SELECTION</small>
                      <h3>{category.title}</h3>
                    </div>
                  </div>

                  <div className="menu-group__count">
                    <span>{String(category.items.length).padStart(2, "0")}</span>
                    <small>Items</small>
                  </div>
                </div>

                <div className="menu-group__items">
                  {category.items.map(([name, price], itemIndex) => (
                    <div
                      className="menu-item"
                      key={`${category.id}-${name}`}
                    >
                      <span className="menu-item__number">
                        {String(itemIndex + 1).padStart(2, "0")}
                      </span>

                      <div className="menu-item__name">
                        <span className="menu-item__dot" />
                        <span>{name}</span>
                      </div>

                      <div className="menu-item__leader" />

                      <strong>
                        {typeof price === "number"
                          ? `₹${price}`
                          : price === "On MRP"
                            ? price
                            : `₹${price}`}
                      </strong>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* BOTTOM */}
        <div className="menu__bottom">
          <div className="menu__bottom-mantra">
            <span>GOOD FOOD</span>
            <span className="menu__bottom-dot">·</span>
            <span>GOOD PEOPLE</span>
            <span className="menu__bottom-dot">·</span>
            <span>GREAT MOMENTS</span>
          </div>

          <a href="#reservation">
            <span>Reserve your table</span>
            <ChevronRight size={17} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Menu;