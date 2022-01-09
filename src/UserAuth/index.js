import React, { useContext } from "react";
import { UserContext } from "../context/User";

const UserAuth = () => {
  const { user } = useContext(UserContext);
  return <div>My name is : {user.name}</div>;
};

export default UserAuth;
