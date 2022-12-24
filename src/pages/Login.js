import React, { useState } from "react";
import { BaseButton, BaseInput, BaseProgress } from "../components/atoms";
import { DeletePopup, AddtaskPopup, EdittaskPopup } from "../utils";
const Login = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      {open ? <EdittaskPopup setOpen={setOpen} value="ini adaLah tesk" progress={"70%"} /> : <></>}
      <BaseButton
        name="danger"
        text="open"
        onClick={() => {
          setOpen(true);
        }}
      />
    </div>
  );
};

export default Login;
