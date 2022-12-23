import React from "react";
import "./styles.css";
import "../../../assets/styles/styles.css";
import { IC_Checklist } from "../../../assets/icons";
const BaseProgress = ({ value }) => {
  return (
    <div className="container">
      <progress className={value == 100 ? "progressFinish" : "onProgress"} id="file" value={value} max="100"></progress>
      {value == 100 ? <IC_Checklist /> : <span className="text">{value}%</span>}
    </div>
  );
};

export default BaseProgress;
