import './Input.css'
import { useState } from 'react'

export default function Input(props) {

  const [input, setInput] = useState("")

  const handleChange = (event) => {
    setInput(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log("submit!")
    props.dispatch({ type: 'addItem', payload: input })
  }


  return (
    <div className="input-container">
      <form onSubmit={handleSubmit}>
        <input type="text" value={input} onChange={handleChange}></input>
        <input type="submit" value="+"></input>
      </form>
    </div>
  )
}