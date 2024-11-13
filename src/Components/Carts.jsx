import React from 'react'
import './StyleSheets/Carts.css'
import { Link } from 'react-router-dom'
const Carts = ({cart}) => {
  return (
    <div>
       <div className="card-container">
      <div className="card-img-container">
        <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cart.cloudinaryImageId}`} alt="" />
      </div>
      <div className="cart-data">
        <b>{cart.name}</b>
        <span>
          
       <b>{cart.avgRatingString} </b>
        <b>.{cart.sla.slaString}</b>
        </span> 
      <p>{cart.cuisines.join(", ")}</p>
      
      {/* <button className="cart-button">Add To cart</button> */}
      </div>
      {/* <button className="cart-button">Add to Cart</button> */}
      {/* /:${carts.id} */}
      <Link className="cart-btn1" to={`/card/${cart.id}`}>View</Link>
      
    </div>

    </div>
  )
}

export const PromotedCarts =(Carts)=>{
  return ({cart})=>{
    return(
      <div className='promo-con'>
      <b className='promo'>Promoted</b>
     <Carts cart ={cart}/>
    </div>
    )
  }
}

export default Carts
