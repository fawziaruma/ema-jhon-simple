import { useEffect } from "react"
import { useState } from "react"
import Product from "../Product/Product"
import './Shop.css'

export const Shop = () => {
    const [products , setProducts] = useState([])
    useEffect(() => {
        fetch('product.json')
        .then(res => res.json())
        .then(data =>  setProducts(data) )
    } )
  return (
    <div className="shop-container">
        <div className="products-container">
            {
            products.map(product => <Product 
             key={product.id}
             product={product}
             >

            </Product>)

            }

        </div>
        <div className="cart-container">

        </div>

    </div>
  )
}
