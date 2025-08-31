import React from "react";
import "./SearchBar.scss";
const SearchBar = () => {
  return (
    <>
      <div className="searchbar">
        <div className="searchbar__location">
          <div className="location">
            <span className="location--icon">
              <i class="fa-solid fa-location-dot"></i>
            </span>
          </div>
          <input type="text" className="location--input" />
        </div>
        <div className="searchbar__search">
          <div className="search-text">
            <input type="text" className="search" />
          </div>
          <div className="searchbar__search-btn">
            <span className="search-icon">
              <i class="fa-solid fa-magnifying-glass"></i>
            </span>
            <button className="search-btn">search</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchBar;
