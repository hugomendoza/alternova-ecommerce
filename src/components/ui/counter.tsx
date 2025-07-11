import { Minus, Plus } from 'lucide-react';
import { Button } from './button';
import { Input } from './input';

interface Props {
  value: number;
  disabled?: boolean;
  increment: () => void;
  decrement: () => void;
}

export function Counter({ value = 0, decrement, increment, disabled = false }: Props) {
  return (
    <div className="flex col-span-2 border border-slate-200 rounded-lg">
      <Button
        onClick={decrement}
        variant="ghost"
        className="flex-1 has-[>svg]:px-0"
        type="button"
        disabled={disabled}
      >
        <Minus />
      </Button>
      <Input disabled={disabled} className="flex-1 text-black" type="text" value={value} readOnly />
      <Button
        onClick={increment}
        variant="ghost"
        className="flex-1 has-[>svg]:px-0"
        type="button"
        disabled={disabled}
      >
        <Plus />
      </Button>
    </div>
  );
}
