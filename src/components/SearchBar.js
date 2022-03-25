import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import "./stylesheets/stylesheet.css";

const SearchBar = () => {
  const searchIcon = <FontAwesomeIcon icon={faMagnifyingGlass} />;
  return (
    <div className="searchBarInputContainer">
      <input className="searchBarInput"></input>
      <button>{searchIcon}</button>
    </div>
  );
};
export default SearchBar;
