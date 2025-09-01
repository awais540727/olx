import React, { useState } from "react";
import styles from "./SearchBar1.module.scss";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { FaMapMarkerAlt } from "react-icons/fa";

const SearchBar1 = () => {
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
    <div className={styles.searchbar}>
      {/* Location Selector */}
      <div className={styles.locationSelector}>
        <div className={styles.inputWrapper} onClick={() => setIsOpen(!isOpen)}>
          <FaMapMarkerAlt className={styles.inputWrapper__icon} />
          <input
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setIsOpen(true);
            }}
            placeholder="Location"
            className={styles.inputWrapper__input}
          />
          {isOpen ? (
            <FiChevronUp className={styles.inputWrapper__arrow} />
          ) : (
            <FiChevronDown className={styles.inputWrapper__arrow} />
          )}
        </div>

        {isOpen && (
          <div className={styles.locationSelector__dropdown}>
            <div className={styles.dropdown__header}>
              <span className={styles.dropdown__currentLocation}>
                <FaMapMarkerAlt className={styles.dropdown__icon} />
                Use Current Location
              </span>
              <span className={styles.dropdown__seeAll}>
                See all in Pakistan
              </span>
            </div>
            <div className={styles.dropdown__section}>
              <p className={styles.dropdown__sectionTitle}>Popular</p>
              {filteredLocations.length > 0 ? (
                <ul className={styles.dropdown__list}>
                  {filteredLocations.map((loc, idx) => (
                    <li
                      key={idx}
                      className={styles.dropdown__listItem}
                      onClick={() => handleSelect(loc)}
                    >
                      {loc}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className={styles.dropdown__noResults}>No results found</p>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Search Field */}
      <div className={styles.search}>
        <div className={styles.search__text}>
          <input
            type="text"
            className={styles.search__input}
            placeholder="Find Cars, Mobile Phones and more..."
          />
        </div>
        <div className={styles.search__btnWrapper}>
          <span className={styles.search__icon}>
            <i className="fa-solid fa-magnifying-glass"></i>
          </span>
          <button className={styles.search__btn}>search</button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar1;
