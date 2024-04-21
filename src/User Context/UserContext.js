// UserContext.js
import React, { createContext, useState} from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userData] = useState(() => {
    const storedData = localStorage.getItem('userData');
    return storedData ? JSON.parse(storedData) : {};
  });
  console.log(userData, "User Data Saved");

  const saveUserData = (newUseerdata) => {
    let data = localStorage.getItem('userData');  
    console.log("this is local storage data ", data )
    data = JSON.parse(data)
    if(data){

      localStorage.setItem('userData', JSON.stringify([newUseerdata , ...data
      ]));
    }else{
      
      localStorage.setItem('userData', JSON.stringify([newUseerdata]));
    }
  };

  return (
    <UserContext.Provider value={{ userData, saveUserData }}>
      {children}
    </UserContext.Provider>
  );
};
