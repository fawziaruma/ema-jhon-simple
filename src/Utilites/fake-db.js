// use localstorage to manage a cart data
const addToDb = (id) =>{
let  shoppingCart = getShoppingCart();

 //add quantity
 const  quantity = shoppingCart[id]
 if(!quantity){
    shoppingCart[id] = 1
 }
 else{
    const newQuantitt = quantity + 1;
    shoppingCart [id] = newQuantitt
 }

 localStorage.setItem('shopping-cart' , JSON.stringify(shoppingCart)  )



}

const removeToDb = (id) =>{
const shoppingCart = getShoppingCart()
if(id in shoppingCart ){
   delete shoppingCart[id];
   localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart))
}
}

const getShoppingCart = () =>{
   let shoppinhCart = {}

   // get the shopping cart form local storage 
   const  storedCart =  localStorage.getItem('shopping-cart')

   if(storedCart){
    shoppinhCart = JSON.parse(storedCart)
   }

   return shoppinhCart
}

const deletShoppingCart = () =>{
   localStorage.removeItem('shopping-cart')

}

export{addToDb, getShoppingCart, removeToDb, deletShoppingCart}