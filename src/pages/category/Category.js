import React from "react";
import "./Category.scss";
import { categoriesDetails } from "../../data/categoriesDetails.js";
const Category = () => {
  function trimName(name, maxLength = 18) {
    return name.length > maxLength ? name.slice(0, maxLength) + "..." : name;
  }
  return (
    <>
      <div className="category">
        {categoriesDetails.map((category) => (
          <div key={category.id} className="category__category-item">
            <div className="category__img-wraper">
              <img
                src={category.image}
                alt={category.name}
                className="imag-wraper--img"
              />
            </div>
            <div className="category__text">
              <span
                className="category__text--name"
                // shortName={trimName(category.name)}
              >
                {trimName(category.name, 20)}
              </span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Category;
