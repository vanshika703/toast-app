import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      console.log("state.items", state.items);
      const foundIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      if (foundIndex !== -1) {
        state.items[foundIndex] = {
          ...action.payload,
          quantity: state.items[foundIndex].quantity + 1,
        };
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
      state.total = state.total + action.payload.price;
    },
    removeItem: (state, action) => {
      let i = state.items.findIndex((item) => item?.id === action.payload.id);
      state.items[i].quantity--;
    },
    clearCart: (state) => {
      state.items = [];
      state.total = 0;
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
