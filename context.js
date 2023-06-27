import React, { useContext, useReducer, useEffect } from "react";
import { kicks } from "./data";
import reducer from "./reducer";

const AppContext = React.createContext();

const AppProvider = function ({ children }) {
  const initialState = {
    shoes: kicks,
    allShoes: kicks,
    activeFilter: "all",
    minimumPrice: 0,
    maximumPrice: 3000,
    price: "",
    totalShoes: 0,
    totalAmount: 0,
    tempstock: 1,
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  const manageStockInc = (value, stock) => {
    dispatch({ type: "AMOUNT_INCREASE", payload: { value, stock } });
  };
  const manageStockDec = (value, stock) => {
    dispatch({ type: "AMOUNT_DECREASE", payload: { value, stock } });
  };
  useEffect(() => {
    dispatch({ type: "SET_PRICE" });
  }, []);

  const manageCategory = (value) => {
    dispatch({ type: "MANAGE_CATEGORY", payload: value });
  };
  const manageGender = (value) => {
    dispatch({ type: "MANAGE_GENDER", payload: value });
  };
  const manageCompany = (value) => {
    dispatch({ type: "MANAGE_COMPANY", payload: value });
  };
  const manageSort = (value) => {
    dispatch({ type: "MANAGE_SORT", payload: value });
  };
  const priceFilterUpdate = (value) => {
    dispatch({ type: "UPDATE_FILTERS", payload: value });
  };
  const clearAllFilters = () => {
    dispatch({ type: "CLEAR" });
  };
  return (
    <AppContext.Provider
      value={{
        ...state,
        manageCategory,
        manageGender,
        manageCompany,
        manageSort,
        priceFilterUpdate,
        clearAllFilters,
        manageStockInc,
        manageStockDec,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = function () {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
