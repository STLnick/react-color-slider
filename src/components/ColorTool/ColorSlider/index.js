import React from 'react'
import PropTypes from 'prop-types'

export const ColorSlider = ({ value }) => {

  return (
    <input type="range" max="100" min="0" value={value} />
  )
}

ColorSlider.propTypes = {
  value: PropTypes.number
}
