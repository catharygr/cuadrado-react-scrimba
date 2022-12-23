import React from 'react'


export default function Cuadrado(props) {

  const color = props.on ? 'orange' : 'transparent'


  return (
    <div style={{ backgroundColor: color }} className='cuadrado'>
        <p>{props.id}</p>

    </div>
  )
}

// props {
//   id: 1,
//   on: true
// }