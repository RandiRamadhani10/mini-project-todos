import React from "react";
import "./styles.css";
import "../../../assets/styles/styles.css";
const BaseButton = ({ name, color, onClick }) => {
  console.log(name);
  return (
    <button
      onClick={() => {
        onClick();
      }}
      className={"p shadow " + name}
    >
      <span className={"text " + color}>cancel</span>
    </button>
  );
};

export default BaseButton;
