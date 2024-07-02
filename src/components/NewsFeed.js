import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { fetchStockNews } from "../services/api";
import { FaArrowLeft, FaArrowRight, FaExternalLinkAlt } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./compCss/NewsFeed.css"; // Import custom CSS for additional styling

const NewsFeed = ({ symbol }) => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchStockNews(symbol);
      setNews(data);
    };
    fetchData();
  }, [symbol]);

  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <FaArrowRight />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        <FaArrowLeft />
      </div>
    );
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="news-feed">
      <h2>News for {symbol}</h2>
      <Slider {...settings}>
        {news.map((article, index) => (
          <div key={index} className="news-slide">
            <h3>{article.title}</h3>
            <p>{article.description}</p>
            <a
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="read-more"
            >
              Read more <FaExternalLinkAlt />
            </a>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default NewsFeed;
