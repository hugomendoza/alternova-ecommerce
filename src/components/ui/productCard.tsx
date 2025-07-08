import { Minus, Plus } from 'lucide-react';
import { Badge } from './badge';
import { Button } from './button';
import { Card, CardHeader, CardContent, CardTitle, CardDescription, CardFooter } from './card';
import { Input } from './input';
import { useState } from 'react';

export function ProductCard() {
  const [counter, setCounter] = useState<number>(0);

  function onIncreaseCounter() {
    setCounter(counter + 1);
  }

  function onDecreaseCounter() {
    if (counter === 0) return;
    setCounter(counter - 1);
  }

  return (
    <Card>
      <CardHeader className="aspect-square">
        <img
          src="../src/assets/products/balon-de-futbol.jpg"
          alt="Nombre de producto"
          className="w-full h-full object-fill rounded-xl"
        />
      </CardHeader>
      <CardContent className="border-t border-slate-200 p-4 space-y-3">
        <div className="flex justify-between">
          <Badge variant="sport">technology</Badge>
          <Badge variant="building">Out of Stock</Badge>
        </div>
        <CardTitle>Control joystick inalámbrico</CardTitle>
        <CardDescription className="truncate">
          Convierte tu sala de estar en un circuito de carreras profesional con este control de
          juego de alta calidad.
        </CardDescription>
        <p className="text-xl font-bold">$200</p>
      </CardContent>
      <CardFooter className="p-4">
        <div className="grid grid-cols-5 gap-4">
          <div className="flex col-span-2 border border-slate-200 rounded-lg">
            <Button
              onClick={onDecreaseCounter}
              variant="ghost"
              className="flex-1 has-[>svg]:px-0"
              type="button"
            >
              <Minus />
            </Button>
            <Input className="flex-1 text-black" type="text" value="0" />
            <Button
              onClick={onIncreaseCounter}
              variant="ghost"
              className="flex-1 has-[>svg]:px-0"
              type="button"
            >
              <Plus />
            </Button>
          </div>
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
