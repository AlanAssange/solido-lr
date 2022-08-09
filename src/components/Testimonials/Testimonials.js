import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar} from '@fortawesome/free-solid-svg-icons'

import "./Testimonials.scss"

export const Testimonials = () => {
  return (
    <>
    <div class="testTitle">
<p class="genTitles">Nuestros Clientes</p>
<p class="paragraph">Enterate de las últimas reseñas de nuestros clientes al día de la fecha.</p>
</div>
    
   
<section class="wrapper">
    
    <div class="box">
    <i class="fas fa-quote-left"></i>
    <p>Es un placer trabajar con SolidoCS, muy agradecido por su atención y dedicación.</p>
    <div class="content">
        <div class="info">
            <div class="name">Burro Apellido</div>
            <div class="job"> Desarrollador Web | Burro</div>
            <FontAwesomeIcon className='star_serv' icon={faStar}/><FontAwesomeIcon className='star_serv' icon={faStar}/><FontAwesomeIcon className='star_serv' icon={faStar}/><FontAwesomeIcon className='star_serv' icon={faStar}/><FontAwesomeIcon className='star_serv' icon={faStar}/>
        </div>
        <div class="image">
            <img src="https://i.pinimg.com/originals/b8/dc/bf/b8dcbf4fb8315a3fff1f9f7912fcb9ec.jpg"/>
        </div>
    </div>
    </div>
    <div class="box">
        <i class="fas fa-quote-left"></i>
        <p>Es un placer trabajar con SolidoCS, muy agradecido por su atención y dedicación.</p>
        <div class="content">
            <div class="info">
                <div class="name">Bob Esponja</div>
                <div class="job"> Inversor | Abogado </div>
                <FontAwesomeIcon className='star_serv' icon={faStar}/><FontAwesomeIcon className='star_serv' icon={faStar}/><FontAwesomeIcon className='star_serv' icon={faStar}/><FontAwesomeIcon className='star_serv' icon={faStar}/><FontAwesomeIcon className='star_serv' icon={faStar}/>
            </div>
            <div class="image">
                <img src="https://estaticos-cdn.elperiodico.com/clip/6040f332-9afa-471d-b076-c060ae37450a_alta-libre-aspect-ratio_default_0.jpg"/>
            </div>
        </div>
        </div>
        <div class="box">
            <i class="fas fa-quote-left"></i>
            <p>Es un placer trabajar con SolidoCS, muy agradecido por su atención y dedicación.</p>
            <div class="content">
                <div class="info">
                    <div class="name">Shrek Tercero</div>
                    <div class="job"> Dueño del pantano | Diseñador </div>
                    <FontAwesomeIcon className='star_serv' icon={faStar}/><FontAwesomeIcon className='star_serv' icon={faStar}/><FontAwesomeIcon className='star_serv' icon={faStar}/><FontAwesomeIcon className='star_serv' icon={faStar}/><FontAwesomeIcon className='star_serv' icon={faStar}/>

                </div>
                <div class="image">
                    <img src="https://3.bp.blogspot.com/-7dWkJ2oulFw/XKv0-xeqnZI/AAAAAAAABcs/1Juss_qSaYgqpKKnuzFn9C5kIeDBZmBdwCEwYBhgL/s1600/shrek1.jpg"/>
                </div>
            </div>
            </div>
</section>
</>
  )
}
