import React, { createContext, useState, useContext } from 'react';

const InputContext = createContext();

export const useInputContext = () => useContext(InputContext);

export const InputProvider = ({ children }) => {
  const [inputs, setInputs] = useState([]);

  const addInput = (inputElement) => {
    if (inputElement) {
          setInputs((prevInputs)=>[...prevInputs,inputElement])
    }
  };

  return (
    <InputContext.Provider value={{ inputs, addInput }}>
      {children}
    </InputContext.Provider>
  );
};
