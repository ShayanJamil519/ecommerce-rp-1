"use client";
import { createContext, useContext, useState } from "react";

// Create the context
const StateContext = createContext();

// Create a provider component
export function StateProvider({ children }) {
  const [openSearchModel, setOpenSearchModel] = useState(false);

  const handleSearchModelOpen = () => {
    setOpenSearchModel(!openSearchModel);
  };

  return (
    <StateContext.Provider value={{ openSearchModel, handleSearchModelOpen }}>
      {children}
    </StateContext.Provider>
  );
}

// Custom hook to access the context
export function useStateContext() {
  return useContext(StateContext);
}
