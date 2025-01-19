import { useContext, useState } from "react"
import { assets } from "../../assets/assets"
import "./Navbar.css"
import {Link, useNavigate} from "react-router-dom"
import { StoreContext } from "../../Context/StoreContext"

const Navbar =({setShowLogin})=>{
    const [ menu,setMenu] = useState("home")

    const {getTotalCartAmount,token, setToken} =  useContext(StoreContext);

     const navigate = useNavigate();

     const  logout=()=>{
         localStorage.removeItem("token");
         setToken("");
         navigate("/")

     }
    return(
        <>
        <div className="navbar">
          <Link to="/">  <img src={assets.logo} alt=""  className="logo" height="40px" width="100"></img></Link>
             <ul className="navbar-menu">
                <Link to='/' onClick={()=>setMenu("home")} className={menu==="home"?"active":""}>Home</Link>
                <a href="#explore-menu" onClick={()=>setMenu("menu")} className={menu==="menu"?"active":""}>Menu</a>
                <a href="#app-download" onClick={()=>setMenu("liquid-app")} className={menu==="liquid-app"?"active":""}>Liquid-App</a>
                <a href="#footer" onClick={()=>setMenu("contact-us")} className={menu==="contact-us"?"active":""}>Contact us</a>
             </ul>
             <div className="navbar-right">
                <img src={assets.search_Icon} alt="" height="20px" width="20" />
                <div className="navbar-search-icon">
                   <Link to="/cart"> <img src={assets.basket_Icon} alt="" height="20px" width="30"/></Link>
                   
                      <div className={getTotalCartAmount()===0?"":"dot"}>
                    </div>
                </div>
                {!token? <button onClick={()=>setShowLogin(true)}>sign in</button>
                :<div className="navbar-profile">
                  <img src={assets.profile_icon} alt=""></img>
                  <ul className="nav-profile-dropdown">
                     <li onClick={()=>navigate('/myorders')}><img src={assets.bag_icon}></img><p>Orders</p></li>
                         <hr></hr>
                     <li  onClick={logout}><img src={assets.log}></img><p>Logout</p></li>
                  </ul>
                  </div>}
             </div>
        </div>
        </>
    )
}
export default Navbar