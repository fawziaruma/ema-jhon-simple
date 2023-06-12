import { useEffect } from "react"
import { useState } from "react"
import Product from "../Product/Product"
import './Shop.css'

export const Shop = () => {
    const [products , setProducts] = useState([])
    const [cart, setCart] = useState([])
    useEffect(() => {
        fetch('product.json')
        .then(res => res.json())
        .then(data =>  setProducts(data) )
    } )
    const handleAddToCart = (product) =>{
        const  newCart = [...cart  , product]
        setCart(newCart)
    }
  return (
    <div className="shop-container">
        <div className="products-container">
            {
            products.map(product => <Product 
             key={product.id}
             product={product}
             handleAddToCart={handleAddToCart}
             >

            </Product>)

            }

        </div>
        <div className="cart-container">
            <h4>Order summary</h4>
            <p>Selected item {cart.length} </p>
        </div>

    </div>
  )
}
export default Shop