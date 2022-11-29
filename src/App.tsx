import React, {useEffect, useState} from "react";

import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

import { Alert, Button, Card, Nav, Shopping } from "./components"

import products from "./data/products.json"
console.log(products.products)

function App() {

  interface PropsBuying {
    id: number;
    img: string,
    name: string,
    stock: number;
    type: string;
    unit_price: number;
    cant?: number;
  }
  
  const [cart, setCart] = useState<PropsBuying[]>([])
  const [number, setNumber] = useState("");
  const [orderTotal, setOrderTotal] = useState(0);

  const onInputChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setNumber(e.target.value);
  }

  const onClick = ({id, img, name, stock, type, unit_price}:PropsBuying) => {
    const buyItem = {
      id,
      img,
      name,
      stock,
      type,
      cant: Number(number),
      unit_price,
    }

    if(buyItem.stock === 0) {
      Swal.fire(
        {
          title: "Lo sentimos",
          text: "No tenemos en inventario este producto",
          icon: "error",
        }
      )
    }
    else if (buyItem.cant === 0) {
      Swal.fire(
        {
          title: "Lo sentimos",
          text: "Debes seleccionar una cantidad",
          icon: "error",
        }
      )
    }
    else if (buyItem.stock < buyItem.cant) {
      Swal.fire(
        {
          title: "Lo sentimos",
          text: `Solo tenemos ${buyItem.stock} en inventario`,
          icon: "error",
        }
      )
    } else {
      setCart([...cart, buyItem])
      setNumber("")
    }
  }
  const totalValue: number[] = [];
  const initialValue = 0;
  cart && cart.map((e) =>{
    e.cant != undefined && totalValue.push(e.unit_price * e.cant)
  })

  const onBuy = () => {
    setCart([])
    Swal.fire(
      {
        title: "Felicitaciones",
        text: `Tu comprar ha sido completada`,
        icon: "success",
      }
    )
  }
  
  useEffect(() => {
    setOrderTotal(totalValue.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue))
  }, [cart])
  
  return (
    <>
      <Nav
        to="buy"
        items={cart.length}
      />
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
                    onChange={onInputChange}
                    value={number}
                  />
                ))
              }
            </div>
          </article>
          <aside
            className="w-full lg:w-3/12 px-4 2xl:px-8 mt-8 lg:mt-0"
            id="buy"
          > 
            {
              cart.length > 0
              ?
              <>
                  <h2 className="text-xl font-bold">Shopping Cart</h2>
                  <div className="divide-y divide-gray-200">
                    {
                      (cart as PropsBuying[]).map((item) =>(
                          <Shopping
                            key={item.id}
                            {...item}
                          />
                        ))
                      }
                    <article className="border-t border-gray-200 py-6">
                      <div className="flex justify-between text-base font-medium text-gray-900">
                        <p>Total</p>
                        <p>$ {orderTotal}</p>
                      </div>
                      <div className="mt-6">
                        <Button
                          name="Comprar"
                          onPress={onBuy}
                        />
                      </div>
                    </article>
                  </div>
                </>
              :
                <Alert />
            }
          </aside>
        </div>
      </section>
    </>
  )
}


export default App
