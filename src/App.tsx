import { Layout } from '@/components/layout';
import { ProductSection } from './components/ui/productSection';
import { ShoppingCartAside } from './components/ui/shoppingCartAside';

function App() {
  return (
    <Layout>
      <ProductSection />
      <ShoppingCartAside />
    </Layout>
  );
}

export default App;

