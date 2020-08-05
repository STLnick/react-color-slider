import React from 'react'
import PropTypes from 'prop-types'

export const ColorSlider = ({ handler, value }) => {

  return (
    <div className="flex flex--align-center">
      <label htmlFor="slider">{value}%</label>
      <input id="slider" onChange={handler} type="range" max="100" min="0" value={value} />
    </div>
  )
}

ColorSlider.propTypes = {
  handler: PropTypes.func,
  value: PropTypes.number
}
