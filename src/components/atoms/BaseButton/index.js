import React from "react";
import "./styles.css";
import "../../../assets/styles/styles.css";
const BaseButton = ({
  name = "white",
  color = "colorPureBlack",
  onClick = () => {
    console.log(false);
  },
  text = "text",
}) => {
  return (
    <button
      onClick={() => {
        onClick();
      }}
      className={"p shadow " + name}
    >
      <span className={"textButton " + color}>{text}</span>
    </button>
  );
};

export default BaseButton;
