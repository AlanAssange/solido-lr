import React from 'react'
import { Footer } from '../Footer/Footer'
import { Header } from '../Header/Header'
import { OurServs } from '../OurServs/OurServs'
import { UsDesc } from '../UsDesc/UsDesc'
import { Testimonials } from "../Testimonials/Testimonials"
import "./HomePage.scss"



export const HomePage = () => {
  return (
    <div className="home_relative">
        <Header/>
        <UsDesc/>
        <OurServs/>
        <Testimonials/>
        <Footer/>
    </div>
  )
}
