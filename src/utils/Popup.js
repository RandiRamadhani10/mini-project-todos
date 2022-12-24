import React, { useState, useEffect } from "react";
import "../assets/styles/styles.css";
import { IC_Warning, IC_Close } from "../assets/icons";
import { BaseButton, Gap, BaseInput, BaseButtonIcons } from "../components/atoms";
export const DeletePopup = ({ setOpen, onDelete }) => {
  return (
    <div className={"Popup"}>
      <div className="childPopup">
        <div className="titlePopup justify-between">
          <div className="titlePopup">
            <IC_Warning />
            <span className="colorBlack textPopup ml-10">Delete Task</span>
          </div>

          <button
            className="btnClose"
            onClick={() => {
              setOpen(false);
            }}
          >
            <IC_Close />
          </button>
        </div>
        <Gap height="24px" />
        <div>
          <p className="msgPopup">Are you sure want to delete this task? your action can’t be reverted.</p>
        </div>
        <Gap height="24px" />
        <div className="choicePopup">
          <BaseButton
            name="white"
            text="Cancel"
            onClick={() => {
              setOpen(false);
            }}
          />
          <Gap width="10px" />
          <BaseButton name="danger" color="colorWhite" text="Delete" />
        </div>
      </div>
    </div>
  );
};
export const AddtaskPopup = ({ setOpen, onDelete }) => {
  return (
    <div className={"Popup"}>
      <div className="childPopup">
        <div className="titlePopup justify-between">
          <div className="titlePopup">
            <span className="colorBlack textPopup">Create Task</span>
          </div>

          <button
            className="btnClose"
            onClick={() => {
              setOpen(false);
            }}
          >
            <IC_Close />
          </button>
        </div>
        <Gap height="24px" />
        <p className="textMain">Task Name</p>
        <Gap height="8px" />
        <div className="inputPopup">
          <BaseInput placeholder="Type your Task" text />
        </div>
        <Gap height="16px" />
        <p className="textMain">Progress</p>
        <Gap height="8px" />
        <div className="inputPopup w-25">
          <BaseInput placeholder="70%" text />
        </div>
        <Gap height="24px" />
        <div className="choicePopup">
          <BaseButton
            name="white"
            text="Cancel"
            onClick={() => {
              setOpen(false);
            }}
          />
          <Gap width="10px" />
          <BaseButton name="progress" color="colorWhite" text="Save task" />
        </div>
      </div>
    </div>
  );
};
export const EdittaskPopup = ({ setOpen, value, progress }) => {
  const [valueTask, onChangeTask] = useState(value);
  const [valueProgress, onChangeprogress] = useState(progress);
  return (
    <div className={"Popup"}>
      <div className="childPopup">
        <div className="titlePopup justify-between">
          <div className="titlePopup">
            <span className="colorBlack textPopup">Edit Task</span>
          </div>

          <button
            className="btnClose"
            onClick={() => {
              setOpen(false);
            }}
          >
            <IC_Close />
          </button>
        </div>
        <Gap height="24px" />
        <p className="textMain">Task Name</p>
        <Gap height="8px" />
        <div className="inputPopup">
          <BaseInput placeholder="Type your Task" val={valueTask} setVal={onChangeTask} />
        </div>
        <Gap height="16px" />
        <p className="textMain">Progress</p>
        <Gap height="8px" />
        <div className="inputPopup w-25">
          <BaseInput placeholder="70%" val={valueProgress} setVal={onChangeprogress} />
        </div>
        <Gap height="24px" />
        <div className="choicePopup">
          <BaseButton
            name="white"
            text="Cancel"
            onClick={() => {
              setOpen(false);
            }}
          />
          <Gap width="10px" />
          <BaseButton name="progress" color="colorWhite" text="Save task" />
        </div>
      </div>
    </div>
  );
};
export const MorePopup = ({ setEdit, SetDelete, setRight, setLeft }) => {
  return (
    <div className="morePopup">
      <BaseButtonIcons main={false} name="transparentButton" text="Move Right" icon="right" fontSize="12px" fontWeight="400" padding="6px" gap="18px" hover={true} />
      <BaseButtonIcons main={false} name="transparentButton" text="Move Left" icon="left" fontSize="12px" fontWeight="400" padding="6px" gap="18px" hover={true} />
      <BaseButtonIcons main={false} name="transparentButton" text="Edit" icon="edit" fontSize="12px" fontWeight="400" padding="6px" gap="18px" hover={true} />
      <BaseButtonIcons main={false} name="transparentButton" text="Delete" icon="delete" fontSize="12px" fontWeight="400" padding="6px" gap="18px" hover={true} />
    </div>
  );
};
