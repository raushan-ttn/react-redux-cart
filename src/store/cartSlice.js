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
        let exists = [];
        // First check value exist or not in store.
        exists = state.cartItem.filter((item) => item.id === action.payload.id);
        if (exists.length) {
          // Update value in store.
          state.cartItem = state.cartItem.map((item) => {
            if (item.id === action.payload.id) {
              item.count += 1;
            }
            return item;
          });
        } else {
          state.cartItem.push(action.payload);
        }
      }
    },
    updateCart: (state, action) => {
      state.cartItem = state.cartItem.filter((item) => {
        if (item.id === action.payload.id) {
          item.count = action.payload.count;
        }
        return item;
      });
    },
    removeCart: (state, action) => {
      // first check item exist in cart.
      let exists = [];
      exists = state.cartItem.filter((item) => {
        if (item.id === action.payload && item.count > 1) {
          return item;
        }
        return false;
      });
      if (exists.length) {
        // remove one item
        state.cartItem = state.cartItem.map((item) => {
          if (item.id === action.payload) {
            item.count -= 1;
          }
          return item;
        });
      } else {
        // remove whole item if only one.
        state.cartItem = state.cartItem.filter(
          (item) => item.id !== action.payload
        );
      }
    },

    removeItem: (state, action) => {
      state.cartItem = state.cartItem.filter(
        (item) => item.id !== action.payload
      );
    },
    sortCart: (state, action) => {
      const check = action.payload;
      let arrayData = [];
      if (check) {
        arrayData = state.cartItem.slice().sort((b, a) => a.count - b.count);
      } else {
        arrayData = state.cartItem.slice().sort((a, b) => a.count - b.count);
      }
      state.cartItem = arrayData;
    },
  },
});

export const { addCart, updateCart, removeCart, removeItem, sortCart } =
  cartSlice.actions;
export default cartSlice.reducer;
