import React, { useEffect, useState, useContext } from "react";
import "./styles.css";
import "../../../assets/styles/styles.css";
import { BaseTodos } from "../../atoms";
import { getTodos } from "../../../api";
import { AddtaskPopup } from "../../../utils";
import { ThemeContext } from "../../../pages/Main";
const Todos = () => {
  const { context, setContext } = useContext(ThemeContext);
  const [data, setData] = useState([]);
  useEffect(() => {
    getTodos().then((data) => {
      const dataArray = data.map((dat) => {
        return dat.id;
      });
      setContext({ ...context, dataBucket: dataArray });
      console.log(dataArray);
      setData(data);
    });
  }, []);
  return (
    <div className="scrolling-wrapper">
      {data.map((dat) => {
        return <BaseTodos id={dat.id} title={dat.title} description={dat.description} />;
      })}
    </div>
  );
};

export default Todos;
