import React, { createContext, useReducer } from "react";
import PropTypes from "prop-types";
import Reducer from "./Reducer";

const initialState = {
    categoryList: [],
    proList: [],
    proListLoading: false,
    proListSuccess: true,
    proListError: false,
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

StoreProvider.propTypes = {
    children: PropTypes.element,
};
