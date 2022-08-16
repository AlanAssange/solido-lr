import React from 'react'
import "./GoogleMaps.scss"

export const GoogleMaps = () => {
  return (
    <div>
      <div class="mapouter"><div class="gmap_canvas">
        <iframe width="410" height="220" id="gmap_canvas" src="https://maps.google.com/maps?q=Mercedes,%20Buenos%20Aires,%20Calle%2026%20y%201&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
        </div></div>
    </div>
  )
}
