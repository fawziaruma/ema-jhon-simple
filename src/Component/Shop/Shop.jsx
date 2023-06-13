import { useEffect } from "react"
import { useState } from "react"
import Product from "../Product/Product"
import './Shop.css'
import { addToDb, getShoppingCart } from "../../Utilites/fake-db"
import Cart from "../Cart/Cart"

export const Shop = () => {
    const [products , setProducts] = useState([])

    const [cart, setCart] = useState([])

    useEffect(() => {
        fetch('product.json')
        .then(res => res.json())
        .then(data =>  setProducts(data) )
    } ,[])

    useEffect(() =>{
        const stroedCart = getShoppingCart()
        const savedCart = []
        // step 1. get id of the addproduct
        for(const id in stroedCart){
            // step 2. get product from products state by using id
            const addProduct = products.find(product => product.id === id ) 
            if(addProduct){
                // step3. add quantity
                const quantity = stroedCart[id]
                addProduct.quantity = quantity
                // add the add Product to the save cart
                savedCart.push(addProduct)

            }
        }
        // step 5. set the cart
        setCart(savedCart)

    },[products])



    const handleAddToCart = (product) =>{
    //  cart . push(product)
    let newCart = []
    // if product doesn't exist in the cart than set quantity = 1
    // if exist update qunatity by 1

    const exist = cart.find(pd => pd.id === product.id)
    if(!exist){
        product.quantity = 1
        newCart = [...cart, product]
    }
    else{
        exist.quantity = exist.quantity +1
        const remaining = cart.filter(pd => pd.id !== product.id)
        newCart = [...remaining, exist]
    }

        setCart(newCart)
        addToDb(product.id)

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
           <Cart cart = {cart} ></Cart>
        </div>

    </div>
  )
}
export default Shop