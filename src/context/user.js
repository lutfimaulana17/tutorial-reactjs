import React, { createContext } from "react";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const user = {
    name: "Lutfi Maulana",
  };

  return (
    <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
  );
};

export { UserContext, UserProvider };
