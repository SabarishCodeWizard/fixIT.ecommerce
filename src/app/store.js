import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../features/product/productReducer';

export const store = configureStore({
  reducer: {
    product: productReducer,
  },
});
