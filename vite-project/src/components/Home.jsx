import CustomCarousel from "../carousel/Carousel1"
import HomeImage1 from "../Images/Image1"
import HomeImage2 from "../Images/Image2"
import HomeFooter from "./Footer"
import "../styles/Home.css"

const Home=()=>{
    return(
        <div>
            <CustomCarousel/>
            <div id="box1">
                <h1 className="text-4xl font-bold">The right support is everything</h1>
                <p className="pl-40 pt-3 ">Ventilated fabrics fuel your pace. Lightweight stretch offers freedom to go further. 
                   </p>
            </div>
            <HomeImage1/>
            <h1 className="text-5xl font-bold text-center pt-14">Run with this gear</h1>
            <HomeImage2/>
            <HomeFooter/>
        </div>
    )
}

export default Home