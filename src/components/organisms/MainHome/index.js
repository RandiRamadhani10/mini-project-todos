import React, { useState, useContext, useEffect } from "react";
import "./styles.css";
import "../../../assets/styles/styles.css";
import { Navbar, Todos } from "../../molecules";
import { Gap } from "../../atoms";
import { AddtaskPopup, EdittaskPopup, DeletePopup, AddTodoPopup } from "../../../utils";
import { ThemeContext } from "../../../pages/Main";
const MainHome = () => {
  const { context, setContext } = useContext(ThemeContext);
  const [render, setRender] = useState(true);
  useEffect(() => {
    console.log("rendered");
  }, [setRender]);
  return (
    <div className="containerMainHome">
      {context.openAdd && <AddtaskPopup setRender={setRender} />}
      {context.openEdit && <EdittaskPopup />}
      {context.openDelete && <DeletePopup />}
      {context.openTodo && <AddTodoPopup />}
      <Navbar />
      <Gap height="24px" />
      <Todos />
    </div>
  );
};

export default MainHome;
