import React from 'react'
import PropTypes from 'prop-types'

export const ColorDisplayBox = ({ color, purpose }) => {

  const styling = {
    backgroundColor: color
  }

  return (
    <p style={styling}>
      I'm the {purpose} Color Box
    </p>
  )
}

ColorDisplayBox.propTypes = {
  color: PropTypes.string,
  purpose: PropTypes.string
}
