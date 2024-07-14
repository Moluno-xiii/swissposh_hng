import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const menSlice = createSlice({
  name: "men",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const {
        id,
        price,
        name,
        imageUrl,
        unique_id,
        available_quantity,
        color,
      } = action.payload;
      const existingItem = state.cart.find((item) => item.id === id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cart.push({
          id,
          price,
          name,
          imageUrl,
          unique_id,
          available_quantity,
          color,
          quantity: 1,
        });
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
    setQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.cart.find((product) => product.id === id);
      if (item) {
        item.quantity = quantity;
      }
    },
    clearItem: (state, action) => {
      const { id } = action.payload;
      state.cart = state.cart.filter((item) => item.id !== id);
    },
    clearCart: (state) => {
      state.cart = [];
    },
  },
});
export const selectCartTotal = (state) =>
  state.men.cart.reduce(
    (total, item) => total + item.quantity * item.price,
    0,
  );

export const {
  addToCart,
  increment,
  decrement,
  setQuantity,
  clearCart,
  clearItem,
} = menSlice.actions;
export default menSlice.reducer;
