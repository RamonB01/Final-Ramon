const formulario = document.getElementById("formulario")
const filtrar = document.getElementById("filtrar")
const palabra = document.getElementById("textInput")
const mensaje = document.getElementById("mensaje")

const lista = ["manzana","banana", "pera","durazno", "frutilla","mango"]

formulario.addEventListener("submit", (e)=>{
    e.preventDefault()

    // mensaje.innerText = ""
    const palabraLimpia = palabra.value.trim().toLowerCase()

    if (!palabraLimpia){
        return (mensaje.innerText = "Ingrese Texto")
    }

    const coincidencia = lista.filter((p)=>
        p.trim().toLowerCase().includes(palabraLimpia)
    )

    if (coincidencia.length === 0) {
        mensaje.innerText = "No hay coincidencias"
    } else {
        coincidencia.forEach((p)=>{
            mensaje.innerText = p
        })
    }

    
    






})