import { Nav } from '@/components/ui/nav';
import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <>
      <Nav />
      <main className="bg-slate-100 min-h-dvh">
        <div className="container grid grid-cols-12 gap-4">{children}</div>
      </main>
    </>
  );
}
