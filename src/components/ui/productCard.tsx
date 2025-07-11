import { useEcommerceStore } from '@/store/store';
import { useCounter } from '@/hooks/useCounter';
import { Badge } from './badge';
import { Button } from './button';
import { Card, CardHeader, CardContent, CardTitle, CardDescription, CardFooter } from './card';
import { Counter } from './counter';

import type { CartItem, Product } from '@/interfaces/product.interface';

interface Props {
  product: Product;
  onAddProductToCart: (product: CartItem, quantity: number) => void;
}

export function ProductCard({ product, onAddProductToCart }: Props) {
  const { category, description, img, name, stock, unit_price } = product;
  const updateProduct = useEcommerceStore((state) => state.updateProduct);

  const { counter, decrement, increment, noStock, reset, stockLeft } = useCounter(stock);

  function onAddToCart() {
    const newProduct = {
      id: product.id,
      category,
      name,
      unit_price,
      quantity: counter,
    };

    onAddProductToCart({ ...newProduct });
    reset();
  }

  return (
    <Card>
      <CardHeader className="aspect-square">
        <img src={img} alt={name} className="w-full h-full object-fill rounded-t-xl" />
      </CardHeader>
      <CardContent className="border-t border-slate-200 p-4 space-y-3">
        <div className="flex justify-between">
          <Badge className="capitalize" variant={product.category}>
            {category}
          </Badge>
          {noStock ? (
            <Badge variant="noStock">Out of Stock</Badge>
          ) : stockLeft < 3 && stockLeft > 0 ? (
            <Badge variant="lowStock">
              Low Stock <span className="font-extrabold mx-0.5">{stockLeft}</span> left
            </Badge>
          ) : null}
        </div>
        <CardTitle>{name}</CardTitle>
        <CardDescription className="truncate">{description}</CardDescription>
        <p className="text-lg font-bold">
          $ {unit_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}
        </p>
        <p>stock: {stock}</p> <p>stockLeft: {stockLeft}</p>
      </CardContent>
      <CardFooter className="p-4">
        <div className="grid grid-cols-5 gap-4">
          <Counter
            disabled={stock === 0}
            value={counter}
            decrement={() => decrement()}
            increment={() => increment()}
          />
          <div className="col-span-3">
            <Button onClick={onAddToCart} type="button" className="w-full" disabled={counter === 0}>
              Add to cart
            </Button>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
