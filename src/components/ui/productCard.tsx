import { useEcommerceStore } from '@/store/store';
import { Badge } from './badge';
import { Button } from './button';
import { Card, CardHeader, CardContent, CardTitle, CardDescription, CardFooter } from './card';
import { Counter } from './counter';

import type { Product } from '@/interfaces/product.interface';

export function ProductCard(product: Product) {
  const { category, description, img, name, stock, unit_price } = product;

  const addProduct = useEcommerceStore((state) => state.addProduct);

  function onAddProductToCart() {
    addProduct(product);
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
          {stock === 0 && <Badge variant="noStock">Out of Stock</Badge>}
          {stock < 3 && stock > 0 && (
            <Badge variant="lowStock">
              Low Stock <span className="font-extrabold mx-0.5">{stock}</span> left
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
          <Counter />
          <div className="col-span-3">
            <Button onClick={onAddProductToCart} type="button" className="w-full">
              Add to cart
            </Button>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
