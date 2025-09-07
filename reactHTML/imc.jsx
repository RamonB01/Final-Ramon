function IMC(){
    const [peso, setPeso] = React.useState(null)
    const [altura, setAltura] = React.useState(null)
    const [imc, setIMC] = React.useState(0)
    const [mensaje, setMensaje] = React.useState("No se realizó un calculo de IMC")
    const [colorM, setColorM] = React.useState("black")

    function calcularIMC(e){
        e.preventDefault()
        let valor1 = peso 
        let valor2 = altura
        let res = valor1 / (valor2*valor2)
        
        setIMC(res)
        if (res < 18.5){
            setMensaje("Nivel Bajo")
            setColorM("yellow")
        } else if (res >= 18.5 && res <= 24.9){
            setMensaje("Nivel Normal")
            setColorM("green")
        } else if (res >= 25 && res <= 29.9){
            setMensaje("Nivel de Sobrepeso")
            setColorM("orange")
        } else if (res >= 30){
            setMensaje("Nivel de Obesidad")
            setColorM("red")
        } 
        // console.log(res)

    }



    return(<>
    <form action="">
        <p>Peso</p>
        <input type="number" id="" value={peso} onChange={(e)=>setPeso(e.target.value)} />
        <p>Altura</p>
        <input type="number" id="" value={altura} onChange={(e)=>setAltura(e.target.value)} />
        <button onClick={calcularIMC}>Calcular</button>

    </form>
    <p>Resultado {imc}</p>
    <p style={{color:colorM}}>{mensaje}</p>
    </>)
}