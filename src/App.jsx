import React from 'react'
import Cuadrado from './componentes/Cuadrado'
import data from './assets/data.js'


function App() {

const [datos, setDatos] = React.useState(data)


  const html = datos.map( cuadrado => {
   return <Cuadrado 
      key={cuadrado.id}
      id={cuadrado.id}
      on={cuadrado.on}
      interruptor={interruptor}
    />
  })

  function interruptor(id) {
    setDatos(oldDatos => {
      return oldDatos.map( cuadrado => {
        return cuadrado.id === id ? {...cuadrado, on: !cuadrado.on} : cuadrado
      })
    }) }


  return (
    <div className='container'>
      {html}
    </div>
  )
}

export default App

