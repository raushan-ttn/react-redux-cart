import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItem: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addCart: (state, action) => {
      if (action.payload.id) {
        state.cartItem.push(action.payload);
      }
    },
    removeCart: (state, action) => {
      state.cartItem = state.cartItem.filter(
        (item) => item.id !== action.payload
      );
    },
  },
});

export const { addCart, removeCart } = cartSlice.actions;
export default cartSlice.reducer;
