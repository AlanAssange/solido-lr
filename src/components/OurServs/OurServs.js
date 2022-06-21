import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeadset } from '@fortawesome/free-solid-svg-icons'
import { faCloudArrowDown } from '@fortawesome/free-solid-svg-icons'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import { faFileCode } from '@fortawesome/free-solid-svg-icons'
import { faLock } from '@fortawesome/free-solid-svg-icons'
import { faServer } from '@fortawesome/free-solid-svg-icons'
import { faWifi } from '@fortawesome/free-solid-svg-icons'

import React from 'react'
import "./OurServs.scss"

export const OurServs = () => {
  return (
    <div className='a'>
            <div className='servs'>
            <h1 className='al_servs'>Alcances y Servicios</h1>
            <p>Nuestro alcance para ayudar a nuestros clientes nos hace la mejor opción cuando necesitan una respuesta rápida, flexible e innovadora. Construimos relaciones a largo plazo.</p> 
            </div>
            <hr/>
            <h2><FontAwesomeIcon className='icon_servs' icon={faHeadset}/>Asistencia tecnológica integral</h2>
            <div className='our_servs'>
             
              <div className='child_servs'><h3>Descripción del servicio</h3>
              <p className='child_par_servs'>Este servicio permite al USUARIO, ponerse en contacto con un técnico experto informático con el fin de disponer de soporte o asistencia técnica, en tiempo real, para solucionar cualquier incidencia respecto a la seguridad en sus equipos informáticos, tablets, smartphone o cualquier dispositivo conectado (tanto hardware como software) de uso más frecuente en el hogar o negocio comprendidas en el ámbito objeto del servicio suscrito por el USUARIO.Si fuera necesario y en función del tipo de consulta, el técnico podrá evaluar y/o resolver la incidencia, de manera inmediata, tomando el control remoto del dispositivo, previa aceptación por parte del USUARIO y sin necesidad de que el USUARIO tenga que desplazarse de su domicilio y/u oficina. Fractalia garantiza que su personal nunca podrá acceder a los equipos del USUARIO en otras circunstancias que no sean las anteriormente descritas.</p>
              <p>Entre otras, se prestará asistencia sobre los siguientes tipos de incidencias:</p>
              <p>• Resolución de incidencias que tenga el USUARIO con el dispositivo (problemas con dispositivos, accesoa Internet, correo electrónico, virus y otras incidencias de carácter general)</p>
              <p>• Asistencia para las aplicaciones más frecuentes (paquete Office, correo electrónico, navegación por Internet, antivirus, cortafuegos, tratamiento de gráficos y otras aplicaciones de uso frecuente)</p>
              <p>• Configuración del sistema operativo</p>
              <p>• Conexión de dispositivos entre sí (impresoras, escáner, video cámaras, etc…)</p>
              <p>• Problemas de conexión a Internet (conexión WiFi o cableada)</p>
              <p>Los dispositivos a soportar incluyen PC Windows, MAC OSX, Smartphone Android y IOS, Tablets y periféricos a conectar a los mismos.
                El servicio se prestará de forma telemática a través de una URL de servicio.
                Fractalia se encargará del mantenimiento y actualización de dicha página web con el fin de mantener correctamente informados a los USUARIOS del servicio prestado. En la página web se incluirán las condiciones generales de uso de los servicios.</p>
            </div>
              <div className='child_servs'><h3>Verificación del derecho a la prestación del Servicio por parte de SólidoCS</h3>
              <p>Fractalia se compromete a verificar el derecho a la prestación del servicio por parte del USUARIO. El Cliente facilitará periódicamente a Fractalia una base de datos con los USUARIOS que tienen derecho a la prestación del servicio o acceso vía webservices para una verificación en tiempo real.</p>
              <h3>Herramientas y limitaciones</h3>
              <p>Fractalia prestará el servicio de Asistencia Tecnológica Remota a través de una herramienta de:</p>
              <p>| chat–control remoto</p>
              <p>| del teléfono de asistencia (sólo en los momentos en los que el USUARIO no tenga acceso a Internet)</p>
              <p>El servicio se prestará las 24 horas, los 365 días del año . Fractalia también podrá disponer de aplicaciones instalables para facilitar el uso del servicio a los USUARIOS. El USUARIO podrá acceder a los servicios sin necesidad de instalar ninguna aplicación, a través de chat online. La primera vez que el USUARIO acceda al servicio deberá registrarse, facilitando todos los datos necesarios para poder identificarle y garantizar la prestación del servicio. En sucesivas ocasiones, tan sólo deberá introducir sus claves de acceso para que Fractalia valide su identidad.</p>
              <p>Adicionalmente, en caso de que el USUARIO no pueda contactar su equipo a Internet, podrá solicitar asistencia por teléfono, siendo la atención vía chat la opción recomendada.
              </p>
              <p>Límite en la utilización del servicio : No existirá límite en la utilización del servicio por lo que el asegurado podrá solicitar durante la duración del contrato o licencia, todas las asistencias que estime necesarias.</p>
              </div>
              
              <div className='child_servs'><h3>Nivel de Servicio</h3>
              <p>Fractalia establece con el cliente Acuerdos de Nivel de Servicio (SLA) con el propósito de garantizar la eficacia en la prestación de los servicios y cumplir todas las necesidades y expectativas de los USUARIOS.</p>
              <p>El grado de cumplimiento de la calidad del servicio será evaluado mensualmente. Los niveles de servicio alcanzados serán evaluados en función de los correspondientes objetivos de servicio establecidos, permitiendo evaluar el grado de mejora y proponer soluciones en caso de no alcanzarse tales objetivos.</p>
              <p>A continuación definimos los siguientes niveles de servicio:</p>
              <p> • Tiempo medio de espera mensual en atención telemática: Inferior o igual a 30 segundos.</p>
              <p> • Tiempo medio de espera mensual en atención telefónica: Inferior o igual a 45 segundos.</p>
              </div>
              <div className='child_servs'><h3>Acceso al Servicio</h3>
              <p>• Se accederá a través de nuestra plataforma de servicios, vía Web.</p>
              <p>• La asistencia se prestará a través de una ventana de diálogo tipo chat, que permitirá al USUARIO contactar con nuestros técnicos expertos. Adicionalmente, en caso de que el USUARIO no pueda conectar su equipo</p>
              <p>• Una vez recibida la petición, el técnico procederá a gestionar la incidencia indicada por el USUARIO.</p>
              </div>
              <div className='child_servs'><h3>Alcance del servicio</h3>
              <p>El servicio cubrirá los sistemas operativos soportados por sus fabricantes y se prestará sobre los siguientes elementos:</p>
              <p>•SOFTWARE</p>
              <p>•HARDWARE</p>
              </div>
              <div className='child_servs'><h3>Exclusiones</h3>
              <p>Quedan excluidas las asistencias para equipos o programas ajenos al ámbito de cobertura del contrato suscrito, usos y soporte profesional de aplicaciones y plataformas, así como servidores.</p></div>
            </div>  
            <hr/>
           <h2><FontAwesomeIcon className='icon_servs' icon={faCloudArrowDown}/>Recuperación de datos Backup</h2>
           <div className='our_servs'>
             
             <div className='child_servs'><h3>Descripción del servicio</h3>
             <p className='child_par_servs'>El servicio de recuperación de datos Backup es un servicio de soporte, configuración o recuperación de información de los datos que los USUARIOS hayan guardado en diferentes medios de copia de seguridad.

Con la Recuperación de datos Backup le ofrecemos el servicio de recuperación de información de los datos que usted haya almacenado para aquellos dispositivos de almacenamiento de datos que sufran un daño físico (incendio, daños por agua o accidente entre otros) o lógico (virus, mala utilización o error humano entre otros).</p>
<h3>Alcance del Servicio</h3>
             <p>Las fuentes de datos podrán ser:</p>
             <p>• Servicios cloud Dropbox, Drive, icloud, etc….</p>
             <p>• Servicios de Backup Acronis, O365, etc….</p>
             <p>• Aplicaciones de copia en las que el cliente tenga la correspondiente licencia en vigor.</p>
             <p>Nuestros técnicos restablecerán los datos en los mismos soportes donde fueron copiados siempre que sea posible o en soportes alternativos que indique el cliente.</p>
             <p>Estas prestaciones podrán variar en función del sistema operativo y firmware de los dispositivos.</p>
             
           </div>
             <div className='child_servs'>
             <h3>Nivel de Servicio</h3>
             <p>Cada USUARIO podrá utilizar este servicio siempre que lo necesite, sin que existan restricciones de uso, ni en el número de solicitudes , ni en el tiempo de utilización.</p>
             
             <p>El servicio se presta las 24h del día los 7 días de la semana.</p>

             <h3>Acceso al Servicio</h3>
             <p>• Se accederá a través de nuestra plataforma de servicios, vía Web.</p>
             <p>• La asistencia se prestará a través de una ventana de diálogo tipo chat, que permitirá al USUARIO contactar con nuestros técnicos expertos. Adicionalmente, en caso de que el USUARIO no pueda conectar su equipo</p>
             <p>• Una vez recibida la petición, el técnico procederá a gestionar la incidencia indicada por el USUARIO.</p>
             
             </div>
           </div>  
          <hr/>
           <h2><FontAwesomeIcon className='icon_servs' icon={faWifi}/>Análisis avanzado conexión a Internet</h2>
           <div className='our_servs'>
             
             <div className='child_servs'><h3>Descripción del servicio</h3>
             <p className='child_par_servs'>Permite diagnosticar y resolver, las incidencias relacionadas con la conectividad a Internet, de forma remota y sin necesidad de que un técnico tenga que desplazarse al domicilio del USUARIO. Gracias a una ligera herramienta que se instala en el equipo del USUARIO, permite evaluar de formanautomática, determinados parámetros que pueden afectar al rendimiento normal de la red.</p>
             <p>De forma remota se realizará un diagnóstico de la red y se resolverán las incidencias relacionadas con la conectividad a internet del USUARIO, resolviendo las incidencias que le puedan surgir durante su uso, como pueden ser lentitud en la navegación o problemas de conexión. Una vez realizado el análisis, la herramienta genera un informe detallando los resultados del test. Este informe podrá visualizarlo el USUARIO y podrá acceder a consultar a un experto en caso de tener alguna duda o necesidad de resolver el problema.</p>
             <h3>Alcance del Servicio</h3>
             <p>Este servicio analizará, para dispositivos con sistemas operativos Windows y Android, los siguientes cuatro puntos clave:</p>
             <p>• Dispositivos</p>
             <p>• Conectividad</p>
             <p>• Router</p>
             <p>• Test de velocidad</p>
             <p>En cada uno de ellos se analizarán aquellas características críticas para la velocidad de conexión. Estos análisis serán analizados por el equipo técnico de FRACTALIA.</p>
             
           </div>
             <div className='child_servs'>
             <h3>Nivel de Servicio</h3>
             <p>Cada USUARIO podrá utilizar este servicio siempre que lo necesite, sin que existan restricciones de uso, ni en el número de solicitudes de chequeo ni en el tiempo de utilización.</p>
             <p>El servicio se presta las 24h del día los 7 días de la semana.</p>
             <p>Para acceder al servicio se hará a través del chat de la plataforma web de FRACTALIA, realizando la solicitud vía chat a la cual el técnico responderá a las peticiones del USUARIO .</p>
             <h3>Requisitos técnicos</h3>
             <p>Para asegurar la correcta prestación del servicio Diagnóstico de Red, es preciso que el equipo del USUARIO cumpla con las siguientes especificaciones técnicas:</p>
             <p>• El USUARIO debe disponer de una conexión a Internet con una velocidad mínima de 512 Kbps de subida/bajada.</p>
             <p>• Requisitos mínimos de Hardware:</p>
             <p>   PC: procesadores Intel Pentium D, AMD Athlon 64 o superior.</p>
             <p>   MAC: procesadores Intel.</p>
             <p>   RAM: 1Gb.</p>
             <p>• Requisitos mínimos de Software:</p>
             <p>PC: Microsoft Windows XP o superiores, Internet Explorer 8 o superior, .NET Framework 3.5 o superior.</p>
             <p>Android 2.3 o superior, navegador nativo.</p>
             </div>
           </div>  
          <hr/>
           <h2><FontAwesomeIcon className='icon_servs' icon={faGlobe}/>Análisis de vulnerabilidades IP</h2>
           <div className='our_servs'>
             
             <div className='child_servs'><h3>Descripción del servicio</h3>
             <p className='child_par_servs'>Este servicio permite determinar el nivel de seguridad de la plataforma del USUARIO identificando las vulnerabilidades existentes los riesgos asociados y los procesos afectados a través de su IP pública. Se compone de un servicio de auditoría que evaluará el nivel de riesgo tecnológico asociados a los sistemas o plataformas TIC expuestos como servicios públicos en internet. Con esta información se realizará un informe de riesgo en relación a los sistemas del USUARIO.</p>
             <p>Una vulnerabilidad es una debilidad del sistema informático que puede ser utilizada para causar un daño. Las debilidades pueden aparecer en cualquiera de los elementos de un ordenador, tanto en el hardware, en el software, como en el Sistema Operativo.</p>
             <p>El análisis contempla la revisión externa de seguridad de los dispositivos, sistemas y aplicativos expuestos, que son evaluados mediante diferentes herramientas y supervisados por nuestro personal experto en detección de vulnerabilidades.</p>
             <p>Tras la evaluación le facilitaremos un informe con los resultados que resume las vulnerabilidades encontradas detallando el motivo de su existencia, así como las recomendaciones necesarias.</p>
             <h3>Alcance del Servicio</h3>
             <p>Se realizará una revisión de seguridad para identificar el nivel de seguridad de la plataforma tecnológica, además de los servicios a los que se puedan acceder desde redes externas, así se detectarán las vulnerabilidades existentes, riesgos y procesos afectados.</p>
             <p>Las acciones que se llevarán a cabo:</p>
             <p>• Revisión de la caja negra externa</p>
             <p>• Identificación de redes y direccionamientos</p>
             <p>• Identificación de: Servidores, protocolos, aplicativos y análisis de vulnerabilidad.</p>
             <p>El servicio está limitado a una dirección IP al año por licencia adquirida.</p>
             
           </div>
             <div className='child_servs'>
             <h3>Nivel de Servicio</h3>
             <p>El informe de vulnerabilidad se enviará al USUARIO en un plazo de 48h.  El servicio se presta las 24h del día los 7 días de la semana.</p>
             <h3>Acceso al servicio</h3>
             <p>• Se accederá a través de nuestra plataforma de servicios, vía Web.</p>
             <p>• La asistencia se prestará a través de una ventana de diálogo tipo chat, que permitirá al USUARIO contactar con nuestros técnicos expertos. Adicionalmente, en caso de que el USUARIO no pueda conectar su equipo a Internet, podrá solicitar asistencia por teléfono.</p>
             <p>• Una vez recibida la petición, el técnico procederá a gestionar la incidencia indicada por el USUARIO</p>
             </div>
           </div> 
           <hr/>
           <h2><FontAwesomeIcon className='icon_servs' icon={faFileCode}/>Análisis de vulnerabilidades Web</h2>
           <div className='our_servs'>
             
             <div className='child_servs'><h3>Descripción del servicio</h3>
             <p className='child_par_servs'>Si tiene una web, puede ser vulnerable o tener fallos de seguridad que puedan poner en peligro a accesos no deseados. El sistema de análisis de vulnerabilidades web le permitirá disponer de la información sobre el nivel de seguridad y ataques de hacker.</p>
             <p>Las principales vulnerabilidades de web son las siguientes:</p>
             <p>• Configuración débil.</p>
             <p>• Comunicación insegura entre cliente y servidor.</p>
             <p>• Software desactualizado.</p>
             <h3>Alcance del Servicio</h3>
             <p>El análisis de vulnerabilidades se lleva a cabo a través de una herramienta que analiza todos los entornos web tanto de protocolos HTTP como HTTPS y realiza un informe detallado de las vulnerabilidades detectando y valorando la criticidad de cada uno de los riesgos. La herramienta escanea todos los posibles “agujeros” de seguridad en los entornos web tanto de páginas como de aplicaciones.</p>
             <p>El servicio está limitado a una página web año por licencia adquirida.</p>
           </div>
             <div className='child_servs'>
             <h3>Nivel de Servicio</h3>
             <p>El informe de vulnerabilidad se notificará al USUARIO en un plazo de 48h.</p>
             <p>El servicio se presta las 24h del día los 7 días de la semana.</p>
             <h3>Acceso al servicio</h3>
             <p>• Se accederá a través de nuestra plataforma de servicios, vía Web.</p>
             <p>• La asistencia se prestará a través de una ventana de diálogo tipo chat, que permitirá al USUARIO contactar con nuestros técnicos expertos. Adicionalmente, en caso de que el USUARIO no pueda conectar su equipo a Internet, podrá solicitar asistencia por teléfono.</p>
             <p>• Una vez recibida la petición, el técnico procederá a gestionar la incidencia indicada por el USUARIO</p>
             </div>
           </div> 
           <hr/>
           <h2><FontAwesomeIcon className='icon_servs' icon={faServer}/>Análisis de vulnerabilidades de red</h2>
           <div className='our_servs'>
             
             <div className='child_servs'><h3>Descripción del servicio</h3>
             <p className='child_par_servs'>El servicio Análisis de vulnerabilidades de red permite analizar vulnerabilidades e intrusiones en la red y resolverlas.</p>
             <p>Una vez ejecutado el análisis, se enviará un informe al USUARIO acerca de las vulnerabilidades e intrusiones en la red. Con dicho informe el USUARIO pueda ser conocedor de los peligros y por parte de FRACTALIA se le facilitará la intervención de un técnico que le ayudará a resolver las posibles vulnerabilidades detectadas.</p>
             <h3>Alcance del Servicio</h3>
             <p>El resultado de los análisis detalla las vulnerabilidades y las clasifica de acuerdo a su criticidad usando normas como las CVSS (Common Vulnerability Scorcing System). FRACTALIA facilitará al USUARIO dicho informe y bajo petición del USUARIO se le podrán resolver las vulnerabilidades localizadas con la intervención de uno de los técnicos.</p>
           </div>
             <div className='child_servs'>
             <h3>Nivel de Servicio</h3>
             <p>Cada USUARIO podrá utilizar este servicio siempre que lo necesite, sin que existan restricciones de uso, ni en el número de solicitudes , ni en el tiempo de utilización.</p>
             <p>El servicio se presta las 24h del día los 7 días de la semana.</p>
             <h3>Acceso al servicio</h3>
             <p>• Se accederá a través de nuestra plataforma de servicios, vía Web.</p>
             <p>• La asistencia se prestará a través de una ventana de diálogo tipo chat, que permitirá al USUARIO contactar con nuestros técnicos expertos. Adicionalmente, en caso de que el USUARIO no pueda conectar su equipo a Internet, podrá solicitar asistencia por teléfono.</p>
             <p>• Una vez recibida la petición, el técnico procederá a gestionar la incidencia indicada por el USUARIO</p>
             </div>
           </div> 
           <hr/>
           <h2><FontAwesomeIcon className='icon_servs' icon={faLock}/>Copia de seguridad en la nube</h2>
           <div className='our_servs'>
             
             <div className='child_servs'><h3>Descripción del servicio</h3>
             <p className='child_par_servs'>El servicio de Copia de Seguridad le permite salvaguardar información almacenada en su ordenador en servidores alojados en un centro de proceso de datos seguro. Las copias de la información se realizan a través de Internet de forma totalmente segura , puesto que los datos viajan y se archivan cifrados, permitiendo el acceso a los mismos exclusivamente a la persona que realizó la copia de seguridad.</p>
             <p>• Backup local y en la nube que aporta protección flexible e híbrida</p>
             <p>• Recuperación de datos de cualquier plataforma</p>
             <p>• Copias de seguridad de archivos</p>
             <p>• Soporte de almacenamiento en la nube para reducir los esfuerzos de gestión y las cargas de producción de los servidores</p>
             <p>• Encriptación de información en tránsito y datos en reposo mediante el protocolo AES-556</p>
             <p>• Dashboard a medida con nuestra plataforma Fractalia Hub business</p>
             <h3>Alcance del Servicio</h3>
             <p>El servicio comprende la siguientes tareas:</p>
             <p>• Backup local y en la nube que aporta protección flexible e híbrida</p>
             <p>• Recuperación de datos de cualquier plataforma</p>
             <p>• Copias de seguridad de archivos</p>
             <p>• Soporte de almacenamiento en la nube para reducir los esfuerzos de gestión y las cargas de producción de los servidores</p>
             <p>• Encriptación de información en tránsito y datos en reposo mediante el protocolo AES-556</p>
             <p>• Dashboard a medida con nuestra plataforma Fractalia Hub business</p>
           </div>
             <div className='child_servs'>
             <h3>Nivel de Servicio</h3>
             <p>Cada USUARIO podrá utilizar este servicio siempre que lo necesite, sin que existan restricciones de uso, ni en el número de solicitudes , ni en el tiempo de utilización.</p>
             <p>El servicio se presta las 24h del día los 7 días de la semana.</p>
             <h3>Acceso al servicio</h3>
             <p>• Se accederá a través de nuestra plataforma de servicios, vía Web.</p>
             <p>• La asistencia se prestará a través de una ventana de diálogo tipo chat, que permitirá al USUARIO contactar con nuestros técnicos expertos. Adicionalmente, en caso de que el USUARIO no pueda conectar su equipo a Internet, podrá solicitar asistencia por teléfono.</p>
             <p>• Una vez recibida la petición, el técnico procederá a gestionar la incidencia indicada por el USUARIO</p>
             </div>
           </div> 
    </div>
  )
}
