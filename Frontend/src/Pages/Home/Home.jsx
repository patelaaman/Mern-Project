import { useState } from "react"
import ExploreMenu from "../../Component/Navbar/ExploreMenu/ExploreMenu"
import Header from "../../Component/Navbar/Header/Header"
import "./Home.css"
import FoodDisplay from "../../Component/FoodDisplay/FoodDisplay"
import AppDownload from "../../Component/AppDownload/AppDownload"

const Home=()=>{
    const [category,setCategory] = useState('All')
    return(
        <>
        <Header></Header>
        <ExploreMenu category={category} setCategory={setCategory}></ExploreMenu>
        <FoodDisplay category={category}></FoodDisplay>
        <AppDownload></AppDownload>
        </>
    )
}
export default Home