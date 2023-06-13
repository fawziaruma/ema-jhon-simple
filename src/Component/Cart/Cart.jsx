

const Cart = ({cart}) => {
    let totalPrice = 0;
    let totalShipping = 0;
    let quantity = 0;


    for(const product  of cart){
        totalPrice =  totalPrice +  product.price  * product.quantity;
        totalShipping = totalShipping + product.shipping;
        quantity = quantity + product.quantity
    }

    const tax = totalPrice * 7 /100
    const grandTotal = totalPrice + totalShipping + tax
  
  return (
    <div className="cart" >

      <h4>OrderSummary</h4>
      <p>Selected Item : { quantity} </p>
      <p>Total price :  ${totalPrice}  </p>
      <p>Shipping: ${totalShipping}  </p>
      <p>Tax : ${tax}  </p>
      <h6>Grand Total : $ {grandTotal}  </h6>

    </div>
  )
}

export default Cart