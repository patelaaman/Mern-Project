import React, { useContext } from 'react'
import "./FoodItem.css"
import { assets } from '../../assets/assets'
import { StoreContext } from '../../Context/StoreContext'
const FoodItem = ({id,name,price,description,image}) => {

    
     const {cartItems ,addToCart, removeFromCart} = useContext(StoreContext)

  return (
    <div className='food-item'> 
          <div className="food-item-img-container">
            <img className='food-item-image' src={image} alt="" />
            {
                !cartItems[id]
                   ?<img className='add' onClick={()=>addToCart(id)} src={assets.addIcon}></img>
                   :<div className='food-item-counter'>
                  <img onClick={()=>removeFromCart(id)} src={assets.redRemove} alt="" />
                  <p>{cartItems[id]}</p>
                  <img onClick={()=>addToCart(id)} src={assets.addGreen}></img>
                    </div>
            }
          </div>
          <div className="food-item-info">
            <div className="food-item-name-rating">
                <p>{name}</p>
                <img className="rating" src={assets.Rating_Starts} alt="" />
            </div>
            <p className="food-item-desc">{description}</p>
            <p className="food-item-price">${price}</p>
          </div>
    </div>
  )
}

export default FoodItem
