import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
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
            <li><a href='https://soporte.solidcloud.com.ar/'>CLIENTES</a></li>
            <li><a href='https://soporte.solidcloud.com.ar/'><FontAwesomeIcon icon={faUser}/>  LOGIN</a></li>
            
          </ul>
          </nav>
		 
	</>
  )
}
