import React, { Children, createContext } from "react";
import useFirebase from "../hooks/useFirebase";
import useServices from "../hooks/useServices";

export const AllContext = createContext();

const AllProvider = ({ children }) => {
  const allContext = {
    firebase: useFirebase(),
    healthServices: useServices(),
  };
  return (
    <>
      <AllContext.Provider value={allContext}>{children}</AllContext.Provider>
    </>
  );
};

export default AllProvider;
