import React from 'react'

const Button = (props) => {
  return (
    <div>
      <button type="button" className="btn btn-light p-3 font-weight-bold">{props.text}</button>
    </div>
  )
}

export default Button
