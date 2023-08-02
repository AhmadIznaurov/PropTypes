import React from 'react'
import PropTypes from 'prop-types'

export const Button = (props) => {
  return (
    <button className={props.size} onClick={props.onClick}>
      {props.children}
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  onClick: PropTypes.func
}

Button.defaultProps = {
  size: 'medium',
  text: 'haha'
}