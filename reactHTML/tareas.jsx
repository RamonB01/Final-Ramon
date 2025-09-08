function Tareas(){
    const [url, setURL]= React.useState()
    const [lisTareas, setLisTareas]= React.useState([])
    const [lisTodasTareas, setLisTodasTareas]= React.useState([])
    const [contador, setContador] = React.useState()
    const [data, setData] = React.useState(null);
    const [estado, setEstado] = React.useState(true)

    React.useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("https://jsonplaceholder.typicode.com/todos");
            const result = await response.json();
            setLisTareas(result)
            setLisTodasTareas(result)
            // setData(result);
            };

        fetchData();
    }, []);

    function FiltrarTarea(){
        const filtrados = lisTareas.filter((el)=>(el.completed === true))
        setLisTareas(filtrados)
    }

    function soloTitulo(){
        setEstado(!estado)
    }

    function contarTares(){
        const completadas = lisTareas.reduce((acc , cur)=> acc + cur.completed,0 )
        setContador(completadas)
    }

    function buscarAut(){
        const busAut = lisTareas.find((el)=> el.title.toLowerCase().includes("aut"))
        setLisTareas([busAut])
    }
    
    
    return(
        <>
    {/* <div>{data ? <p>{data.message}</p> : <p>Cargando...</p>}</div> */}
        <button onClick={FiltrarTarea}>Completadas</button>
        <button onClick={soloTitulo}>Solo Titulos</button>
        <button onClick={contarTares}>Contar Completadas</button>
        <button onClick={buscarAut}>Buscar AUT</button>
        <p>{contador}</p>
    {estado ? (<ul>
        {lisTareas.map((elemento) => (
        <li key={elemento.id}>{elemento.title} - {elemento.completed ? "✅ Hecha" : "⏳ Pendiente"}</li>
        ))}
    </ul>) : (
        <ul>
        {lisTareas.map((elemento) => (
        <li key={elemento.id}>{elemento.title}</li>
        ))}
    </ul>)}
    </>
    )
}