function Eje6(){

    const [colorMensaje, setColorMensaje] = React.useState("black")
    const [mensaje, setMensaje] = React.useState("Nivel de IMC")
    const [imc ,setIMC] = React.useState(0)
    const [peso, setPeso] = React.useState(0)
    const [altura, setAltura] = React.useState(0)

    const calcular = (e)=>{
        e.preventDefault();
        let nuevoIMC = (peso / (altura*altura))
        if (nuevoIMC < 18.5){
            setColorMensaje("yellow")
            setMensaje("Nivel: Bajo")
        } else if (nuevoIMC >= 18.5 && nuevoIMC <= 24.9 ) {
            setColorMensaje("green")
            setMensaje("Nivel: Normal")
        } else if (nuevoIMC >= 24 && nuevoIMC <= 29.9){
            setColorMensaje("orange")
            setMensaje("Nivel: Sobrepeso")
        } else if (nuevoIMC >= 30){
            setColorMensaje("red")
            setMensaje("Nivel: Obesidad")
        }
        setIMC(nuevoIMC)
    }

    return(
        <>
            <form action="formulario" id="formulario" onSubmit={calcular}>
                <label htmlFor="">Peso</label><br />
                <input type="number" id="peso" value={peso} onChange={(e)=> setPeso(e.target.value)}/> <br />
                <label htmlFor="" id="altura">Altura</label><br />
                <input type="number"  value={altura} onChange={(e)=> setAltura(e.target.value)} /> <br /><br />
                <button type="submit">Calcular</button>
            </form><br />
            <span style={{color: colorMensaje}}>{mensaje} {imc}</span>

            
        </>
    )
}