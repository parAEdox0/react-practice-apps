import React, { useState, useContext } from "react";
import { userContext } from "../context/UserContextProvider";

const Profile = () => {
  const { user } = useContext(userContext);
  return <div>Hello {user}</div>;
};

export default Profile;
