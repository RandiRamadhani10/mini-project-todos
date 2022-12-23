import React from "react";
import "./styles.css";
import "../../../assets/styles/styles.css";
const BaseInput = ({ val, setVal, type }) => {
  return <input type={type} className="w-full p border" id="input" value={val} onChange={(e) => setVal(e.target.value)} placeholder="Text here" />;
};

export default BaseInput;