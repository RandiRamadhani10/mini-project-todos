import React, { useContext } from "react";
import "./styles.css";
import "../../../assets/styles/styles.css";
import { BaseButtonIcons, Gap } from "../../atoms";
import { ThemeContext } from "../../../pages/Main";
const Navbar = () => {
  const { context, setContext } = useContext(ThemeContext);
  return (
    <div className="containerNavbar">
      <h1 className="titleNavbar">Product Roadmap</h1>
      <Gap width="10px" />
      <BaseButtonIcons
        text="Add New Group"
        color="colorWhite"
        name="progress"
        main={false}
        onClick={() => {
          setContext({ ...context, openTodo: true });
        }}
      />
    </div>
  );
};

export default Navbar;
