import React, { useState } from 'react'
 
export default function Component() {
  const [text, setText] = useState()
  const [updated, setUpdated] = useState()

  const buttonOnClick = () => { 
    setUpdated(text)
   }

  const textOnChange = (event) => {
    setText(event.target.value)
  }

  return (
    <div>
      <input type='text' value={text} onChange={textOnChange}></input>
      <button onClick={buttonOnClick}>Actualizar</button>
      <p>Texto input: {text}</p>
      <p>Texto Actualizado: {updated}</p>
    </div>
  )
}
