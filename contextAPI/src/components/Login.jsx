import React, { useState, useContext } from "react";
import { userContext } from "../context/UserContextProvider";
const Login = () => {
  const { setUser } = useContext(userContext);
  setUser("parth");
  return <div>Hello from login</div>;
};

export default Login;
