import { ShoppingCart } from './shoppingCart';

export function ShoppingCartAside() {
  return (
    <aside className="col-span-4">
      <h2 className="my-6 text-xl font-bold">Shopping Cart</h2>
      <ShoppingCart />
    </aside>
  );
}
