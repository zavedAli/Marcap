import React, { useState } from "react";
import SearchBar from "./SearchBar";
import StockDetails from "./Stockdetails"; // Assuming StockDetails shows fetched stock data

const StockSearchPage = () => {
  const [stockDetails, setStockDetails] = useState(null);

  const handleSearch = (stockData) => {
    setStockDetails(stockData); // Update state with fetched stock data
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      {stockDetails && <StockDetails data={stockDetails} />}
    </div>
  );
};

export default StockSearchPage;
