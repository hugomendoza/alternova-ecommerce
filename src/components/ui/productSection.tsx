import { useEcommerceStore } from '@/store/store';
import { ProductCard } from './productCard';

export function ProductSection() {
  const products = useEcommerceStore((state) => state.products);

  return (
    <section className="col-span-8">
      <h2 className="my-6 text-xl font-bold">Products</h2>
      <div className="col-span-3 grid grid-cols-2 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </section>
  );
}
