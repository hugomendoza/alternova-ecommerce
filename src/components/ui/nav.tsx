import { LogoTechSphere } from '@/assets/svg/logo-techsphere';
import { ShoppingBasket } from 'lucide-react';
import { Badge } from './badge';

export function Nav() {
  return (
    <nav>
      <div className="container flex items-center justify-between p-4">
        <div className="flex items-center gap-2">
          <LogoTechSphere />
          <h1 className="text-xl font-bold">TechSphere</h1>
        </div>
        <div className="flex items-center gap-1">
          <ShoppingBasket className="size-6 text-slate-400" />
          <Badge variant="shopping" className="size-5">
            3
          </Badge>
        </div>
      </div>
    </nav>
  );
}
