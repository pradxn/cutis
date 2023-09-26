import React, { useState } from "react";
import './SearchBar.css'; // Adjust the path to your CSS file

function SearchBar() {
  const [inputText, setInputText] = useState("");

  const handleInputChange = (e) => {
    // Convert input text to lower case
    const lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };

  return (
    <div className="search-bar">
      <h1>Enter product name that will be analyzed</h1>
      <form className="search-form">
        <input
          type="text"
          className="search-input"
          placeholder="What are you looking for?"
          value={inputText}
          onChange={handleInputChange}
        />
        <button type="submit" className="search-button">
          <i className="fa fa-search"></i>
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
