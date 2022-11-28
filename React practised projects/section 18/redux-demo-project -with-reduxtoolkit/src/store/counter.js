import { createSlice } from "@reduxjs/toolkit";
const initialCounterState = { counter: 0, showCounter: true };
const counterSlice = createSlice({
  name: "counter",

  initialState: initialCounterState,
  reducers: {
    //the below methods will  be automatically called , once the action  is trigerred
    increment(state) {
      state.counter++; //here it is allowed to mutate the state
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      // state.counter = state.counter + action.amount;
      state.counter = state.counter + action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

export const counterActions = counterSlice.actions;
export default counterSlice.reducer;
