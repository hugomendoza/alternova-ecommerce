import { useEcommerceStore } from '@/store/store';
import { ShoppingCartEmpty } from './ShoppingCartEmpty';
import { ShoppingCartList } from './ShoppingCartList';
import { ShoppingCartSummary } from './ShoppingCartSummary';

export function ShoppingCart() {
  const products = useEcommerceStore((state) => state.shoppingCart);
  const total = 0;

  const isEmpty = products?.length === 0;

  return (
    <div className="bg-white p-6 rounded-2xl border border-slate-200">
      {isEmpty ? (
        <ShoppingCartEmpty />
      ) : (
        <>
          <ShoppingCartList products={products} />
          <ShoppingCartSummary total={total} />
        </>
      )}
    </div>
  );
}
