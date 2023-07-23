import { create } from "zustand"
import { IProducts } from "../models/models"

import products from "../data/products.json"

interface IProductsState {
  products: IProducts[]
}

export const useBearStore = create<IProductsState>()(() => ({
  products: products.products
}))