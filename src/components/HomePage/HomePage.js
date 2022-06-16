import React from 'react'
import { NavBar } from '../NavBar/NavBar'
import { UsDesc } from '../UsDesc/UsDesc'
import "./HomePage.scss"

export const HomePage = () => {
  return (
    <div className="home_relative">
        <NavBar/>
        <div className='wemakeit'>
        <h1 >LO HACEMOS <b>SIMPLE.</b></h1>
        {/* a traves de la mejor atencion (idea para erased typed) */}
        <h2>A través de <b>soluciones tecnológicas</b></h2>
        <img className='img_restpage' src="https://i.ibb.co/xJdRCK0/backrep.png"/>

        </div>
        <UsDesc/>
    </div>
  )
}
