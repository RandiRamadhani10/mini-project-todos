import React from "react";
import "./styles.css";
import "../../../assets/styles/styles.css";
import BaseLabels from "../BaseLabels";
import Gap from "../Gap";
import { Colors } from "../../../utils/Colors";
import BaseButtonIcons from "../BaseButtonIcons";
import BaseTask from "../BaseTask";
const BaseTodos = () => {
  return (
    <div className="card" style={{ backgroundColor: "#F7FEFF", borderColor: "#01959F" }}>
      <div className="labelTodos">
        <BaseLabels />
      </div>
      <Gap height="8px" />
      <h2 className="monthTodos">Januari - Desember</h2>
      <Gap height="8px" />
      <div className="items">
        {/* <span style={{ backgroundColor: Colors.gray }} className="itemsBone">
          No Task
        </span> */}
        <BaseTask />
        <BaseTask />
        <BaseTask />
        <BaseTask />
        <BaseTask />
        <BaseTask />
      </div>
      <Gap height="8px" />
      <div>
        <BaseButtonIcons main={false} name="transparentButton" text="New Task" icon="circle" fontSize="12px" fontWeight="400" padding="0px" />
      </div>
    </div>
  );
};

export default BaseTodos;
