function Formulario(){

    const [operacion, setOperacion] = React.useState("suma")
    const [num1 ,setNum1] = React.useState(null)
    const [num2 ,setNum2] = React.useState(null)
    const [resultado, setResultado] = React.useState(0)

    function Calcular(e){
        e.preventDefault()
        switch(operacion){
            case "suma":
                setResultado(num1 + num2)
                break
            case "resta":
                setResultado(num1 - num2)
                break
            case "multi":
                setResultado(num1 * num2)
                break
            case "divi":
                setResultado(num1 / num2)
                break
            default:
                setResultado("Haga una operación")   
                break 
        }

    }



    return <>
        <form action="" id="formulario">
            <input type="number" name="num1" id="num1" value={num1} onChange={(e)=>setNum1(Number(e.target.value))} />
            <input type="number" name="num2" id="num2" value={num2} onChange={(e)=>setNum2(Number(e.target.value))} /> <br />
            <select name="" id="operacion" value={operacion} onChange={(e) => setOperacion(e.target.value)}>
                <option value="suma">Suma</option>
                <option value="resta">Resta</option>
                <option value="multi">Multiplicacion</option>
                <option value="divi">Division</option>
            </select>
            <button type="submit" disabled={operacion === "divi" && num2 === 0} onClick={Calcular}>Calcular</button> <br />
        </form>

        <p>Resultado: {resultado}</p>
    </>

}