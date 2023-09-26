import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import "./SearchBar.css";

export const SearchBar = () => {
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [searchResult, setSearchResult] = useState("");

  const fetchData = async (value) => {
    setIsLoading(true);

    try {
      const response = await fetch("/sebas", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ productName: value }),
        timeout: 10000,
      });

      if (response.ok) {
        const data = await response.json();
        const message = data.message;
        const ingredients = data.ingredients;
        const toxicIngredients = data.toxicIngredients;
        const imageUrl = data.imageUrl; // Retrieve the image URL

        setIsLoading(false);
        setSearchResult({ message, ingredients, toxicIngredients, imageUrl });
      } else {
        if (response.status === 404) {
          setSearchResult(`${value} not found in the database. We will add it to our list soon.`);
        } else {
          console.error("Server returned an error:", response.statusText);
          setSearchResult("An error occurred while searching (client)");
        }
        setIsLoading(false);
      }
    } catch (error) {
      console.error("Error fetching or parsing data:", error);
      setIsLoading(false);
      setSearchResult("An error occurred while processing the response.");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetchData(input);
  };

  return (
    <div className="container">
  <h1 className="title">Enter your product name</h1>
  <div className="input-wrapper">
    <FaSearch id="search-icon" />
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Type to search..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit" className="send-button">
        Send
      </button>
    </form>
  </div>

  {isLoading && <h2>Loading results for {input}...</h2>}
  {searchResult && (
    <div className="result-container">
      <h2>{searchResult.message}</h2>
      <br/>
      <br/>
      {searchResult.imageUrl && (
        <img
          src={searchResult.imageUrl}
          alt={`${input} product logo`}
          className="product-image"
        />
      )}

      {searchResult.toxicIngredients && (
        <div className="toxic-ingredients-container">
          <h3>Product has following ingredients which might be toxic 🫨</h3>
          <br />
          <ol>
            {searchResult.toxicIngredients.map((toxicIngredient, index) => (
              <li key={index}>{toxicIngredient}</li>
            ))}
          </ol>
        </div>
      )}

      {searchResult.ingredients && (
        <div className="ingredients-container">
          <div className="ing-head">
            <h3>Ingredients 🤔</h3>
          </div>
          <table>
            <tbody>
              {searchResult.ingredients.map((ingredient, index) => (
                <tr key={index}>
                  <td>{ingredient}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )}
</div>

  );
};
