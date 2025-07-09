import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { createProductsSlice, type ProductsSlice } from './products.slice';

type ShareState = ProductsSlice;

export const useEcommerceStore = create<ShareState>()(
  devtools(
    persist(
      (...a) => ({
        ...createProductsSlice(...a),
      }),
      { name: 'ecommerce-store' },
    ),
    { name: 'ecommerce-store' },
  ),
);
