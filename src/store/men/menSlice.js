import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  isLoading: false,
  errorMessage: "",
  value: 0,
};

const menSlice = createSlice({
  name: "men",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

export const {increment, decrement} = menSlice.actions
export default menSlice.reducer;
