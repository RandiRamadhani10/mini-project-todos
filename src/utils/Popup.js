import React, { useState, useEffect, useContext } from "react";
import "../assets/styles/styles.css";
import { IC_Warning, IC_Close } from "../assets/icons";
import { BaseButton, Gap, BaseInput, BaseButtonIcons } from "../components/atoms";
import { ThemeContext } from "../pages/Main";
import { createItems, editItems, deleteItems, createTodos, editItemsMoved } from "../api";
export const DeletePopup = () => {
  const { context, setContext } = useContext(ThemeContext);
  const onSubmit = () => {
    deleteItems(context.data.id, context.data.idTodo).then(() => {
      console.log("test");
    });
  };
  return (
    <form
      className={"Popup"}
      onSubmit={(e) => {
        return onSubmit();
      }}
    >
      <div className="childPopup">
        <div className="titlePopup justify-between">
          <div className="titlePopup">
            <IC_Warning />
            <span className="colorBlack textPopup ml-10">Delete Task</span>
          </div>

          <button
            className="btnClose"
            onClick={() => {
              setContext({ ...context, openDelete: false });
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
              setContext({ ...context, openDelete: false });
            }}
          />
          <Gap width="10px" />
          <BaseButton type="submit" name="danger" color="colorWhite" text="Delete" />
        </div>
      </div>
    </form>
  );
};
export const AddtaskPopup = () => {
  const { context, setContext } = useContext(ThemeContext);
  const [task, settask] = useState("");
  const [progress, setProgress] = useState("");
  const onSubmit = () => {
    createItems(context.id, task, progress).then(() => {
      console.log("test");
    });
  };
  return (
    <form
      className={"Popup"}
      onSubmit={(event) => {
        return onSubmit();
      }}
    >
      <div className="childPopup">
        <div className="titlePopup justify-between">
          <div className="titlePopup">
            <span className="colorBlack textPopup">Create Task</span>
          </div>

          <button
            className="btnClose"
            onClick={() => {
              setContext({ ...context, openAdd: false });
            }}
          >
            <IC_Close />
          </button>
        </div>
        <Gap height="24px" />
        <p className="textMain">Task Name</p>
        <Gap height="8px" />
        <div className="inputPopup">
          <BaseInput placeholder="Type your Task" text val={task} setVal={settask} />
        </div>
        <Gap height="16px" />
        <p className="textMain">Progress</p>
        <Gap height="8px" />
        <div className="inputPopup w-25">
          <BaseInput placeholder="70%" type="number" val={progress} setVal={setProgress} />
        </div>
        <Gap height="24px" />
        <div className="choicePopup">
          <BaseButton
            name="white"
            text="Cancel"
            onClick={() => {
              setContext({ ...context, openAdd: false });
            }}
          />
          <Gap width="10px" />
          <BaseButton name="progress" color="colorWhite" text="Save Task" />
        </div>
      </div>
    </form>
  );
};
export const EdittaskPopup = () => {
  const { context, setContext } = useContext(ThemeContext);
  console.log(context);
  const [task, settask] = useState(context.data.task);
  const [progress, setProgress] = useState(context.data.progress);
  const onSubmit = () => {
    editItems(context.data.id, task, progress, context.data.idTodo).then(() => {
      console.log("test");
    });
  };
  return (
    <form
      className={"Popup"}
      onSubmit={() => {
        return onSubmit();
      }}
    >
      <div className="childPopup">
        <div className="titlePopup justify-between">
          <div className="titlePopup">
            <span className="colorBlack textPopup">Edit Task</span>
          </div>

          <button
            className="btnClose"
            onClick={() => {
              setContext({ ...context, openEdit: false });
            }}
          >
            <IC_Close />
          </button>
        </div>
        <Gap height="24px" />
        <p className="textMain">Task Name</p>
        <Gap height="8px" />
        <div className="inputPopup">
          <BaseInput placeholder="Type your Task" val={task} setVal={settask} />
        </div>
        <Gap height="16px" />
        <p className="textMain">Progress</p>
        <Gap height="8px" />
        <div className="inputPopup w-25">
          <BaseInput placeholder="70%" val={progress} type="number" setVal={setProgress} />
        </div>
        <Gap height="24px" />
        <div className="choicePopup">
          <BaseButton
            name="white"
            text="Cancel"
            onClick={() => {
              setContext({ ...context, openEdit: false });
            }}
          />
          <Gap width="10px" />
          <BaseButton type="submit" name="progress" color="colorWhite" text="Save Task" />
        </div>
      </div>
    </form>
  );
};
export const AddTodoPopup = () => {
  const { context, setContext } = useContext(ThemeContext);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const onSubmit = () => {
    createTodos(title, description).then(() => {
      console.log("test");
    });
  };
  return (
    <form
      className={"Popup"}
      onSubmit={() => {
        return onSubmit();
      }}
    >
      <div className="childPopup">
        <div className="titlePopup justify-between">
          <div className="titlePopup">
            <span className="colorBlack textPopup">Add Todo</span>
          </div>

          <button
            className="btnClose"
            onClick={() => {
              setContext({ ...context, openTodo: false });
            }}
          >
            <IC_Close />
          </button>
        </div>
        <Gap height="24px" />
        <p className="textMain">Todo Name</p>
        <Gap height="8px" />
        <div className="inputPopup">
          <BaseInput placeholder="Type your Todo" val={title} setVal={setTitle} />
        </div>
        <Gap height="16px" />
        <p className="textMain">Range</p>
        <Gap height="8px" />
        <div className="inputPopup">
          <BaseInput placeholder="Januari - Agustus" val={description} setVal={setDescription} />
        </div>
        <Gap height="24px" />
        <div className="choicePopup">
          <BaseButton
            name="white"
            text="Cancel"
            onClick={() => {
              setContext({ ...context, openTodo: false });
            }}
          />
          <Gap width="10px" />
          <BaseButton type="submit" name="progress" color="colorWhite" text="Save Todo" />
        </div>
      </div>
    </form>
  );
};
export const MorePopup = ({ task, progress, id, idTodo }) => {
  const { context, setContext } = useContext(ThemeContext);
  const arrayLength = context.dataBucket.length - 1;
  const indexTodo = context.dataBucket.indexOf(idTodo);
  const data = { task: task, progress: progress, id: id, idTodo: idTodo };
  const onLeft = () => {
    const indexing = context.dataBucket[indexTodo - 1];
    editItemsMoved(data.id, data.task, data.progress, idTodo, indexing).then(() => {
      console.log("test");
      window.location.reload();
    });
  };
  const onRight = () => {
    const indexing = context.dataBucket[indexTodo + 1];
    editItemsMoved(id, task, progress, idTodo, indexing).then(() => {
      console.log("test");
      window.location.reload();
    });
  };
  return (
    <div className="morePopup">
      {indexTodo < arrayLength && (
        <BaseButtonIcons
          main={false}
          name="transparentButton"
          text="Move Right"
          icon="right"
          fontSize="12px"
          fontWeight="400"
          padding="6px"
          gap="18px"
          hover={true}
          onClick={(event) => {
            return onRight();
          }}
        />
      )}
      {indexTodo > 0 && (
        <BaseButtonIcons
          main={false}
          name="transparentButton"
          text="Move Left"
          icon="left"
          fontSize="12px"
          fontWeight="400"
          padding="6px"
          gap="18px"
          hover={true}
          onClick={(event) => {
            return onLeft();
          }}
        />
      )}
      <BaseButtonIcons
        main={false}
        name="transparentButton"
        text="Edit"
        icon="edit"
        fontSize="12px"
        fontWeight="400"
        padding="6px"
        gap="18px"
        hover={true}
        onClick={() => {
          setContext({ ...context, openEdit: true, data: data });
        }}
      />
      <BaseButtonIcons
        main={false}
        name="transparentButton"
        text="Delete"
        icon="delete"
        fontSize="12px"
        fontWeight="400"
        padding="6px"
        gap="18px"
        hover={true}
        onClick={() => {
          setContext({ ...context, openDelete: true, data: data });
        }}
      />
    </div>
  );
};
