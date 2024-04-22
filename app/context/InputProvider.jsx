import React, { createContext, useState, useContext } from 'react';

const InputContext = createContext();

export const useInputContext = () => useContext(InputContext);

export const InputProvider = ({ children }) => {
  const [inputs, setInputs] = useState([]);

  const addInput = (inputElement,classBody) => {
    if (inputElement && classBody) {
      const clonedInput = inputElement.cloneNode(true);
      const inputAttributes = {
        type:clonedInput.type,
        className:classBody
      }
          setInputs((prevInputs)=>[...prevInputs,inputAttributes])
    }
  };

  return (
    <InputContext.Provider value={{ inputs, addInput }}>
      {children}
    </InputContext.Provider>
  );
};
