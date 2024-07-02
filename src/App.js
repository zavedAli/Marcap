// src/App.js

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./pages/Home";
import News from "./pages/News";
import MarketCap from "./pages/markCap";
import AboutUs from "./pages/aboutUs";
import "./App.css"; // Optional: Import global styles
import SearchBar from "./components/SearchBar";
import StockList from "./components/StockList";
import NewsFeed from "./components/NewsFeed";
import Watchlist from "./components/WatchList";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route exact path="/" component={Home} />
            <Route path="/news" component={News} />
            <Route path="/market-cap" component={MarketCap} />
            <Route path="/about-us" component={AboutUs} />
          </Routes>

          <SearchBar />
          <StockList />
          <Watchlist />
          <NewsFeed symbol="AMZN" />
        </div>
      </div>
    </Router>
  );
}

export default App;
