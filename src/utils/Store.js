import React, { createContext, useReducer } from "react";

export const Store = createContext();
const initialState = {
    data: []
}


export function StoreProvider({ children }) {

    const [data, setData] = React.useState([]);

    const value = { data, setData }
    return <Store.Provider value={value}>{children}</Store.Provider>
}