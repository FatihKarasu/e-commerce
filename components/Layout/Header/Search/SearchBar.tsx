import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
export default function SearchBar() {
  return (
    <div className="search-container">
      <input type="text" name="" id="" placeholder="Search..."/>
      <div className="search-icon">
      <FontAwesomeIcon icon={faSearch} />
      </div>
    </div>
  );
}
