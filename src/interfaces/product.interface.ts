export type BadgeVariants = 'technology' | 'sport' | 'building';

export interface ProductBase {
  id: number;
  name: string;
  unit_price: number;
  category: BadgeVariants;
}

export interface Product extends ProductBase {
  description: string;
  img: string;
  stock: number;
}

export interface CartItem extends ProductBase {
  quantity: number;
}
