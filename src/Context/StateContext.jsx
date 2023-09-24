"use client";
import { createContext, useContext, useState } from "react";
import useFirebaseAuth from "../app/lib/useFirebaseAuth";

// Create the context
const StateContext = createContext({
  authUser: null,
  loading: true,
});

// Create a provider component
export function StateProvider({ children }) {
  const [openSearchModel, setOpenSearchModel] = useState(false);
  const auth = useFirebaseAuth();
  const [finalCart, setFinalCart] = useState(false);

  const handleSearchModelOpen = () => {
    setOpenSearchModel(!openSearchModel);
  };

  return (
    <StateContext.Provider
      value={{
        openSearchModel,
        handleSearchModelOpen,
        auth,
        finalCart,
        setFinalCart,
      }}
    >
      {children}
    </StateContext.Provider>
  );
}

// Custom hook to access the context
export function useStateContext() {
  return useContext(StateContext);
}
