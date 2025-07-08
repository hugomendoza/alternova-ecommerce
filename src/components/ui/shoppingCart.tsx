import { FileWarning, DollarSignIcon } from 'lucide-react';
import { Alert } from './alert';
import { Button } from './button';
import { ShoppingCartCard } from './shoppingCartCard';

export function ShoppingCart() {
  return (
    <div className="bg-white p-6 rounded-2xl border border-slate-200">
      <Alert>
        <FileWarning />
        Your shopping cart is empty
      </Alert>
      <ShoppingCartCard />
      <div className="flex justify-between my-4 text-lg font-bold">
        <p>Total Order Price</p>
        <p>$899.96</p>
      </div>
      <div>
        <Button variant="secondary" className="w-full">
          <DollarSignIcon />
          <p>Create order</p>
        </Button>
      </div>
    </div>
  );
}
