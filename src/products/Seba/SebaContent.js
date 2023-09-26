import React, { useState } from 'react';
import axios from 'axios';
import './SebaContent.css';

const SebaContent = () => {
  const [inputValue, setInputValue] = useState('');
  const [toxicIngredients, setToxicIngredients] = useState([]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSearch = async (event) => {
    event.preventDefault();
    
    try {
      console.log('Sending request with product_name:', inputValue);
      const response = await axios.post('http://localhost:5000/sebas', { product_name: inputValue });
      console.log('Response:', response.data);
      setToxicIngredients(response.data.toxicIngredients);
    } catch (error) {
      console.error('Axios Error:', error);
    }
  };

  return (
    <div className="seba-content">
      <h1>Seba help you understand what chemicals the product contains</h1>
      <form onSubmit={handleSearch}>
        <div className="search-bar">
          <input
            type="text"
            name="product_name"
            placeholder="Search..."
            value={inputValue}
            onChange={handleInputChange}
          />
          <button type="submit">Search</button>
        </div>
      </form>
      {toxicIngredients.length > 0 && (
        <div className="toxic-ingredients">
          <h2>Toxic Ingredients Found:</h2>
          <ul>
            {toxicIngredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SebaContent;
