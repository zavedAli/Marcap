import React from "react";
import { Line } from "react-chartjs-2";

const StockChart = ({ stockData }) => {
  const data = {
    labels: Object.keys(stockData["Time Series (5min)"]).reverse(),
    datasets: [
      {
        label: "Price",
        data: Object.values(stockData["Time Series (5min)"])
          .map((entry) => entry["1. open"])
          .reverse(),
        fill: false,
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "rgba(75,192,192,1)",
      },
    ],
  };

  return <Line data={data} />;
};

export default StockChart;
