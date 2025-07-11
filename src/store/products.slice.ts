import type { Product } from '@/interfaces/product.interface';
import type { StateCreator } from 'zustand';

import products from '../data/products.json';

export interface ProductsSlice {
  products: Product[];

  updateProduct: (updatedProduct: Product) => void;
  restoreProduct: (productToRestore: Product) => void;
}

export const createProductsSlice: StateCreator<ProductsSlice> = (set) => ({
  products: products.products as Product[],

  updateProduct: (updatedProduct) =>
    set((state) => ({
      products: state.products.map((product) =>
        product.id === updatedProduct.id ? { ...product, ...updatedProduct } : product,
      ),
    })),

  restoreProduct: (productToRestore) =>
    set((state) => {
      const productExists = state.products.some((product) => product.id === productToRestore.id);

      if (productExists) {
        return {
          products: state.products.map((product) => {
            if (product.id !== productToRestore.id) return product;

            const currentStock = product.stock || 0;
            const addStock = productToRestore.stock || 1;

            return {
              ...product,
              stock: currentStock + addStock,
            };
          }),
        };
      }

      return {
        products: [...state.products, productToRestore],
      };
    }),
});
