import type { Product } from '@/interfaces/product.interface';
import type { StateCreator } from 'zustand';

export interface CartSlice {
  shoppingCart: Product[];

  addProduct: (by: Product) => void;
  removeProduct: (by: number) => void;
}

export const createCartSlice: StateCreator<CartSlice> = (set) => ({
  shoppingCart: [] as Product[],

  addProduct: (by) => set((state) => ({ shoppingCart: [...state.shoppingCart, by] })),
  removeProduct: (by) =>
    set((state) => ({ shoppingCart: state.shoppingCart.filter((product) => product.id !== by) })),
});
