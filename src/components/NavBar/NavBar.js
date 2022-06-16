import React from 'react'
import solidoc from "../../media/Imgs/solidoic.png"
import "./NavBar.scss"

export const NavBar = () => {
  return (
	<>
  
		<nav className="nav_sec">

          <img src={solidoc} className="logo"/>
          <ul>
            <li><a>INICIO</a></li> 
            <li><a href="#">SERVICIOS</a></li>
            <li><a href='#'>EQUIPO</a></li>
            <li><a href='#'>CONTACTANOS</a></li>
          </ul>
          </nav>
		 
	</>
  )
}
