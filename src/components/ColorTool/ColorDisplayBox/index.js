import React from 'react'
import PropTypes from 'prop-types'

export const ColorDisplayBox = ({ color, purpose }) => {

  const styling = {
    backgroundColor: color
  }

  return (
    <div style={styling}>
      I'm the {purpose} Color Box
    </div>
  )
}

ColorDisplayBox.propTypes = {
  color: PropTypes.string,
  purpose: PropTypes.string
}
