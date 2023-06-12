import "./Product.css"

const Product = (props) => {
  
    const {img , name , seller , price, ratingsCount} = props.product;
    const shortName = name.slice(0 , 17)
    const  handleAddToCart = props.handleAddToCart
  return (
    <div className="product" >
      <img src={img} alt="" />
      <div className="product-info">
        <h6 className="product-name" > { shortName}  </h6>
        <p>Manufacture : {seller} </p>
        <p>price : ${ price } </p>
        <p>Rating: {ratingsCount}</p>
      </div>
      <button  onClick={ () => handleAddToCart(props.product)  }
       className="btn-cart" >
        Add to Cart</button>
    </div>
  )
}

export default Product