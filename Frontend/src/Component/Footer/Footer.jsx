import React from 'react'
import "./Footer.css"
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer' id="footer">
       <div className="footer-content">
           <div className="footer-content-left">
               <img className='img'  src={assets.logo}></img>
               <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur facere id quasi optio obcaecati eligendi. Quia reprehenderit molestiae adipisci nisi mollitia sunt consequatur atque, ratione, ipsam nemo doloremque</p>
               <div className="footer-social-icons">
                   <img className='img1'  src={assets.facebook_icon} alt="" />
                   <img className='img1' src={assets.Instagram_Icon} alt="" />
                   <img className='img1' src={assets.twiter_icon} alt="" />
                   <img className='img1' src={assets.linkedIn_icon} alt="" />
               </div>
           </div>
           <div className="footer-content-center">
               <h2>COMPANY</h2>
               <ul>
                  <li>Home</li>
                  <li>About us</li>
                  <li>Delivery</li>
                  <li>Privacy Policy</li>
               </ul>
           </div>
           <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+1-2932-334-495</li>
                    <li>contact@livingLiquid.com</li>
                   
                </ul>
               
           </div>
       </div>
       <hr></hr>
       <p className="footer-copyright">Copyright 2024 @ livingliquid.com - All Right Reserved.</p>
    </div>
  )
}

export default Footer
