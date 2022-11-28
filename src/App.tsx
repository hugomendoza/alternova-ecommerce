import { Key } from "react";
import { Button, Card, Nav } from "./components"
import products from "./data/products.json"
console.log(products.products)

function App() {

  const onClick = () => {
    console.log("CLick")
  }

  return (
    <>
      <Nav to="buy" />

      <section>
        <div className="container flex flex-wrap mx-auto mt-10">
          <article className="lg:w-9/12 px-4">
            <div className="grid grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 gap-6">
              {
                products.products.map((product) => (
                  <Card
                    key={product.name}
                    {...product}
                    onPress={onClick}
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
              <article className="flex py-6">
                <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                  <img src="https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg" alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt." className="h-full w-full object-cover object-center" />
                </div>
                <div className="ml-4 flex flex-1 flex-col">
                  <div>
                    <div className="flex justify-between text-base font-medium text-gray-900">
                      <h3>
                        Throwback Hip Bag
                      </h3>
                      <p className="ml-4">$90.00</p>
                    </div>
                  </div>
                  <div className="flex flex-1 items-end justify-between text-sm">
                    <p className="text-gray-500">Cantidad: 1</p>
                    <div className="flex">
                      <button type="button" className="font-medium text-indigo-600 hover:text-indigo-500">Remove</button>
                    </div>
                  </div>
                </div>
              </article>
              <article className="flex py-6">
                <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                  <img src="https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg" alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt." className="h-full w-full object-cover object-center" />
                </div>
                <div className="ml-4 flex flex-1 flex-col">
                  <div>
                    <div className="flex justify-between text-base font-medium text-gray-900">
                      <h3>
                        Throwback Hip Bag
                      </h3>
                      <p className="ml-4">$90.00</p>
                    </div>
                  </div>
                  <div className="flex flex-1 items-end justify-between text-sm">
                    <p className="text-gray-500">Cantidad: 1</p>
                    <div className="flex">
                      <button type="button" className="font-medium text-indigo-600 hover:text-indigo-500">Remove</button>
                    </div>
                  </div>
                </div>
              </article>
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
