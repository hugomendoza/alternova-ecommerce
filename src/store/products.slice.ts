import type { Product } from '@/interfaces/product.interface';
import type { StateCreator } from 'zustand';

import products from '../data/products.json';

export interface ProductsSlice {
  products: Product[];
}

export const createProductsSlice: StateCreator<ProductsSlice> = () => ({
  products: products.products as Product[],
});
