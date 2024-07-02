import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const POLYGON_API_KEY = "EAyF0vEUL2TWdQYtVdkyv23ttN952XZk";
const POLYGON_BASE_URL = "https://api.polygon.io";
const NEWS_API_KEY = "8d1b8dfbf26c4a1f9d374e034e5128b2";
const NEWS_API_BASE_URL = "https://newsapi.org/v2/everything";

export const fetchStockData = async (symbol) => {
  try {
    const response = await axios.get(
      `${POLYGON_BASE_URL}/v2/aggs/ticker/${symbol}/prev`,
      {
        params: {
          adjusted: true,
          apiKey: POLYGON_API_KEY,
        },
      }
    );
    return response.data.results[0];
  } catch (error) {
    console.error("Error fetching stock data", error);
    throw error;
  }
};

export const fetchStockNews = async (symbol) => {
  try {
    const response = await axios.get(`${NEWS_API_BASE_URL}`, {
      params: {
        q: symbol,
        apiKey: NEWS_API_KEY,
      },
    });
    return response.data.articles;
  } catch (error) {
    console.error("Error fetching stock news", error);
    throw error;
  }
};
