const formulario = document.getElementById("formulario")
const numero1 = document.getElementById("num1")
const numero2 = document.getElementById("num2")
const resultado = document.getElementById("resultado")
const operacion = document.getElementById("operacion")
const calcular = document.getElementById("calcular")

// 🔹 Función que valida si debe desactivar el botón
function validarDivision() {
    let valor2 = parseInt(numero2.value)
    if (operacion.value === "divi" && valor2 === 0) {
        calcular.disabled = true
        resultado.textContent = "❌ No se puede dividir entre 0"
    } else {
        calcular.disabled = false
        resultado.textContent = ""
    }
}

// Escuchamos cambios en el input y en el select
numero2.addEventListener("input", validarDivision)
operacion.addEventListener("change", validarDivision)

formulario.addEventListener("submit", (e) => {
    e.preventDefault()
    
    let valor1 = parseInt(numero1.value)
    let valor2 = parseInt(numero2.value)
    let res = 0

    if (operacion.value === "divi" && valor2 === 0) return

    switch (operacion.value) {
        case "suma": 
            res = valor1 + valor2
            break
        case "resta": 
            res = valor1 - valor2
            break
        case "multi": 
            res = valor1 * valor2
            break
        case "divi": 
            res = valor1 / valor2
            break
        default:
            res = "Seleccione una Operación"
    }

    resultado.textContent = "Resultado: " + res
})
