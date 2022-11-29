import {useState} from "react";
import { Card, Nav, Shopping } from "./components"
import products from "./data/products.json"
console.log(products.products)

function App() {

  interface PropsBuying {
    id: number;
    stock: number;
  }
  
  const [cart, setCart] = useState<PropsBuying[]>([])

  const onClick = ({id, stock}:PropsBuying) => {
    const buyItem = {
      id:id,
      stock: stock
    }
    buyItem.stock === 0 ? console.log("No hay Stock") : setCart([...cart, buyItem])
  }

  return (
    <>
      <Nav to="buy" />

      <section>
        <div className="container flex flex-wrap mx-auto py-10">
          <article className="lg:w-9/12 px-4">
            <div className="grid grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 gap-6">
              {
                products.products.map((product) => (
                  <Card
                    key={product.id}
                    {...product}
                    onPress={() => {onClick(product)}}
                  />
                ))
              }
            </div>
          </article>
          <aside
            className="w-full lg:w-3/12 px-4 2xl:px-8 mt-8 lg:mt-0"
            id="buy"
          >
            <h2 className="text-xl font-bold">Shopping Cart</h2>
            <div className="divide-y divide-gray-200">
              {
                cart.map(() =>(
                  <Shopping />
                ))
              }
              <article className="border-t border-gray-200 py-6">
                <div className="flex justify-between text-base font-medium text-gray-900">
                  <p>Total</p>
                  <p>$262.00</p>
                </div>
                <div className="mt-6">
                  <a href="#" className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700">Create order</a>
                </div>
              </article>
            </div>
          </aside>
        </div>
      </section>
    </>
  )
}


export default App
