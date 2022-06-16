import React from 'react'
import { Link } from "react-router-dom";
import header from "../media/Videos/loopedw.mp4"
import solidoc from "../media/Imgs/solidoicw.png"
import solidocol from "../media/Imgs/solidobw.png"
import "./home.css"


export const Home = () => {
  return (
    <>
    <div className="vid_landing" >

        <video width="100%"  loop muted autoPlay className='land_head' >
            <source src={header} type="video/mp4"/>
        </video>

        <nav className='nav'>
          <img src={solidoc} className="logo"/>
          <ul>
            {/* <li><a>INICIO</a></li> */}
            <li><a className='nav_prim' href="#">SERVICIOS</a></li>
            <li><a className='nav_prim' href='#'>EQUIPO</a></li>
            <li><a className='nav_prim' href='#'>CONTACTANOS</a></li>
          </ul>
          </nav>
          <div className="content" >
          <img className="log_landing" src={solidocol}/>
          <p>Lorem ipsum annui coeptis asdfasdfasd</p>
          <Link to="/home"><p className="content_button" >ENTRAR</p></Link>
          </div>
        

    </div>
    
   
    </>
  )
}
