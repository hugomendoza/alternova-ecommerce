import { DollarSignIcon } from 'lucide-react';
import { Button } from './button';

// TODO: Replace `any` with the correct type for the total
interface ShoppingCartSummaryProps {
  total: number;
}

export function ShoppingCartSummary({ total }: ShoppingCartSummaryProps) {
  return (
    <>
      <div className="flex justify-between my-4 text-lg font-bold">
        <p>Total Order Price</p>
        <p>{total}</p>
      </div>
      <div>
        <Button variant="secondary" className="w-full">
          <DollarSignIcon />
          <p>Create order</p>
        </Button>
      </div>
    </>
  );
}
