import React, { useState, useEffect } from "react";
import "./styles.css";
import { BaseInput, BaseButton, Gap } from "../../atoms";
import { getLogin } from "../../../api";
import { setData, getData } from "../../../utils";
import { useNavigate } from "react-router-dom";
const LoginHome = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();
  const onSubmit = () => {
    getLogin(email, password).then((data) => {
      if (data.auth_token) {
        setData("user", data);
        return navigate("/v1");
      } else {
        alert("Password atau Email Salah");
      }
    });
  };
  return (
    <div
      className="containerLogin"
      onSubmit={(e) => {
        e.preventDefault();
        return onSubmit();
      }}
    >
      <form className="formLogin">
        <Gap height="24px" />
        <h1 className="titleLogin colorProgress">Login</h1>
        <Gap height="24px" />
        <div style={{ width: "100%", display: "flex" }}>
          <BaseInput type="email" placeholder="Email" val={email} setVal={setEmail} />
        </div>
        <Gap height="16px" />
        <div style={{ width: "100%", display: "flex" }}>
          <BaseInput type="password" placeholder="Password" val={password} setVal={setPassword} />
        </div>
        <Gap height="24px" />
        <BaseButton name="progress" color="colorWhite" text="Login" />
        <Gap height="24px" />
      </form>
    </div>
  );
};

export default LoginHome;
