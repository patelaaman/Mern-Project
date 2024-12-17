import React from 'react'
import "./ExploreMenu.css"
import { menu_list } from '../../../assets/assets'
const ExploreMenu = ({category,setCategory}) => {

  return (
    <>
    <div className='explore-menu' id="explore-menu">
      <h1>Explore Our Menu</h1>
      <p className='explore-menu-text'>choose from a diverse menu featuring  a delectable  array of Liquid  crafted with the finest ingredients culinary  expertise. Our satisfy your cravings and elevate 
                your living experience, one  liquid at a time.
      </p>
      <div className='explore-menu-list'>
         {menu_list.map((item,index)=>{
            return(
                <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className="explore-menu-list-item">
                    <img className={category===item.menu_name?"active":""} src={item.menu_image} alt=""></img>
                    <p>{item.menu_name}</p>
                </div>

            )
         })}
      </div>
      <hr></hr>
    </div>
    </>
  )
}

export default ExploreMenu