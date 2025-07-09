import { Badge } from './badge';
import { Button } from './button';
import { Card, CardHeader, CardContent, CardTitle, CardDescription, CardFooter } from './card';
import { Counter } from './counter';

import type { Product } from '@/interfaces/product.interface';

export function ProductCard({ name, description, img, unit_price, type, stock }: Product) {
  return (
    <Card>
      <CardHeader className="aspect-square">
        <img src={img} alt={name} className="w-full h-full object-fill rounded-t-xl" />
      </CardHeader>
      <CardContent className="border-t border-slate-200 p-4 space-y-3">
        <div className="flex justify-between">
          <Badge className="capitalize" variant={type}>
            {type}
          </Badge>
          {stock === 0 && <Badge variant="noStock">Out of Stock</Badge>}
          {stock < 3 && stock > 0 && <Badge variant="lowStock">Low Stock {stock} left</Badge>}
        </div>
        <CardTitle>{name}</CardTitle>
        <CardDescription className="truncate">{description}</CardDescription>
        <p className="text-xl font-bold">{unit_price}</p>
      </CardContent>
      <CardFooter className="p-4">
        <div className="grid grid-cols-5 gap-4">
          <Counter />
          <div className="col-span-3">
            <Button type="button" className="w-full">
              Add to cart
            </Button>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
