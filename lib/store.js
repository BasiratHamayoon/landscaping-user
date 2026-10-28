import { configureStore } from '@reduxjs/toolkit';
import uiReducer from '@/redux/slices/uiSlice';

export const store = configureStore({
  reducer: {
    ui: uiReducer,
  },
});