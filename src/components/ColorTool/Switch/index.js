import React from 'react'
import PropTypes from 'prop-types'

export const Switch = ({ handler }) => {
  return (
    <input type="checkbox" onChange={handler} />
  )
}

Switch.propTypes = {
  handler: PropTypes.func
}
