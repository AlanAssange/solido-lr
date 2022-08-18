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
          <ul className="nav-menuc ">
            <li><a href='https://soporte.solidcloud.com.ar/'>SOPORTE</a></li>
          </ul>
          </nav>
          <div className="contents" >
          <img className="log_landing" src={solidocol}/>
          <p className='log_p'>Solido: Connecting Solutions | Home</p>
          <Link to="/solido-lr/home"><p className="content_button" >WEB</p></Link>
          <a href="https://soporte.solidcloud.com.ar/"><p className="content_button" >SOPORTE</p></a>

          </div>
        

    </div>
    
   
    </>
  )
}
