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
        // If the response status is OK, parse the JSON data
        const data = await response.json();
        const message = data.message;
        setIsLoading(false);
        setSearchResult(message);
      } else {
        // Handle server-side errors by checking the response status
        if (response.status === 404) {
          setSearchResult(`${value} not found in the database. We will add it to our list soon.`);
        } else {
          // Handle other server errors
          console.error("Server returned an error:", response.statusText);
          setSearchResult("An error occurred while searching. (client)");
        }
        setIsLoading(false);
      }
    } catch (error) {
      // Handle network errors or JSON parsing errors
      console.error("Error fetching or parsing data:", error);
      setIsLoading(false);
      setSearchResult("An error occurred while processing the response.");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetchData(input); // Wait for fetchData to complete
  };

  return (
    <>
      <div className="header">
        <h1>Enter your product name</h1>
      </div>

      <div className="input-wrapper">
        <FaSearch id="search-icon" />

        <form onSubmit={handleSubmit}>
          <input
            placeholder="Type to search..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button type="submit">Send</button>
        </form>
      </div>

      {isLoading && <h2><br />Loading results for {input}...<br /></h2>}
      {searchResult && <h2><br />{searchResult}<br /></h2>}
    </>
  );
};

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


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
        // If the response status is OK, parse the JSON data
        const data = await response.json();
        const message = data.message;
        const ingredients = data.ingredients; // Extract ingredients from the response
        setIsLoading(false);
        setSearchResult({ message, ingredients }); // Store both message and ingredients in searchResult
      } else {
        // Handle server-side errors by checking the response status
        if (response.status === 404) {
          setSearchResult(`${value} not found in the database. We will add it to our list soon.`);
        } else {
          // Handle other server errors
          console.error("Server returned an error:", response.statusText);
          setSearchResult("An error occurred while searching (client)");
        }
        setIsLoading(false);
      }
    } catch (error) {
      // Handle network errors or JSON parsing errors
      console.error("Error fetching or parsing data:", error);
      setIsLoading(false);
      setSearchResult("An error occurred while processing the response.");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetchData(input); // Wait for fetchData to complete
  };

  return (
    <>
      <div className="header">
        <h1>Enter your product name</h1>
      </div>

      <div className="input-wrapper">
        <FaSearch id="search-icon" />

        <form onSubmit={handleSubmit}>
          <input
            placeholder="Type to search..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button type="submit">Send</button>
        </form>
      </div>

      {isLoading && <h2><br />Loading results for {input}...<br /></h2>}
      {searchResult && (
        <div>
          <h2><br />{searchResult.message}<br /></h2>
          {searchResult.ingredients && (
            <div>
              <h3><br />Ingredients:<br /></h3>
              <table>
                <tbody>
                  {searchResult.ingredients.map((ingredient, index) => (
                    index % 4 === 0 ? (
                      <tr key={index}>
                        <td>{ingredient}</td>
                      </tr>
                    ) : (
                      <td key={index}>{ingredient}</td>
                    )
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      )}
    </>
  );
};

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

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
        setIsLoading(false);
        setSearchResult({ message, ingredients });
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
    <>
      <div className="header">
        <h1>Enter your product name</h1>
      </div>

      <div className="input-wrapper">
        <FaSearch id="search-icon" />

        <form onSubmit={handleSubmit}>
          <input
            placeholder="Type to search..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button type="submit">Send</button>
        </form>
      </div>

      {isLoading && <h2><br />Loading results for {input}...<br /></h2>}
      {searchResult && (
        <div>
          <h2><br />{searchResult.message}<br /></h2>
          {searchResult.ingredients && (
            <div>
              <h3><br />Ingredients:<br /></h3>
              <table>
                <tbody>
                  {searchResult.ingredients.map((ingredient, index) => (
                    index % 4 === 0 ? (
                      <tr key={index}>
                        <td>{ingredient}</td>
                      </tr>
                    ) : (
                      <td key={index}>{ingredient}</td>
                    )
                  ))}
                </tbody>
              </table>
            </div>
          )}
          
          {searchResult.toxicIngredients && (
          <div>
            <h3><br />Toxic Ingredients:<br /></h3>
            <ul>
              {searchResult.toxicIngredients.map((toxicIngredient, index) => (
              <li key={index}>{toxicIngredient}</li>
              ))}
            </ul>
          </div>
          )}
        </div>
      )}
    </>
  );
};
