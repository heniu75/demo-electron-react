import { render } from 'react-dom'
import React from 'react'

function Comp(props) {
  return (
    <h1>Welcome to {props.name}</h1>
  )
}

render(<Comp name="React!"/>, document.getElementById('app'))
