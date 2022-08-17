import React from 'react'
import "./GoogleMaps.scss"

export const GoogleMaps = () => {
  return (
   
      <div className="mapouter"><div className="gmap_canvas">
        <iframe width="410" height="220" id="gmap_canvas" src="https://maps.google.com/maps?q=Mercedes,%20Buenos%20Aires,%20Calle%2026%20y%201&t=&z=13&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no"></iframe>
        </div></div>
    
  )
}
