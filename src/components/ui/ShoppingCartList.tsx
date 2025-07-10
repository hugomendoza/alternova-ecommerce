import type { Product } from '@/interfaces/product.interface';
import { ShoppingCartCard } from './shoppingCartCard';

interface Props {
  products: Product[];
}

export function ShoppingCartList({ products }: Props) {
  return (
    <>
      {products.map((product) => (
        <ShoppingCartCard key={product.id} {...product} />
      ))}
    </>
  );
}
