import React from 'react'
import "./UsDesc.scss"
export const UsDesc = () => {
  return (
    <div className='about_sec'>
        <div className='main_sec'>
        <img className="img_sec" src="https://images.pexels.com/photos/4792509/pexels-photo-4792509.jpeg" alt="pexelsstockphoto"/>
        <div className='text_sec'>
            <h4>¿Quienes Somos?</h4>
            <h1>Una empresa de <b>Creatividad</b> e <b>Inteligencia</b></h1>
            <p>Nuestra empresa es definida por la capacidad de sus individuos para actuar independientemente y crear sus propias decisiones. En contraste, la estructura de esos factores de influencia no determinan ni limitan tanto lo que brindamos como lo que somos. <br/> Estas características forjan nuestra identidad, nos hacen destacar por sobre las demás empresas en el mundo IT. Buscamos la innovación, y como consecuencia, la satisfacción de nuestros clientes. </p>
        </div>
        </div>
    </div>
  )
}
