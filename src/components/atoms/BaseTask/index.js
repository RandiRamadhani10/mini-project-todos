import React, { useState } from "react";
import "./style.css";
import { Colors } from "../../../utils";
import BaseProgress from "../BaseProgress";
import { IC_More } from "../../../assets/icons";
import { MorePopup } from "../../../utils";
import Gap from "../Gap";
const BaseTask = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="containerTask" style={{ backgroundColor: Colors.gray }}>
      <span className="titleTask">Re-designed the zero-g doggie bags. No more spills! </span>
      <Gap height="8px" />
      <hr style={{ border: "dashed 1px #E0E0E0", width: "100%", margin: "0px" }} />
      <Gap height="8px" />
      <div className="progresTask">
        <BaseProgress value={60} />
        <span
          className="moreTask"
          onClick={() => {
            open ? setOpen(false) : setOpen(true);
          }}
        >
          <IC_More />
        </span>
      </div>
      {open && <MorePopup />}
    </div>
  );
};

export default BaseTask;
