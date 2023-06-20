// UsernameContext.js
import React, { useState } from 'react';
import { createContext } from 'react';

export const UsernameContext = createContext();


export const UsernameProvider = ({ children }) => {
  const [username, setUsername] = useState('');
  const [userChoice, setUserChoice] = useState(null);

  return (
    <UsernameContext.Provider value={{ username, setUsername, userChoice, setUserChoice }}>
      {children}
    </UsernameContext.Provider>
  );
};


