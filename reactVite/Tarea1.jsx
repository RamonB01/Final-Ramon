import { useState } from "react"

export default function Tarea1(){
    const [izquierda, setIzquierda] = useState(false)
    const [centro, setCentro] = useState(true)
    const [derecha, setDerecha] = useState(true)

    const ofIzquierdo = ()=>{
        setIzquierda(true)
        setCentro(false)
    }

    const ofCentro=()=>{
        setCentro(true)
        setDerecha(false)
    }

    const ofDerecha=()=>{
        setDerecha(true)
        setIzquierda(false)
    }

    return(
        <>
            <button onClick={ofIzquierdo} disabled={izquierda}>Izquierda</button>
            <button onClick={ofCentro} disabled={centro}>Centro</button>
            <button onClick={ofDerecha} disabled={derecha}>Derecha</button>
        
        </>
    )
}