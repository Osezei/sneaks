import React, { useContext, useReducer, useEffect } from "react";
import { kicks } from "./data";
import reducer from "./reducer";

const AppContext = React.createContext();

const AppProvider = function ({ children }) {
  const initialState = {
    shoes: kicks,
    AllShoes: kicks,
    activeFilter: "all",
    minimumPrice: 0,
    maximumPrice: 3000,
    price: "",
    totalShoes: 0,
    totalAmount: 0,
    tempstock: 1,
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  const manageCategory = (value) => {
    dispatch({ type: "MANAGE_CATEGORY", payload: value });
  };
  return (
    <AppContext.Provider value={{ ...state, manageCategory }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = function () {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
