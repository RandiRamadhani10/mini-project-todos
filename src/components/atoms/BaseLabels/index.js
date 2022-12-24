import React from "react";
import "./styles.css";
import "../../../assets/styles/styles.css";
const BaseLabels = ({ title }) => {
  return (
    <div className="containerLabel" style={{ backgroundColor: "#F7FEFF", borderColor: "#01959F" }}>
      <span className="textLabel" style={{ color: "#01959F", fontSize: "12px" }}>
        {title}
      </span>
    </div>
  );
};

export default BaseLabels;
