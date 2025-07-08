import { ProductCard } from './productCard';

export function ProductSection() {
  return (
    <section className="col-span-8">
      <h2 className="my-6 text-xl font-bold">Products</h2>
      <div className="col-span-3 grid grid-cols-2 gap-6">
        <ProductCard />
        <ProductCard />
      </div>
    </section>
  );
}
