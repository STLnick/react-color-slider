import React from 'react'
import PropTypes from 'prop-types'

export const ColorDisplayBox = ({ color, purpose }) => {

  return (
    <div style={{ backgroundColor: color }}>
      I'm the {purpose} Color Box
    </div>
  )
}

ColorDisplayBox.propTypes = {
  color: PropTypes.string,
  purpose: PropTypes.string
}
