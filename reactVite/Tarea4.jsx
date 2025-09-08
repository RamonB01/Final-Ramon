import { useState } from "react"

export default function Tarea4(){
    
    const [nombre, setNombre] = useState("")
    const [apellido, setApellido] = useState("")
    const [edad, setEdad] = useState(Number)
    const [altura, setAltura] = useState(Number)
    const [email, setEmail] = useState("")
    const [validacion, setValidación] = useState("Usuario invalido")
    const [colorValidacion, setColorVAlidacion] = useState("red")

    const enviar=(e)=>{
        e.preventDefault()

        if (nombre === ""){
            setValidación("Nombre debe contener entre 1 a 50 caracteres")
            setColorVAlidacion("red")
        } else if (apellido === ""){
            setValidación("Apellido debe contener entre 1 a 50 caracteres")
            setColorVAlidacion("red")
        } else if (edad < 18){
            setValidación("Debe ser mayor de edad")
            setColorVAlidacion("red")
        } else if (altura > 230){
            setValidación("Altura MAXIMA 230 cm")
            setColorVAlidacion("red")
        } else if (email === ""){
            setValidación("Email no puede estar vacio")
            setColorVAlidacion("red")
        } else if (!email.includes("@")){
            setValidación('Email debe contener "@"')
            setColorVAlidacion("red")
        } else {
            setValidación("Usuario Valido")
            setColorVAlidacion("Green")
        }



    }

    return(
        <>
        <form action="" onSubmit={enviar}>
            <label htmlFor="">Nombre</label><br />
            <input type="text" value={nombre} onChange={(e)=> setNombre(e.target.value)} minLength={1} maxLength={50}/> <br />
            <label htmlFor="">Apellido</label><br />
            <input type="text" value={apellido} onChange={(e)=> setApellido(e.target.value)} minLength={1} maxLength={50}/> <br />
            <label htmlFor="">Edad</label><br />
            <input type="number" value={edad} onChange={(e)=> setEdad(e.target.value)} min={1}/> <br />
            <label htmlFor="">Altura (cm)</label><br />
            <input type="number" value={altura} onChange={(e)=> setAltura(e.target.value)}/> <br />
            <label htmlFor="">Email</label><br />
            <input type="text" value={email} onChange={(e)=> setEmail(e.target.value)}/> <br />


            <button type="submit">Enviar</button>
        </form>
        <p style={{color: colorValidacion}}>{validacion}</p>
        </>
    )
}