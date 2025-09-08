import { useState } from "react"

export default function Eje4() {

  const [botonIzquierdo, setBotonIzquierdo] = useState(false)
  const [botonDerecho, setBotonDerecho] = useState(true)

  const btnIzquierdo = () =>{
    setBotonDerecho(false)
    setBotonIzquierdo(true)
  }
  
  const btnDerecho =  ()=>{
    setBotonDerecho(true)
    setBotonIzquierdo(false)
  }

  return (
    <>
      <button onClick={btnIzquierdo} disabled= {botonIzquierdo}>Izquierda</button>
      <button onClick={btnDerecho} disabled= {botonDerecho}>Derecha</button>
    </>
  )
}

