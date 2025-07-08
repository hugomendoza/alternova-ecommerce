import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const badgeVariants = cva(
  'inline-flex items-center justify-center rounded-lg border px-2 py-0.5 text-xs font-medium',
  {
    variants: {
      variant: {
        default: 'border-slate-400 bg-slate-300 text-slate-700',
        technology: 'border-purple-400 bg-purple-200 text-purple-700',
        sport: 'border-teal-400 bg-teal-200 text-teal-700',
        building: 'border-violet-400 bg-violet-200 text-violet-700',
        lowStock: 'border-red-400 bg-transparent text-red-500/75',
        noStock: 'border-red-500/80 bg-red-500/80 text-white',
        shopping: 'border-transparent bg-red-500/75 text-white rounded-md',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);

function Badge({
  className,
  variant,
  asChild = false,
  ...props
}: React.ComponentProps<'span'> & VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : 'span';

  return (
    <Comp data-slot="badge" className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge };
