// import { createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter";
import authReducer from "./auth";

const store = configureStore({
  // reducer: counterSlice.reducer, // this reducer can take multiple reducers as well. We need to send data as key value pair.
  reducer: {
    counter: counterReducer,
    auth: authReducer,
  },
});

export default store;
