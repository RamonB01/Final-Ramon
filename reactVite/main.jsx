import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import Eje4 from './Eje4.jsx'
import Eje5 from './Eje5.jsx'
import Eje6 from './Eje6.jsx'
import Tarea1 from './Tarea1.jsx'
import Tarea2 from './Tarea2.jsx'
import Tarea3 from './Tarea3.jsx'
import Tarea4 from './Tarea4.jsx'
import Tarea5 from './Tarea5.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <h3>Tarea 1</h3>
    <Tarea1></Tarea1>
    <h3>Tarea 2</h3>
    <Tarea2></Tarea2>
    <h3>Tarea 3</h3>
    <Tarea3></Tarea3>
    <h3>Tarea 4</h3>
    <Tarea4></Tarea4>
    <h3>Tarea 5</h3>
    <Tarea5></Tarea5>
    <h3>Ejercicio 4</h3>
    <Eje4></Eje4>
    <h3>Ejercicio 5</h3>
    <Eje5></Eje5>
    <h3>Ejercicio 6</h3>
    <Eje6></Eje6>
  </StrictMode>,
)
