import React, { useState } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FiChevronDown, FiChevronUp } from "react-icons/fi"; // import arrows
import "./LocationSelector.scss";

const LocationSelector = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("Pakistan");
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
    <div className="location-selector">
      {/* Input field */}
      <div className="location-input" onClick={() => setIsOpen(!isOpen)}>
        <FaMapMarkerAlt className="icon" />
        <input
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setIsOpen(true);
          }}
          placeholder="Search location..."
        />
        {isOpen ? (
          <FiChevronUp className="arrow" />
        ) : (
          <FiChevronDown className="arrow" />
        )}
      </div>

      {/* Dropdown */}
      {/* {isOpen && (
        <div className="location-dropdown">
          <div className="dropdown-header">
            <span className="current-location">📍 Use Current Location</span>
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
      )} */}
    </div>
  );
};

export default LocationSelector;
