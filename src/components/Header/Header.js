import {React, useCallback} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars} from '@fortawesome/free-solid-svg-icons'
import { faUser} from '@fortawesome/free-solid-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import solidoc from "../../media/Imgs/solidoicw.png"
import { Link } from 'react-router-dom'
import { Particles } from "react-tsparticles"; 
import { loadFull } from 'tsparticles'
import TypewriterComponent from 'typewriter-effect'
import "./Header.scss"

export const Header = ( ) => {
    const particlesInit = useCallback(async (engine) => {
        console.log(engine);
        await loadFull(engine);
    }, []);
    const particlesLoaded = useCallback(async (container) => {
        await console.log(container);
    }, []);
  return (
    <header>
        <nav className='navigation-new'>
            <div>
            <Link to="/solido-lr"><img src={solidoc} className="logoc"/></Link>
            </div>
            <input type="checkbox" id="check"/>
            <label htmlFor="check" className='bar-btn'>
                <FontAwesomeIcon  icon={faBars}/>
            </label>
            <ul className='nav-menu'>
                <li><Link to="/solido-lr">INICIO</Link></li>
                <li><a  href='#servs'>SERVICIOS</a></li>
                <li><a href='https://soporte.solidcloud.com.ar/'><FontAwesomeIcon icon={faUser}/> LOGIN</a></li>
            </ul>
        </nav>
        <Particles
            id="tsparticles"
            className='tsparticlez'
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
               
                fpsLimit: 60,
                interactivity: {
                    events: {
                        onClick: {
                            enable: false,
                            mode: "push",
                        },
                        onHover: {
                            enable: true,
                            mode: "repulse",
                        },
                        resize: true,
                    },
                    modes: {
                        push: {
                            quantity: 4,
                        },
                        repulse: {
                            distance: 100,
                            duration: 0.4,
                        },
                    },
                },
                fullScreen:{
                    enable: false
                },
                particles: {
                    color: {
                        value: "#ffffff",
                    },
                    links: {
                        color: "#ffffff",
                        distance: 150,
                        enable: true,
                        opacity: 0.5,
                        width: 1,
                    },
                    collisions: {
                        enable: true,
                    },
                    move: {
                        directions: "none",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: false,
                        speed: 4,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 800,
                        },
                        value: 80,
                    },
                    opacity: {
                        value: 0.5,
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        value: { min: 1, max: 5 },
                    },
                },
                detectRetina: true,
            }}
        />
        <div className='banner-text'>
            <h1>LO HACEMOS <b>SIMPLE</b></h1>
            <div className='typewritercomp'>
            <TypewriterComponent options={{autoStart: true, loop: true}} onInit={(typewriter) => {
                typewriter
                .typeString("Innovemos juntos")
                .pauseFor(3000)
                .deleteAll()
                .typeString("A través de soluciones tecnológicas")
                .pauseFor(3000)
                .start();
            }}/>
            </div>
        </div>
        <a href="https://wa.me/5492324683764"
        className="whatsapp_float"
        target="_blank"
        rel="noopener noreferrer">
            <FontAwesomeIcon icon={faWhatsapp}/>
        </a>
    </header>
  )
}
