import { Minus, Plus } from 'lucide-react';
import { Badge } from './badge';
import { Button } from './button';
import { Card, CardHeader, CardContent, CardTitle, CardDescription } from './card';
import { Input } from './input';

export function ProductCard() {
  return (
    <Card>
      <CardHeader className="aspect-square">
        <img
          src="../src/assets/products/balon-de-futbol.jpg"
          alt="Nombre de producto"
          className="w-full h-full object-fill rounded-xl"
        />
      </CardHeader>
      <CardContent className="border-t border-slate-200 p-4 space-y-2">
        <div className="flex justify-between">
          <Badge>technology</Badge>
          <Badge>Out of Stock</Badge>
          <Badge>Low stock (3 left)</Badge>
        </div>
        <CardTitle>Control joystick inalámbrico</CardTitle>
        <CardDescription>
          Convierte tu sala de estar en un circuito de carreras profesional con este control de
          juego de alta calidad.
        </CardDescription>
        <p>$200</p>
        <form className="grid grid-cols-5 gap-4">
          <fieldset className="flex col-span-2 border border-slate-200 rounded-lg">
            <Button variant="ghost" className="flex-1" type="button">
              <Minus />
            </Button>
            <Input className="flex-1" type="text" value={0} />
            <Button variant="ghost" className="flex-1" type="button">
              <Plus />
            </Button>
          </fieldset>
          <fieldset className="col-span-3">
            <Button type="button" className="w-full">
              add to cart
            </Button>
          </fieldset>
        </form>
      </CardContent>
    </Card>
  );
}
