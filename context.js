import React, { useContext, useReducer, useEffect, useState } from "react";
import { kicks } from "./data";
import reducer from "./reducer";

const AppContext = React.createContext();

const AppProvider = function ({ children }) {
  const ls = typeof window !== "undefined" ? window.localStorage : null;
  const [cartProducts, setCartProducts] = useState([]);
  useEffect(() => {
    if (cartProducts?.length > 0) {
      ls?.setItem("cart", JSON.stringify(cartProducts));
    }
  }, [cartProducts]);

  useEffect(() => {
    if (ls && ls.getItem("cart")) {
      setCartProducts(JSON.parse(ls.getItem("cart")));
    }
  }, []);

  const initialState = {
    shoes: kicks,
    allShoes: kicks,
    activeFilter: "all",
    minimumPrice: 0,
    maximumPrice: 3000,
    price: "",
    cart: cartProducts,
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

  //handling cart

  useEffect(() => {
    dispatch({ type: "COUNT_TOTAL_CART_ITEMS" });
    localStorage.setItem("cart", JSON.stringify(state.cart));
  }, [state.cart]);

  const addToCart = (id, amount, item) => {
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        id,
        amount,
        item,
      },
    });
  };
  const clearCartItems = () => {
    dispatch({ type: "CLEAR_CART_ITEMS" });
  };
  const increaseCartAmount = (id, value, max) => {
    dispatch({
      type: "INCREASE_CART_AMOUNT",
      payload: {
        id,
        value,
        max,
      },
    });
  };
  const decreaseCartAmount = (id, value, min) => {
    dispatch({
      type: "DECREASE_CART_AMOUNT",
      payload: {
        id,
        value,
        min,
      },
    });
  };
  const removeItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };
  return (
    <AppContext.Provider
      value={{
        ...state,
        addToCart,
        removeItem,
        decreaseCartAmount,
        increaseCartAmount,
        clearCartItems,
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
