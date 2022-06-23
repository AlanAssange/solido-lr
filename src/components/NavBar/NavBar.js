import React from 'react'
import solidoc from "../../media/Imgs/solidoic.png"
import { Link } from 'react-router-dom'
import "./NavBar.scss"

export const NavBar = () => {
  return (
	<>
  
		<nav className="nav_sec">

          <img src={solidoc} className="logo"/>
          <ul>
          <Link to="/solido-lr"><li>INICIO</li></Link>
            <li><a href="#">SERVICIOS</a></li>
            {/* <li><a href='#'>EQUIPO</a></li> */}
            <li><a href='https://soporte.solidcloud.com.ar/'>SOPORTE</a></li>
            <li>LOGIN</li>
            
          </ul>
          </nav>
		 
	</>
  )
}
