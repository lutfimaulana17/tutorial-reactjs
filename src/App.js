import React from "react";
import { UserProvider } from "./context/User";
import UserAuth from "./UserAuth";

const App = () => {
  return (
    <div style={{ padding: "20px" }}>
      <UserProvider>
        <UserAuth />
      </UserProvider>
    </div>
  );
};

export default App;
