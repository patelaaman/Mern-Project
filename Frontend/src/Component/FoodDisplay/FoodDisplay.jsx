import React, { useContext } from 'react'
import "./FoodDisplay.css"
import { StoreContext } from '../../Context/StoreContext'
import FoodItem from '../FoodItem/FoodItem'
const FoodDisplay = ({category}) => {

    const  {Liquid_list} =  useContext(StoreContext)

  return (
    <div>
        <div className="food-display" id="food-display">
           <h2>Top Bottega near you  </h2>
           <div className="food-display-list">
              {Liquid_list.map((item,index)=>{
                if(category="All" || category=== item.category){
                    return <FoodItem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image}></FoodItem>
                }
                 
              })}
           </div>
        </div>
    </div>
  )
}

export default FoodDisplay
