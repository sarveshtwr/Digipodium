import React from "react";
import classes from "./login.module.css";

const Login = () => {
  return (
    <div>
      <h1 className="text-center text-3xl">Login Page</h1>
      <button className="btn">Login Button</button>
      <button className={classes.loginBtn}>Sumit Button</button>
    </div>
  );
};

export default Login;
