import React, { useState } from "react";
import "./compCss/SearchBar.css"; // Import the CSS file
import { fetchStockData } from "../services/api"; // Import fetchStockData function

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = async () => {
    if (query) {
      try {
        const stockData = await fetchStockData(query); // Call fetchStockData with the query
        onSearch(stockData); // Pass the fetched stock data to the parent component
      } catch (error) {
        console.error("Error fetching stock data:", error);
        // Handle error as needed
      }
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
        placeholder="Search for a stock symbol..."
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
