import React from 'react'
import '../style/Button.scss'
function Button({btnText}) {
  return (
    <>
    <button type="submit" className="btn btn-success">{btnText}</button>
    </>
  )
}

export default Button
