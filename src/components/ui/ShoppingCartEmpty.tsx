import { FileWarning } from 'lucide-react';
import { Alert } from './alert';

export function ShoppingCartEmpty() {
  return (
    <Alert>
      <FileWarning />
      Your shopping cart is empty
    </Alert>
  );
}
