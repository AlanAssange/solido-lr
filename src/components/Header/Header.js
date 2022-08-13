import {React, useCallback} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars} from '@fortawesome/free-solid-svg-icons'
import { faUser} from '@fortawesome/free-solid-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import solidoc from "../../media/Imgs/solidoicw.png"
import { Link } from 'react-router-dom'
import { Particles } from "react-tsparticles"; 
import { loadFull } from 'tsparticles'
import "./Header.scss"

export const Header = ( ) => {
    const particlesInit = useCallback(async (engine) => {
        console.log(engine);
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        await loadFull(engine);
    }, []);
    const particlesLoaded = useCallback(async (container) => {
        await console.log(container);
    }, []);
  return (
    <header>
        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                // background: {
                //     color: {
                //         value: "#0000",
                //     },
                // },
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
