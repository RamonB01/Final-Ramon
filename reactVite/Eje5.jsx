import { useState } from "react"

export default function Eje5(){

    const [resultado, setResultado] = useState("Haga una operacion para tener el resultado")
    const [operacion , setOperacion] = useState("")
    const [num1, setNum1] = useState (0)
    const [num2, setNum2] = useState (0)

    const calcular =(e)=>{
        e.preventDefault();

        let res = 0
        switch (operacion){
            case "suma" :
                res = parseInt(num1) + parseInt(num2) 
                break
            case "resta" : 
                res = parseInt(num1) - parseInt(num2) 
                break
            case "multiplicacion" :
                res =  parseInt(num1) * parseInt(num2) 
                break
            case "division" : 
                res = parseInt(num1) / parseInt(num2) 
                break
            default :
                res = "Seleccione una operacion";
        }
        setResultado(res)
    }


    return(

    <>
        <form action="" onSubmit={calcular}>
        <input type="number" id="numero1" value={num1} onChange={(e)=> setNum1(e.target.value)} />
        <input type="number" id="numero2" value={num2} onChange={(e)=> setNum2(e.target.value)} /> <br />
        <select name="" id="" value={operacion} onChange={(e)=> setOperacion(e.target.value)}>
            <option value="" disabled selected>Elija una Operación</option>
            <option value="suma">Suma</option>
            <option value="resta">Resta</option>
            <option value="multiplicacion">Multiplicación</option>
            <option value="division">Division</option>
        </select>
        <button type="submit" disabled={operacion === "division" && parseInt(num2)===0}>Calcular</button>
        
        <p>{resultado}</p>


    </form>
    
    </>
    )


}