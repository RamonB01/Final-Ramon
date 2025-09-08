import { useState } from "react";

export default function Tarea3(){

  const [direccion, setDireccion] = useState("row");
  const [justificado, setJustificado] = useState("flex-start");
  const [alineado, setAlineado] = useState("stretch");

  return (
    <div style={{ padding: "20px" }}>
      <h2>Controlar Flexbox con Select</h2>

      {/* Controles */}
      <div style={{ marginBottom: "20px" }}>
        <label>
          Dirección:{" "}
          <select value={direccion} onChange={(e) => setDireccion(e.target.value)}>
            <option value="row">Fila (row)</option>
            <option value="column">Columna (column)</option>
            <option value="row-reverse">Fila inversa (row-reverse)</option>
            <option value="column-reverse">Columna inversa (column-reverse)</option>
          </select>
        </label>
        <br />

        <label>
          Justificado:{" "}
          <select
            value={justificado}
            onChange={(e) => setJustificado(e.target.value)}
          >
            <option value="flex-start">Inicio</option>
            <option value="center">Centro</option>
            <option value="flex-end">Fin</option>
            <option value="space-between">Espacio entre</option>
            <option value="space-around">Espacio alrededor</option>
            <option value="space-evenly">Espacio uniforme</option>
          </select>
        </label>
        <br />

        <label>
          Alineado:{" "}
          <select value={alineado} onChange={(e) => setAlineado(e.target.value)}>
            <option value="stretch">Estirar</option>
            <option value="flex-start">Arriba / Izquierda</option>
            <option value="center">Centro</option>
            <option value="flex-end">Abajo / Derecha</option>
          </select>
        </label>
      </div>

      {/* Contenedor flex */}
      <div
        style={{
          display: "flex",
          flexDirection: direccion,
          justifyContent: justificado,
          alignItems: alineado,
          border: "2px solid black",
          height: "300px",
          width: "100%",
          gap: "10px",
          padding: "10px",
        }}
      >
        {/* Hijos */}
        <div style={{ background: "lightcoral", width: "60px", height: "60px" }}></div>
        <div style={{ background: "lightblue", width: "60px", height: "60px" }}></div>
        <div style={{ background: "lightgreen", width: "60px", height: "60px" }}></div>
      </div>
    </div>
  );
}