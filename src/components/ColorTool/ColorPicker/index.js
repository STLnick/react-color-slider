import React from 'react'
import PropTypes from 'prop-types'

export const ColorPicker = ({ color, handler }) => {

  return (
    <input onChange={handler} type="color" value={color} />
  )
}

ColorPicker.propTypes = {
  color: PropTypes.string,
  handler: PropTypes.func
}
