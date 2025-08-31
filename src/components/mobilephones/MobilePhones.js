import React from "react";
import { Link } from "react-router-dom";
import "./MobilePhones.scss";
import { olxCards } from "./olxCard";
const MobilePhones = () => {
  return (
    <>
      <div className="mobile-section">
        <div className="mobile">
          <h2 className="title">Mobile Phones</h2>
          <Link className="link" to="/category/1">
            View more
          </Link>
        </div>
        <div className="container">
          {olxCards.map((item, index) => {
            return (
              <div className="card" key={index}>
                <div className="card__image">
                  <img src={item.image} alt={item.title} className="image" />
                </div>
                <div className="wraper">
                  <div className="card__price">
                    <h2 className="price">{item.price}</h2>
                    <span className="icon">
                      <Link to="./">
                        <i className="fa-regular fa-heart"></i>
                      </Link>
                    </span>
                  </div>
                  <div className="card__title">
                    <h3 className="title">{item.title}</h3>
                  </div>
                  <div className="card__location">
                    <span className="location">{item.location}</span>
                  </div>
                  <div className="card__postdate">
                    <span className="postdate">{item.postedDate}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default MobilePhones;
