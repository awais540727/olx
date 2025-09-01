import React, { useState } from "react";
import "./SearchBar.scss";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { FaMapMarkerAlt } from "react-icons/fa";
const SearchBar = () => {
  const [query, setQuery] = useState("Pakistan");
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("Pakistan");

  const locations = [
    "Lahore, Punjab",
    "Karachi, Sindh",
    "Islamabad, Islamabad Capital Territory",
    "Rawalpindi, Punjab",
    "Faisalabad, Punjab",
  ];

  const filteredLocations = locations.filter((loc) =>
    loc.toLowerCase().includes(query.toLowerCase())
  );

  const handleSelect = (loc) => {
    setSelected(loc);
    setQuery(loc);
    setIsOpen(false);
  };

  return (
    <>
      {/* <LocationSelector /> */}
      <div className="searchbar">
        <div className="searchbar__location-selector">
          <div
            className="searchbar__location"
            onClick={() => setIsOpen(!isOpen)}
          >
            <FaMapMarkerAlt className="icon" />
            <input
              type="text"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setIsOpen(true);
              }}
              placeholder="Location"
            />
            {isOpen ? (
              <FiChevronUp className="arrow" />
            ) : (
              <FiChevronDown className="arrow" />
            )}
          </div>
          {isOpen && (
            <div className="location-dropdown">
              <div className="dropdown-header">
                <span className="current-location">
                  <FaMapMarkerAlt className="icon" />
                  Use Current Location
                </span>
                <span className="see-all">See all in Pakistan</span>
              </div>
              <div className="dropdown-section">
                <p className="section-title">Popular</p>
                {filteredLocations.length > 0 ? (
                  <ul>
                    {filteredLocations.map((loc, idx) => (
                      <li key={idx} onClick={() => handleSelect(loc)}>
                        {loc}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="no-results">No results found</p>
                )}
              </div>
            </div>
          )}
        </div>
        <div className="searchbar__search">
          <div className="search-text">
            <input
              type="text"
              className="search"
              placeholder="Find Cars, Mobile Phones and more..."
            />
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
