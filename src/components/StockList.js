import React, { useEffect, useState } from "react";
import { fetchStockData } from "../services/api";
import "./compCss/StockList.css"; // Import the CSS file

const StockList = () => {
  const [stocks, setStocks] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const symbols = ["AAPL", "GOOGL", "SBI"]; // Example symbols
        const data = await Promise.all(
          symbols.map((symbol) => fetchStockData(symbol))
        );
        console.log("Fetched data:", data); // Log the fetched data

        // Map Polygon.io response to match the expected structure
        setStocks(data);
      } catch (error) {
        setError("");
      }
    };
    fetchData();
  }, []);

  return (
    <div className="stock-list">
      {error && <div>{error}</div>}
      {stocks.map((stock, index) => {
        // Safety checks for stock data structure

        if (!stock) {
          console.log("Data not available for:", stock); // Log the problematic stock data
          return <div key={index}>Data not available</div>;
        }

        return (
          <>
            <div key={index} className="stock-card">
              <h2>{stock.T}</h2>
              <p>Price: {stock.h}</p>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default StockList;
