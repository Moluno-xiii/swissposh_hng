import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  isLoading: false,
  errorMessage: "",
  value: 0,
};

const womenSlice = createSlice({
  name: "women",
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

export const { increment, decrement } = womenSlice.actions;
export default womenSlice.reducer;
