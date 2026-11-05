import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItems: [],
  cartOpen: false,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      const existing = state.cartItems.find(item => item.id === action.payload.id);
      if (existing) {
        existing.quantity += 1;
      } else {
        state.cartItems.push({ ...action.payload, quantity: 1 });
      }
      state.cartOpen = true;
    },
    removeItem(state, action) {
      state.cartItems = state.cartItems.filter(item => item.id !== action.payload);
    },
    updateItemQuantity(state, action) {
      const { id, quantity } = action.payload;
      if (quantity <= 0) {
        state.cartItems = state.cartItems.filter(item => item.id !== id);
      } else {
        const item = state.cartItems.find(item => item.id === id);
        if (item) item.quantity = quantity;
      }
    },
    clearCart(state) {
      state.cartItems = [];
    },
    openCart(state) {
      state.cartOpen = true;
    },
    closeCart(state) {
      state.cartOpen = false;
    },
    toggleCart(state) {
      state.cartOpen = !state.cartOpen;
    },
  },
});

export const {
  addItem,
  removeItem,
  updateItemQuantity,
  clearCart,
  openCart,
  closeCart,
  toggleCart,
} = cartSlice.actions;

export default cartSlice.reducer;