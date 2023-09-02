"use client";
import { createContext, useContext, useState } from "react";

// Create the context
const StateContext = createContext();

// Create a provider component
export function StateProvider({ children }) {
  return <StateContext.Provider>{children}</StateContext.Provider>;
}

// Custom hook to access the context
export function useStateContext() {
  return useContext(StateContext);
}
