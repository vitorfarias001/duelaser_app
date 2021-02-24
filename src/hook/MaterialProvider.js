import React, { createContext, useContext, useState } from "react";

const MaterialContext = createContext();

const MaterialProvider = ({ children }) => {
  const [material, setMaterial] = useState({});
  return (
    <MaterialContext.Provider value={{ material, setMaterial }}>
      {children}
    </MaterialContext.Provider>
  );
};

export default MaterialProvider;

export const useMaterial = () => {
  const context = useContext(MaterialContext);
  const { material, setMaterial } = context;
  return { material, setMaterial };
};