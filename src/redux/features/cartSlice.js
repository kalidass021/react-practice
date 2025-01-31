import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      // mutating the state
      state.items = [...state.items, action.payload];
    },
    removeItem: (state, action) => {
      console.log('action.payload', action.payload);
      state.items = state.items.filter(
        (item) => item.card.info.id !== action.payload.card.info.id
      );
    },
    clearCart: (state, action) => {
      state.items = [];
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
