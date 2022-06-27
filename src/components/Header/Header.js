import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars} from '@fortawesome/free-solid-svg-icons'
import { faUser} from '@fortawesome/free-solid-svg-icons'
import solidoc from "../../media/Imgs/solidoicw.png"
import { Link } from 'react-router-dom'
import "./Header.scss"


export const Header = () => {
  return (
    <header>
        <nav className='navigation-new'>
            <div>
                <img src={solidoc} className="logo"/>
            </div>
            <input type="checkbox" id="check"/>
            <label for="check" className='bar-btn'>
                <FontAwesomeIcon  icon={faBars}/>
            </label>
            <ul className='nav-menu'>
                <li><Link to="/solido-lr">INICIO</Link></li>
                <li><a  href='https://soporte.solidcloud.com.ar/'>CLIENTES</a></li>
                <li><a href='https://soporte.solidcloud.com.ar/'><FontAwesomeIcon icon={faUser}/> LOGIN</a></li>
            </ul>
        </nav>
        <div className='banner-text'>
            <h1>LO HACEMOS <b>SIMPLE</b></h1>
            <h2>A TRAVES DE <b>SOLUCIONES TECNOLÓGICAS</b></h2>
        </div>
    </header>
  )
}
