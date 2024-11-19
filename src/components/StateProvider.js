import React, { createContext, useContext, useReducer } from "react";

// Prepares the data layer
export const StateContext = createContext();

// wrap our app and provide the data layer to every component
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// pull the info from data layer
export const useStateValue = () => useContext(StateContext);
