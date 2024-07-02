import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartLine } from "@fortawesome/free-solid-svg-icons";
import "./compCss/StockDetails.css"; // Import your custom CSS file for styling

const StockDetails = ({ data }) => {
  if (!data) {
    return null; // Return null if data is not yet available
  }

  return (
    <div className="stock-details">
      <div className="symbol">{data.T}</div>
      <div className="parameters">
        <div className="parameter">
          <FontAwesomeIcon icon={faChartLine} className="icon" />
          <span className="label">Open:</span> {data.o}
        </div>
        <div className="parameter">
          <FontAwesomeIcon icon={faChartLine} className="icon" />
          <span className="label">High:</span> {data.h}
        </div>
        <div className="parameter">
          <FontAwesomeIcon icon={faChartLine} className="icon" />
          <span className="label">Low:</span> {data.l}
        </div>
        <div className="parameter">
          <FontAwesomeIcon icon={faChartLine} className="icon" />
          <span className="label">Close:</span> {data.c}
        </div>
      </div>
    </div>
  );
};

export default StockDetails;
