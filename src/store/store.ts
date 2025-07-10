import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { createProductsSlice, type ProductsSlice } from './products.slice';
import { createCartSlice, type CartSlice } from './cart.slice.slice';

type ShareState = ProductsSlice & CartSlice;

export const useEcommerceStore = create<ShareState>()(
  devtools(
    persist(
      (...a) => ({
        ...createProductsSlice(...a),
        ...createCartSlice(...a),
      }),
      { name: 'ecommerce-store' },
    ),
    { name: 'ecommerce-store' },
  ),
);
