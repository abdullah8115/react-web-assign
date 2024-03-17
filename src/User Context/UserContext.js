import React, { createContext, useState, useEffect } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userData, setuserData] = useState(() => {
    const savedData = localStorage.getItem("userData");
    return savedData ? JSON.parse(savedData) : [];
  });

  useEffect(() => {
    localStorage.setItem("userData", JSON.stringify(userData));
  }, [userData]);

  const saveuserData = (data) => {
    setuserData([...userData, data]);
  };
  

  return (
    <UserContext.Provider value={{ userData, saveuserData }}>
      {children}
    </UserContext.Provider>
  );
};
