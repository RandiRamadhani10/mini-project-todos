import React, { useState, useEffect } from "react";
import "./styles.css";
import "../../../assets/styles/styles.css";
import { IC_Plus, IC_Plus_Circle, IC_Delete, IC_Delete_Active, IC_Edit, IC_Edit_Active, IC_Right, IC_Right_Active, IC_Left, IC_Left_Active } from "../../../assets/icons";
import Gap from "../Gap";
const BaseButtonIcons = ({
  name = "white",
  color = "colorPureBlack",
  onClick = () => {
    console.log(false);
  },
  text = "text",
  main = true,
  icon = "plus",
  fontSize = "14px",
  fontWeight = "700",
  padding = "4px 16px",
  gap = "5px",
  hover = false,
}) => {
  const [Icons, setIcon] = useState(IC_Left);
  const [iconActive, setActive] = useState(IC_Left);
  const [iconInactive, setInactive] = useState(IC_Left);
  const renderIcon = () => {
    switch (icon) {
      case "plus":
        return <IC_Plus />;
      case "circle":
        return <IC_Plus_Circle />;
      default:
        break;
    }
  };
  useEffect(() => {
    switch (icon) {
      case "right": {
        setIcon(IC_Right);
        setActive(IC_Right_Active);
        setInactive(IC_Right);
        break;
      }
      case "left": {
        setIcon(IC_Left);
        setActive(IC_Left_Active);
        setInactive(IC_Left);
        break;
      }
      case "delete": {
        setIcon(IC_Delete);
        setActive(IC_Delete_Active);
        setInactive(IC_Delete);
        break;
      }
      case "edit": {
        setIcon(IC_Edit);
        setActive(IC_Edit_Active);
        setInactive(IC_Edit);
        break;
      }
    }
  }, []);
  return (
    <>
      {hover ? (
        <button
          onMouseEnter={() => setIcon(iconActive)}
          onMouseLeave={() => setIcon(iconInactive)}
          onClick={() => {
            onClick();
          }}
          className={"flexButton " + name + ` ${icon == "delete" ? "buttonIconsDanger" : "buttonIcons"}`}
          style={{ padding: padding }}
        >
          <Icons />
          <Gap width={gap} />
          <span style={{ fontSize: fontSize, fontWeight: fontWeight }}>{text}</span>
          <Gap width={gap} />
        </button>
      ) : (
        <button
          onClick={() => {
            onClick();
          }}
          className={"flexButton " + name}
          style={{ padding: padding }}
        >
          {!main && renderIcon()}
          <Gap width={gap} />
          <span className={color} style={{ fontSize: fontSize, fontWeight: fontWeight }}>
            {text}
          </span>
          <Gap width={gap} />
          {main && renderIcon()}
        </button>
      )}
    </>
  );
};

export default BaseButtonIcons;
