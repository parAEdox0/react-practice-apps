import { useState, createContext } from "react";

export const userContext = createContext();

const UserContextProvider = ({ children }) => {
  let [user, setUser] = useState(null);
  return (
    <userContext.Provider value={{ user, setUser }}>
      {children}
    </userContext.Provider>
  );
};

export default UserContextProvider;
