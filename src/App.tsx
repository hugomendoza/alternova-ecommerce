import { ShoppingBasket } from 'lucide-react';
import { LogoTechSphere } from './assets/svg/logo-techsphere';

function App() {
  return (
    <>
      <header className="bg-white">
        <div className="container flex justify-between">
          <div className="flex">
            <LogoTechSphere />
            <h1>TechSphere</h1>
          </div>
          <div className="flex">
            <ShoppingBasket />
            <span>0</span>
          </div>
        </div>
      </header>
      <main className="bg-slate-100 min-h-dvh">
        <div className="container grid grid-cols-4 gap-4">
          <section className="col-span-3 grid grid-cols-3 gap-4">
            <h2 className="bg-slate-400 h-24">Productos</h2>
            <h2 className="bg-slate-400 h-24">Productos</h2>
            <h2 className="bg-slate-400 h-24">Productos</h2>
            <h2 className="bg-slate-400 h-24">Productos</h2>
            <h2 className="bg-slate-400 h-24">Productos</h2>
            <h2 className="bg-slate-400 h-24">Productos</h2>
            <h2 className="bg-slate-400 h-24">Productos</h2>
          </section>
          <aside>
            <h2>Carrito</h2>
          </aside>
        </div>
      </main>
    </>
  );
}

export default App;
