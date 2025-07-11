import type { StateCreator } from 'zustand';
import type { CartItem } from '@/interfaces/product.interface';

export interface CartSlice {
  shoppingCart: CartItem[];

  addProduct: (addProduct: CartItem) => void;
  removeProduct: (idProduct: number) => void;
}

export const createCartSlice: StateCreator<CartSlice> = (set) => ({
  shoppingCart: [] as CartItem[],

  addProduct: (addProduct) =>
    set((state) => {
      const productExists = state.shoppingCart.some((product) => product.id === addProduct.id);

      if (productExists) {
        return {
          shoppingCart: state.shoppingCart.map((product) => {
            if (product.id !== addProduct.id) return product;

            const quantity = product.quantity;

            return {
              ...product,
              quantity: quantity + addProduct.quantity,
            };
          }),
        };
      }

      return {
        shoppingCart: [...state.shoppingCart, addProduct],
      };
    }),

  removeProduct: (idProduct) =>
    set((state) => ({
      shoppingCart: state.shoppingCart.filter((product) => product.id !== idProduct),
    })),
});
