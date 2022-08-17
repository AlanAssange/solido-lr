import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar} from '@fortawesome/free-solid-svg-icons'

import "./Testimonials.scss"

export const Testimonials = () => {
  return (
    <>
    <div className="testTitle">
<p className="genTitles">Nuestros Clientes</p>
<p className="paragraph">Enterate de las últimas reseñas de nuestros clientes al día de la fecha.</p>
</div>
    
   
<section className="wrapper">
    
    <div className="box">
    <i className="fas fa-quote-left"></i>
    <p>Equipo respetuoso , ágil y sobre todo resolutivo . Súper recomendables.</p>
    <div className="content">
        <div className="info">
            <div className="name">Juan Andrés</div>
            <div className="job"> Oficinista | Sivero </div>
            <FontAwesomeIcon className='star_serv' icon={faStar}/><FontAwesomeIcon className='star_serv' icon={faStar}/><FontAwesomeIcon className='star_serv' icon={faStar}/><FontAwesomeIcon className='star_serv' icon={faStar}/><FontAwesomeIcon className='star_serv' icon={faStar}/>
        </div>
        <div className="image">
            <img src="https://images.pexels.com/photos/6972/summer-office-student-work.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
        </div>
    </div>
    </div>
    <div className="box">
        <i className="fas fa-quote-left"></i>
        <p>Conformes con la rápida respuesta a las solicitudes de servicio y aprovisionamiento de insumos.</p>
        <div className="content">
            <div className="info">
                <div className="name">Pablo Laresca</div>
                <div className="job"> Administrativo | Melacrom </div>
                <FontAwesomeIcon className='star_serv' icon={faStar}/><FontAwesomeIcon className='star_serv' icon={faStar}/><FontAwesomeIcon className='star_serv' icon={faStar}/><FontAwesomeIcon className='star_serv' icon={faStar}/><FontAwesomeIcon className='star_serv' icon={faStar}/>
            </div>
            <div className="image">
                <img src="https://images.pexels.com/photos/3153199/pexels-photo-3153199.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
            </div>
        </div>
        </div>
        <div className="box">
            <i className="fas fa-quote-left"></i>
            <p>Servicio rápido, eficiente y con una honestidad característica. ¡Seguimos trabajando en conjunto!</p>
            <div className="content">
                <div className="info">
                    <div className="name">Daniel Bertachini</div>
                    <div className="job"> CEO | Ovodec </div>
                    <FontAwesomeIcon className='star_serv' icon={faStar}/><FontAwesomeIcon className='star_serv' icon={faStar}/><FontAwesomeIcon className='star_serv' icon={faStar}/><FontAwesomeIcon className='star_serv' icon={faStar}/><FontAwesomeIcon className='star_serv' icon={faStar}/>

                </div>
                <div className="image">
                    <img src="https://images.pexels.com/photos/756484/pexels-photo-756484.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
                </div>
            </div>
            </div>
</section>
</>
  )
}
