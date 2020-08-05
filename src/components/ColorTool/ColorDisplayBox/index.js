import React from 'react'
import PropTypes from 'prop-types'

import './ColorDisplayBox.css'

export const ColorDisplayBox = ({ displayColor, label }) => {

  return (
    <div>
      <p>{label}</p>
      <div className="colorBox" style={{ backgroundColor: displayColor }}></div>
    </div>
  )
}

ColorDisplayBox.propTypes = {
  displayColor: PropTypes.string,
  label: PropTypes.string
}
