import React, { useContext } from "react";
import { UserContext } from "../context/User";

const UserAuth = () => {
  const { user, loading } = useContext(UserContext);
  return (
    <div>
      {loading && "Loading..."}
      {user.map((item) => {
        return <p key={item.id}>My name is : {item.name}</p>;
      })}
    </div>
  );
};

export default UserAuth;
