import { useEffect, useState } from 'react';
import { useEcommerceStore } from '@/store/store';
import { Badge } from './badge';
import { Button } from './button';
import { Card, CardHeader, CardContent, CardTitle, CardDescription, CardFooter } from './card';
import { Counter } from './counter';

import type { Product } from '@/interfaces/product.interface';

export function ProductCard(product: Product) {
  const { category, description, img, name, stock, unit_price } = product;
  const addProduct = useEcommerceStore((state) => state.addProduct);
  const updateProduct = useEcommerceStore((state) => state.updateProduct);

  const [handleStock, setHandleStock] = useState({
    counter: 0,
    stockLeft: stock,
  });

  const [noStock, setNoStock] = useState<boolean>(false);

  const { counter, stockLeft } = handleStock;

  const increment = () => {
    if (stockLeft === 0) return;

    setHandleStock(({ counter, stockLeft }) => ({
      counter: counter + 1,
      stockLeft: stockLeft - 1,
    }));
  };

  const decrement = () => {
    if (counter === 0) return;

    setHandleStock(({ counter, stockLeft }) => ({
      counter: counter - 1,
      stockLeft: stockLeft + 1,
    }));
  };

  const reset = () => setHandleStock({ counter: 0, stockLeft: stock });

  function onAddProductToCart() {
    const newProduct = {
      id: product.id,
      category,
      name,
      unit_price,
      quantity: counter,
    };

    addProduct({ ...newProduct });
    updateProduct({ ...product, stock: stockLeft });
    reset();
  }

  useEffect(() => {
    if (stock === 0 || stockLeft === 0) {
      setNoStock(true);
    }
  }, [stock, stockLeft]);

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
          {noStock && <Badge variant="noStock">Out of Stock</Badge>}
          {stockLeft < 3 && stockLeft > 0 && (
            <Badge variant="lowStock">
              Low Stock <span className="font-extrabold mx-0.5">{stockLeft}</span> left
            </Badge>
          )}
        </div>
        <CardTitle>{name}</CardTitle>
        <CardDescription className="truncate">{description}</CardDescription>
        <p className="text-lg font-bold">
          $ {unit_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}
        </p>
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
            <Button
              onClick={onAddProductToCart}
              type="button"
              className="w-full"
              disabled={counter === 0}
            >
              Add to cart
            </Button>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
