import React, { useState, useEffect, useContext, createContext } from "react";
import { MainHome } from "../components/organisms";
import { getTodos } from "../api";
export const ThemeContext = createContext({});
const Main = () => {
  const [context, setContext] = useState({ id: "", openAdd: false, openDelete: false, openEdit: false, openTodo: false, data: {}, dataBucket: [] });
  return (
    <ThemeContext.Provider value={{ context, setContext }}>
      <MainHome />
    </ThemeContext.Provider>
  );
};

export default Main;
