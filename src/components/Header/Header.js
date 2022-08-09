import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars} from '@fortawesome/free-solid-svg-icons'
import { faUser} from '@fortawesome/free-solid-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import solidoc from "../../media/Imgs/solidoicw.png"
import { Link } from 'react-router-dom'
import "./Header.scss"


export const Header = () => {
  return (
    <header>
        <nav className='navigation-new'>
            <div>
                <img src={solidoc} className="logoc"/>
            </div>
            <input type="checkbox" id="check"/>
            <label for="check" className='bar-btn'>
                <FontAwesomeIcon  icon={faBars}/>
            </label>
            <ul className='nav-menu'>
                <li><Link to="/solido-lr">INICIO</Link></li>
                <li><a  href='https://soporte.solidcloud.com.ar/'>SERVICIOS</a></li>
                <li><a href='https://soporte.solidcloud.com.ar/'><FontAwesomeIcon icon={faUser}/> LOGIN</a></li>
            </ul>
        </nav>
        <div className='banner-text'>
            <h1>LO HACEMOS <b>SIMPLE</b></h1>
            <h2>A TRAVES DE <b>SOLUCIONES TECNOLÓGICAS</b></h2>
        </div>
        <a href="https://wa.me/5492324683764"
        class="whatsapp_float"
        target="_blank"
        rel="noopener noreferrer">
            <FontAwesomeIcon icon={faWhatsapp}/>
        </a>
    </header>
  )
}
