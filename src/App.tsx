import { Nav } from '@/components/ui/nav';
import { ProductCard } from './components/ui/productCard';
function App() {
  return (
    <>
      <Nav />
      <main className="bg-slate-100 min-h-dvh">
        <div className="container grid grid-cols-4 gap-4">
          <section className="col-span-3 grid grid-cols-2 gap-6">
            <ProductCard />
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
