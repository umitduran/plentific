import React, { createContext, useReducer, useContext } from "react";
import Reducer from "./Reducer";

const initialState = {
  categoryList: [],
  proList: [],
  category: "",
  postCode: "",
  error: null,
};

export const Store = createContext(initialState);

const { Provider } = Store;
Store.displayName = "Store";

export const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);

  return <Provider value={[state, dispatch]}>{children}</Provider>;
};
