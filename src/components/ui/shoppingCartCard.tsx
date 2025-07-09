import { Trash2, Minus, Plus } from 'lucide-react';
import { Button } from './button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from './card';
import { Input } from './input';
import { Badge } from './badge';

export function ShoppingCartCard() {
  return (
    <Card className="rounded-none border-0 border-b-2 border-b-slate-200 hover:shadow-none space-y-4 py-3">
      <CardHeader className="flex justify-between items-center">
        <div className="space-y-2">
          <CardTitle className="text-base">Control joystick inalámbrico</CardTitle>
          <Badge>Wearebles</Badge>
          <CardDescription>$299.00 each</CardDescription>
        </div>
        <Button
          variant="ghost"
          className="text-red-500/70 h-auto size-12 p-0 has-[>svg]:px-0 [&_svg:not([class*='size-'])]:size-5"
        >
          <Trash2 />
        </Button>
      </CardHeader>
      <CardContent className="p-0">
        <div className="flex justify-between items-center">
          <div className="flex col-span-2 border border-slate-200 rounded-lg w-1/2">
            <Button variant="ghost" className="flex-1 has-[>svg]:px-0" type="button">
              <Minus />
            </Button>
            <Input className="flex-1" type="text" value="0" readOnly />
            <Button variant="ghost" className="flex-1 has-[>svg]:px-0" type="button">
              <Plus />
            </Button>
          </div>
          <div>
            <p className="text-lg font-bold">$399</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
