// import { createStore } from "redux";
// import { createSlice, configureStore } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";

// export const INCREMENT = "increment";
// const initialCounterState = { counter: 0, showCounter: true };

// const counterSlice = createSlice({
//   name: "counter",

//   initialState: initialCounterState,
//   reducers: {
//     //the below methods will  be automatically called , once the action  is trigerred
//     increment(state) {
//       state.counter++; //here it is allowed to mutate the state
//     },
//     decrement(state) {
//       state.counter--;
//     },
//     increase(state, action) {
//       // state.counter = state.counter + action.amount;
//       state.counter = state.counter + action.payload;
//     },
//     toggleCounter(state) {
//       state.showCounter = !state.showCounter;
//     },
//   },
// });
// const initialAuthState = {
//   isAuthenticated: false,
// };
// const authSlice = createSlice({
//   name: "authentication",
//   initialState: initialAuthState,
//   reducers: {
//     login(state) {
//       state.isAuthenticated = true;
//     },
//     logout(state) {
//       state.isAuthenticated = false;
//     },
//   },
// });

// const store = configureStore({
//   //if in the case of multiple reducers use like reducer :{counter :counterSlice.reducer,...}, reduxtoolkit will make them combined/merge into an single reducer
//   reducer: counterSlice.reducer,
// });

// import counterReducer from "./counter";

// //using multiple reducers
// const store = configureStore({
//   reducer: { counter: counterSlice.reducer, auth: authSlice.reducer },
// });

// export const counterActions = counterSlice.actions;
// export const authActions = authSlice.actions;
// export default store;

import counterReducer from "./counter";
import authReducer from "./auth";
const store = configureStore({
  reducer: { counter: counterReducer, auth: authReducer },
});

export default store;

// const counterReducer = (state = initialState, action) => {
//   // if (action.type === INCREMENT) {
//   if (action.type === "increment") {
//     return {
//       counter: state.counter + 1,
//       showCounter: state.showCounter,
//     };
//   }
//   if (action.type === "increase") {
//     return {
//       counter: state.counter + action.amount, //increasing the counter according to a data which is not hard coded
//       showCounter: state.showCounter,
//     };
//   }

//   if (action.type === "decrement") {
//     return {
//       counter: state.counter - 1,
//       showCounter: state.showCounter,
//     };
//   }

//   if (action.type === "toggle") {
//     return {
//       counter: state.counter,
//       showCounter: !state.showCounter,
//     };
//   }
//   return state;
// };
