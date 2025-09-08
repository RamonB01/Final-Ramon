function FiltroFrutas(){
    
    const lista = ["manzana","banana","pera","durazno","frutilla","mango"]
    const [ulLista, setUlLista] = React.useState(lista)
    const [mensaje, setMensaje] = React.useState("Mensaje Default")

    // function MostrarFrutas(array){
    //     array.forEach(element => {
    //         const li = document.createElement("li")
    //         li.innerHTML = element
    //         ulLista.appendChild(li)
    //     });
    // }

    function mayusUno(){
        const upperCaseFruta = lista.map(fruta => fruta.charAt(0).toUpperCase() + fruta.slice(1))
        setUlLista(upperCaseFruta)
    } // charAt(0) tomo la primer letra
    // + fruta.slice(1) agrego el resto del elemneto desde la 2da letra


    function Filtrar(){
        const filtradas = lista.filter((p) => p.trim().toLocaleLowerCase().includes("n"))
        setUlLista(filtradas)
    }
    
    function reinicio(){
        setUlLista(lista)
    }

    function longitudCaracteres(){
        const longitud = lista.reduce((acc , cur)=> acc + cur.length, 0)
        // acc es el acumulador, cur es el elemento de la lista y el 0 indica el valor inicial (si fuera 3 el resultado sería 40)
        setMensaje(longitud)
    }

        function eliminarFruta(index){
        const nuevaLista = ulLista.filter((_, i) => i !== index)
        setUlLista(nuevaLista)
    }

    function eliminarFruta(index){
    // Hacemos una copia del array porque splice modifica el original
    const copiaLista = [...ulLista];

    // splice elimina 1 elemento en la posición "index"
    copiaLista.splice(index, 1);

    // Actualizamos el estado con la lista ya modificada
    setUlLista(copiaLista);
}


    return(<div>
    <p>Lista de Frutas</p>
    <ul>
        {ulLista.map((elemento, index) => (
        <li key={index}>{elemento} <button onClick={()=>eliminarFruta(index)}>X</button></li>
        ))}
    </ul>
    <p>{mensaje}</p>
    <button onClick={Filtrar}>Filtrar "N"</button>
    <button onClick={mayusUno}>Upper Case</button>
    <button onClick={reinicio}>Reinicio</button>
    <button onClick={longitudCaracteres}>Longitud</button>
    </div>)
}