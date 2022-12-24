import React from "react";
import "./styles.css";
import "../../../assets/styles/styles.css";
const BaseInput = ({ val, setVal, type, placeholder }) => {
  return <input type={type} className="w-full p border" id="input" min="0" max="100" value={val} onChange={(e) => setVal(e.target.value)} placeholder={placeholder} required />;
};

export default BaseInput;
