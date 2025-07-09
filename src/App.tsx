import { Layout } from '@/components/layout';
import { ProductSection } from './components/ui/productSection';
import { ShoppingCartAside } from './components/ui/shoppingCartAside';
import { useEcommerceStore } from './store/store';

function App() {
  const products = useEcommerceStore((state) => state.products);
  console.log(products);
  return (
    <Layout>
      <ProductSection />
      <ShoppingCartAside />
    </Layout>
  );
}

export default App;
