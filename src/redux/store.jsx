import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import financialStatementReducer from './financialStatementSlice';
import stockListReducer from './stockSlice'

const store = configureStore({
    reducer: {
        financialstatements: financialStatementReducer,
        stocks: stockListReducer
    },
    middleware: [thunk, ...getDefaultMiddleware()]
});

export default store;
