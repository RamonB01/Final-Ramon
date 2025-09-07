const ul = document.getElementById("lista")
const btnFiltrar = document.getElementById("filtrar")
const url = "https://jsonplaceholder.typicode.com/todos"
const msjError = document.getElementById("msjError")

btnFiltrar.addEventListener("click", async () => {
    const response = await fetch(url)
    if (!response.ok) {
        msjError.innerText = "No se pudo conectar"
        return
    }

    const data = await response.json()
    if (data && data.length > 0){
        const completadas = data.filter((t) => t.completed === true)
        completadas.forEach(element => {
            
            const li = document.createElement("li")
            li.innerHTML = `
            Tarea: ${element.title} <br>
            Completada: ✅`
            ul.appendChild(li)
        });

    }




})


