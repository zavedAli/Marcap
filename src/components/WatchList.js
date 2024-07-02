import React, { useState } from "react";
import "./compCss/WatchList.css";

const Watchlist = () => {
  const [watchlist, setWatchlist] = useState([]);

  const addToWatchlist = (symbol) => {
    if (!watchlist.includes(symbol)) {
      setWatchlist([...watchlist, symbol.toUpperCase()]);
    }
  };

  return (
    <div className="watchlist-container">
      <h2 className="watchlist-title">Watchlist</h2>
      <div className="input-container">
        <input
          type="text"
          placeholder="Add stock symbol"
          // onKeyDown={(e) => {
          //   if (e.key === "Enter") addToWatchlist(e.target.value);
          // }}
        />
        <button className="add-button" onClick={() => addToWatchlist()}>
          Add
        </button>
      </div>
      <ul className="watchlist">
        {watchlist.map((symbol, index) => (
          <li className="watchlist-item" key={index}>
            {symbol}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Watchlist;
