import React from 'react'

const Variable = () => {
    const saludo = "Hola Mundo"
    const imagen = "data:image/jpeg;base64,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"
  return (
    <div>
        <h1>El saludo escrito en JavaScript es: {saludo}</h1>
        <img src={imagen} alt="Duki" />
    </div>
    
    
  )
}

export default Variable