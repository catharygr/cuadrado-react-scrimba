import React from 'react'
import Cuadrado from './componentes/Cuadrado'
import data from './assets/data.js'


function App() {
  const html = data.map( cuadrado => {
   return <Cuadrado 
      key={cuadrado.id}
      id={cuadrado.id}
      on={cuadrado.on}
    />
  })

  return (
    <div>
      {html}
    </div>
  )
}

export default App

// export default [
//   {
//       id: 1,
//       on: true
//   },   
//   {
//       id: 2,
//       on: false
//   },   
//   {
//       id: 3,
//       on: true
//   },   
//   {
//       id: 4,
//       on: true
//   },   
//   {
//       id: 5,
//       on: false
//   },   
//   {
//       id: 6,
//       on: false
//   },   
// ]