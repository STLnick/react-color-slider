import React from 'react'
import PropTypes from 'prop-types'

import './Switch.css'

export const Switch = ({ handler }) => {
  return (
    <div>
      <span className="slider-label light-label">Lighter</span>
      <label className="switch round">
        <input className="switch-checkbox" onChange={handler} type="checkbox" />
        <span className="slider round"></span>
      </label>
      <span className="slider-label dark-label not-selected">Darker</span>
    </div>

  )
}

Switch.propTypes = {
  handler: PropTypes.func
}
