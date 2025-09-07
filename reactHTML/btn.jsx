
function BtnOnOf(){
    const [btnDerecha, setBtnDerecha]= React.useState(true)
    const [btnIzquierda, setBtnIzquierda]= React.useState(false)

    function togleBtn(){
        setBtnDerecha(!btnDerecha)
        setBtnIzquierda(!btnIzquierda)

    }


    return(
        <>
            <button disabled={btnIzquierda} onClick={togleBtn}>Izquierda</button>
            <button disabled={btnDerecha} onClick={togleBtn}>Derecha</button>
        </>
    )

}