import React from "react";
import "./styles.css";
import "../../../assets/styles/styles.css";
import { BaseTodos } from "../../atoms";
const Todos = () => {
  return (
    <div className="scrolling-wrapper">
      <BaseTodos />
      <BaseTodos />
      <BaseTodos />
      <BaseTodos />
      <BaseTodos />
      <BaseTodos />
      <BaseTodos />
    </div>
  );
};

export default Todos;
