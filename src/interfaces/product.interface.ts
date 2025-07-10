export type BadgeVariants = 'technology' | 'sport' | 'building';

export interface Product {
  id: number;
  name: string;
  unit_price: number;
  stock: number;
  category: BadgeVariants;
  img: string;
  description: string;
}
