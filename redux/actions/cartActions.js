import {
    addItem,
    removeItem,
    updateItemQuantity,
    clearCart,
    openCart,
    closeCart,
    toggleCart,
  } from '../slices/cartSlice';
  
  export const addToCart = (product) => (dispatch) => {
    dispatch(addItem(product));
  };
  
  export const removeFromCart = (id) => (dispatch) => {
    dispatch(removeItem(id));
  };
  
  export const updateQuantity = (id, quantity) => (dispatch) => {
    dispatch(updateItemQuantity({ id, quantity }));
  };
  
  export const emptyCart = () => (dispatch) => {
    dispatch(clearCart());
  };
  
  export const showCart = () => (dispatch) => {
    dispatch(openCart());
  };
  
  export const hideCart = () => (dispatch) => {
    dispatch(closeCart());
  };
  
  export const toggleCartDrawer = () => (dispatch) => {
    dispatch(toggleCart());
  };
  
  export const selectCartItems = (state) => state.cart?.cartItems ?? [];
  export const selectCartOpen = (state) => state.cart?.cartOpen ?? false;
  export const selectCartCount = (state) =>
    (state.cart?.cartItems ?? []).reduce((total, item) => total + item.quantity, 0);
  export const selectCartTotal = (state) =>
    (state.cart?.cartItems ?? []).reduce((total, item) => total + item.price * item.quantity, 0);