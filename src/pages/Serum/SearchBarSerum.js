import { React, useState } from "react";
import List from "./SerumList";
import './SearchBarSerum.css';

function SearchBarSerum() {
    const [inputText, setInputText] = useState("");
    let inputHandler = (e) => {
      //convert input text to lower case
      var lowerCase = e.target.value.toLowerCase();
      setInputText(lowerCase);
    };

  return (
    <div className="main">
      <h1>Enter product name that will be analyzed</h1>
      <div className="search">
      <input
            type="text"
            name="product_name"
            placeholder="Search..."
            id="outlined-basic"
            onChange={inputHandler}
            variant="outlined"
            fullWidth
          />
      </div>
      <List input={inputText} />
    </div>
  )
}

export default SearchBarSerum
