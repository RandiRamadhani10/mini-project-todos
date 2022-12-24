import React from "react";
import "./styles.css";
import "../../../assets/styles/styles.css";
import { Navbar, Todos } from "../../molecules";
import { Gap } from "../../atoms";
const MainHome = () => {
  return (
    <div className="containerMainHome">
      <Navbar />
      <Gap height="24px" />
      <Todos />
    </div>
  );
};

export default MainHome;
