import {  useContext, useState } from "react"
import React from 'react' 
import "./LoginPopup.css"
import { assets } from "../../assets/assets"
import { StoreContext } from "../../Context/StoreContext"
import axios from "axios"
const LoginPopup = ({setShowLogin}) => {

  const {url,setToken} = useContext(StoreContext);
    
    const [currState,setCurrState] = useState("Login")
    const [data ,setData] = useState({
      name:"",
      email:"",
      password:""
    })
  

    const onChangeHandler = (event)=>{
      const name  = event.target.name;
      const value  = event.target.value;

      setData(data=>({...data,[name]:value}))
    }

     const onLogin = async(event)=>{
         event.preventDefault();
         let newUrl = url;
         if(currState==="Login"){
            newUrl += "/api/admin/login"
         }
         else{
            newUrl  += "/api/admin/register"
         }

         const  response = await axios.post(newUrl,data);

         if(response.data.success){
             setToken(response.data.token);
             localStorage.setItem("token",response.data.token);

             setShowLogin(false)
         }
         else{
          alert(response.data.message)
         }
     }
    


  return (
    <div className='login-popup'>
       <form  onSubmit={onLogin} className="login-popup-container">
          <div className="login-popup-title">
             <h2>{currState}</h2>
             <img onClick={()=>setShowLogin(false)} src={assets.close} alt="" />
          </div>
          <div className="login-popup-input">
            {currState==="Login"?<></>:<input  name="name" onChange={onChangeHandler} value={data.name} type="text" placeholder="Your name" required></input>}
            <input  name="email" onChange={onChangeHandler} value={data.email} type="email" placeholder="Your email" required></input>
            <input  name="password" onChange={onChangeHandler} value={data.password} type="password" placeholder="Password" required></input>
          </div>
          <button type="submit">{currState==="Sign Up"?"Create account":"Login"}</button>
          <div className="login-popup-condition">
               <input type="checkbox" required></input>
               <p>By Continuing, I agree to the Terms of use & Privacy Policy</p>
          </div>
          {
            currState==="Login"
            ?<p>Create a new account <span onClick={()=>setCurrState("Sign Up")}>Click here</span></p>
            :<p>Already have an account?<span onClick={()=>setCurrState("Login")}>Login here</span></p>
          }

       </form>
    </div>
  )
}

export default LoginPopup
