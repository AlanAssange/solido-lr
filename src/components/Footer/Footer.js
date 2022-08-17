import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faLocationDot} from '@fortawesome/free-solid-svg-icons'
import { faEnvelope} from '@fortawesome/free-solid-svg-icons'
import "./Footer.scss"
import "../../media/Imgs/solidobw.png"
import { GoogleMaps } from '../helpers/GoogleMaps'

export const Footer = () => {
  return (
    <footer>
        <div className='main-content'>
                <div class="left box">
                    {/* <h2>About us</h2> */}
                    <img className='solido-logo' src="https://i.ibb.co/rFB6tZz/solidobw.png"/>
                    <div className='content'>
                        <p>Sólido Connecting Solutions</p>
                        <div className='social'>
                            <a href="https://www.facebook.com/pages/category/Computer-Company/Solido-Connecting-Solutions-293129061253087/"><span><FontAwesomeIcon className="brandicon" icon={faFacebookF}/></span></a>
                            <a href="#facebook"><span><FontAwesomeIcon className="brandicon" icon={faTwitter}/></span></a>
                            <a href="#facebook"><span><FontAwesomeIcon className="brandicon" icon={faInstagram}/></span></a>
                            <a href="https://ar.linkedin.com/in/nazareno-giorgi-335286106"><span><FontAwesomeIcon className="brandicon" icon={faLinkedin}/></span></a>
                        </div>
                    </div>
                </div>
                <div className='center box'>
                    <h2>Contactanos</h2>
                    <div className='content'>
                        <div className='place'>
                        <FontAwesomeIcon className='svgicons' icon={faLocationDot}/>
                        <span className="text">Mercedes, Buenos Aires</span>
                        </div>
                        <div className='phone'>
                            <p>Mesa de Ayuda:</p>
                        <FontAwesomeIcon className='svgicons' icon={faWhatsapp}/>
                        <span className="text">+2324-683764 ||  +2324-683467</span>
                        </div>
                        <div className='email'>
                        <FontAwesomeIcon className='svgicons' icon={faEnvelope}/>
                        <span className="text">info@solidocs.com.ar</span>
                        </div>
                    </div>
                </div>
                <div className='right box'>
                    <h2>donde ubicarnos</h2>
                    <div className='content'>
                    <GoogleMaps/>
                    </div>
                </div>
        </div>
        <div className='bottom'>
            <center>
                <span className='credit'>Creado por <a href="https://www.facebook.com/pages/category/Computer-Company/Solido-Connecting-Solutions-293129061253087/">Solido Connecting Solutions</a> | © 2022 - Todos los derechos reservados. </span>
            </center>
        </div>

    </footer>
  )
}
