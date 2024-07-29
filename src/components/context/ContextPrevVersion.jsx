import React, { createContext, useState, useContext } from 'react';

const MyContext = createContext();

const MyProvider = ({ children }) => {
    const [state, setState] = useState(initialState);
  
    return (
      <MyContext.Provider value={{ state, setState }}>
        {children}
      </MyContext.Provider>
    );
  };
  