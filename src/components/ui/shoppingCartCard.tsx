import { Trash2 } from 'lucide-react';
import { Button } from './button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from './card';
import { Badge } from './badge';
import { Counter } from './counter';

import type { CartItem } from '@/interfaces/product.interface';
import { useEcommerceStore } from '@/store/store';

export function ShoppingCartCard(product: CartItem) {
  const removeProduct = useEcommerceStore((state) => state.removeProduct);
  const restoreProduct = useEcommerceStore((state) => state.restoreProduct);

  const { id, category, name, unit_price, quantity } = product;

  // const { counter, decrement, increment } = useCounter({
  //   initialValue: quantity,
  //   stock,
  // });

  // console.log(stock);

  function onRemoveProduct(id: number) {
    removeProduct(id);
    // restoreProduct(product);
  }

  return (
    <Card className="rounded-none border-0 border-b-2 border-b-slate-200 hover:shadow-none space-y-4 py-3">
      <CardHeader className="flex justify-between items-center">
        <div className="space-y-2">
          <CardTitle className="text-base">{name}</CardTitle>
          <Badge>{category}</Badge>
          <CardDescription>
            $ {unit_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')} each
          </CardDescription>
        </div>
        <Button
          variant="ghost"
          className="text-red-500/70 h-auto size-12 p-0 has-[>svg]:px-0 [&_svg:not([class*='size-'])]:size-5"
          onClick={() => onRemoveProduct(id)}
        >
          <Trash2 />
        </Button>
      </CardHeader>
      <CardContent className="p-0">
        <div className="grid grid-cols-4 gap-4">
          {/* <Counter value={counter} decrement={() => decrement()} increment={() => increment()} /> */}
          {quantity}
          <div className="col-span-2 text-right">
            <p className="text-lg font-bold">
              $ {unit_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
