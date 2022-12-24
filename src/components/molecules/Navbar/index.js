import React from "react";
import "./styles.css";
import "../../../assets/styles/styles.css";
import { BaseButtonIcons, Gap } from "../../atoms";
const Navbar = () => {
  return (
    <div className="containerNavbar">
      <h1 className="titleNavbar">Product Roadmap</h1>
      <Gap width="10px" />
      <BaseButtonIcons text="Add New Group" color="colorWhite" name="progress" main={false} />
    </div>
  );
};

export default Navbar;
