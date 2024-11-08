import React from 'react'
import "./home.css"
import Navbar from "../../components/Navbar/navbar"
import hero_banner from "../../assets/hero_banner.jpg"
import hero_title from "../../assets/hero_title.png"
import play_icon from "../../assets/play_icon.png"
import info_icon from "../../assets/info_icon.png"
import TitleCards from "../../components/Title-cards/titleCards"
import Footer from "../../components/Footer/footer"

const home = () => {
  return (
    <>
     <div className='home'>
       <Navbar/>
       <div className="hero">
        <img src={hero_banner} alt="" className='banner-img'/>
        <div className="hero-caption">
            <img src={hero_title} alt="" className='caption-img'/>
            <p>You can use the bank account shown below to make your payment and the following URL can be used to make GPay or UPI payments
            </p>
            <div className="hero-btns">
                <button className='btn'><img src={play_icon} alt="" />Play</button>
                <button className='btn dark-btn'><img src={info_icon} alt="" />More Info</button>
            </div>
            <TitleCards/>
        </div>
       </div>
       <div className='more-cards'>
       <TitleCards title={"Blockbuster Movies"} catogery={"top_rated"}/>
       <TitleCards title={"Only on Netflix"} catogery={"popular"}/>
       <TitleCards title={"Upcoming"} catogery={"upcoming"}/>
       <TitleCards title={"Top picks for you"} catogery={"now_playing"}/>
       </div>
       <Footer/>
     </div>
    </>
   
  )
}

export default home