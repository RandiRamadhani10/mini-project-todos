import React, { useEffect, useState, useContext } from "react";
import "./styles.css";
import "../../../assets/styles/styles.css";
import BaseLabels from "../BaseLabels";
import Gap from "../Gap";
import { Colors } from "../../../utils/Colors";
import BaseButtonIcons from "../BaseButtonIcons";
import BaseTask from "../BaseTask";
import { getTodos, getItems } from "../../../api";
import { AddtaskPopup } from "../../../utils";
import { ThemeContext } from "../../../pages/Main";
const BaseTodos = ({ id, title, description }) => {
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);
  const { context, setContext } = useContext(ThemeContext);
  useEffect(() => {
    getItems(id).then((data) => {
      const dataSort = data.reverse();
      setData(dataSort);
    });
  }, []);
  return (
    <>
      <div className="card" style={{ backgroundColor: "#F7FEFF", borderColor: "#01959F" }}>
        <div className="labelTodos">
          <BaseLabels title={title} />
        </div>
        <Gap height="8px" />
        <h2 className="monthTodos">{description}</h2>
        <Gap height="8px" />
        <div className="items">
          {data.length < 1 ? (
            <span style={{ backgroundColor: Colors.gray }} className="itemsBone">
              No Task
            </span>
          ) : (
            data.map((dat) => {
              return <BaseTask id={dat.id} name={dat.name} done={dat.done} progress={dat.progress_percentage} idTodo={id} />;
            })
          )}
        </div>
        <Gap height="8px" />
        <div>
          <BaseButtonIcons
            main={false}
            name="transparentButton"
            text="New Task"
            icon="circle"
            fontSize="12px"
            fontWeight="400"
            padding="0px"
            onClick={() => {
              setContext({ ...context, openAdd: true, id: id });
            }}
          />
        </div>
      </div>
    </>
  );
};

export default BaseTodos;
