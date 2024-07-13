import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const menSlice = createSlice({
  name: "men",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { id, price, name, imageUrl } = action.payload;
      const existingItem = state.cart.find((item) => item.id === id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cart.push({ id, price, name, imageUrl, quantity: 1 });
      }
    },
    increment: (state, action) => {
      const { id } = action.payload;
      const item = state.cart.find((product) => product.id === id);
      if (item) {
        item.quantity += 1;
      }
    },
    decrement: (state, action) => {
      const { id } = action.payload;
      const item = state.cart.find((product) => product.id === id);
      if (item && item.quantity >= 1) {
        item.quantity -= 1;
      }
    },
  },
});

export const { addToCart, increment, decrement } = menSlice.actions;
export default menSlice.reducer;
