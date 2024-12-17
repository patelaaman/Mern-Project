import React, { useState } from 'react'
import "./Add.css"
import { assets } from '../../assets/assets'
import axios from "axios"
const Add = () => {

const url = "http://localhost:4000"
const [image, setImage] = useState(false)
const [data,setData] = useState({
    name:"",
    description:"",
    price:"",
    category:"Wine"
})

   const onChangeHandler = (event)=>{
     const name = event.target.name;
     const value = event.target.value;
     setData(data=>({...data,[name]:value}))
   } 

   const onSubmitHander =async(event)=>{
       event.preventDefault();
       const formData = new FormData();
       formData.append("name",data.name)
       formData.append("description",data.description)
       formData.append("price",Number(data.price))
       formData.append("category",data.category)
       formData.append("image",image)
       const response = await axios.post(`${url}/api/food/add`,formData)
       if(response.data.success){
          setData({
            name:"",
            description:"",
            price:"",
            category:"Wine"
          })
          setImage(false)
       }
       else{

       }

   }
  
  return (
    <div className='add'>
        <form className='flex-col' onSubmit={onSubmitHander}>
          <div className="add-image-upload flex-col">
            <p>Upload Image</p>
            <label htmlFor='image'>
                <img src={image?URL.createObjectURL(image):assets.uploadArea}></img>
            </label>
         <input onChange={(e)=>setImage(e.target.files[0])} type='file' id="image" hidden required></input>
          </div>
          <div className="add-product-name flex-col">
            <p>Product Name</p>
            <input onChange={onChangeHandler} value={data.name}  type='text' name="name" placeholder='type here'></input>
          </div>
          <div className="add-product-description flex-col">
            <p>Product Description</p>
            <textarea  onChange={onChangeHandler} value={data.description} name="description" rows="6" placeholder='write content here'></textarea>
          </div>
          <div className='add-category-price'>
            <div className="add-category">
                <p>Product category</p>
                <select name='category'>
                    <option value="Wine">Wine</option>
                    <option value="New Arrival">New Arrival</option>
                    <option value="Cigar&Cig">Cigar&Cig</option>
                    <option value="Spirits">Spirits</option>
                </select>
            </div>
            <div className="add-price flex-col">
                <p>Prouduct Price</p>
                <input onChange={onChangeHandler} value={data.price} type="Number" name="price" placeholder='$20'></input>
            </div>
          </div >
          <button onClick={onSubmitHander} type="submit" className='add-btn'>ADD</button>
        </form>
      
    </div>
  )
}

export default Add
