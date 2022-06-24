import React from 'react'
import "./UsDesc.scss"

//Gestionamos las ideas para desarrollar un método que se ajuste a las necesidades del cliente, 
//generando así productos únicos e innovadores para cada uno de ellos. Productos simples, que
// realmente funcionan.
export const UsDesc = () => {
  return (
    <div className='about_sec'>
        <div className='main_sec'>
        <img className="img_sec" src="https://images.pexels.com/photos/4792509/pexels-photo-4792509.jpeg" alt="pexelsstockphoto"/>
        <div className='text_sec'>
            <h1>Solido <b>Connecting Solutions:</b></h1>
            <h2 className='subt_sec'>Una empresa de <b>Innovación</b> y <b>Compromiso</b></h2>
            <h3>¿Quienes Somos?</h3>
            <p>Nuestra empresa es definida por la capacidad de sus individuos para actuar independientemente y crear sus propias decisiones. En contraste, la estructura de esos factores de influencia no determinan ni limitan tanto lo que brindamos como lo que somos. <br/> Estas características forjan nuestra identidad, nos hacen destacar por sobre las demás empresas en el mundo IT. Buscamos la innovación, y como consecuencia, la satisfacción de nuestros clientes. </p>
            <h3>¿Qué ofrecemos?</h3>
            <p>Garantizamos que tu empresa u organización no tenga problemas de gestión derivados de la estructura informática, y a su vez, brindamos soporte para el aprendizaje de las mismas a través de asistencias remotas que comprenden cada área electrónica de tu empresa.</p>
            <h3>Nuestra visión</h3>
            <p>Queremos consolidar para el año 2025 una posición firme en el Norte y Centro de la Provincia de Buenos Aires en lo que respecta a soportes de infraestructura IT, ampliado significativamente los servicios que ofrecemos.</p>
        </div>
        </div>
    </div>
  )
}
