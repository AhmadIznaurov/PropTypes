import React from 'react'

export const Button = (props) => {
  return (
    <button className={props.size} onClick={props.onClick}>
      {props.text}
    </button>
  )
}

