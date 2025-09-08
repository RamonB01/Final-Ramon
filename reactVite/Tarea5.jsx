import { useEffect, useState } from "react";

export default function Tarea5() {
  const [personas, setPersonas] = useState([]);
  const [tareas, setTareas] = useState([]);
  const [seleccion, setSeleccion] = useState(null);

  useEffect(() => {
    const cargarPersonas = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      if (res.ok) {
        const nuevasPersonas = await res.json();
        setPersonas(nuevasPersonas);
      }
    };
    cargarPersonas();
  }, []);

  const cargarTareas = async (userId) => {
    const res = await fetch(
      "https://jsonplaceholder.typicode.com/todos?userId=" + userId
    );
    if (res.ok) {
      const tareasJson = await res.json();
      setTareas(tareasJson);
      setSeleccion(userId);
    }
  };

  return (
    <>
      <h1>Listado de personas</h1>

      {personas.map((persona) => (
        <div key={persona.id} style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}>
          <p><b>ID:</b> {persona.id}</p>
          <p><b>Nombre:</b> {persona.name}</p>
          <p><b>Usuario:</b> {persona.username}</p>
          <p><b>Email:</b> {persona.email}</p>
          <p><b>Sitio web:</b> {persona.website}</p>
          <button onClick={() => cargarTareas(persona.id)}>Ver tareas</button>

          {seleccion === persona.id && (
            <div style={{ marginTop: "10px", paddingLeft: "20px" }}>
              <h3>Tareas</h3>
              <ul>
                {tareas.map((tarea) => (
                  <li
                    key={tarea.id}
                    style={{
                      color: tarea.completed ? "green" : "red",
                      textDecoration: tarea.completed ? "line-through" : "none"
                    }}
                  >
                    {tarea.title}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ))}
    </>
  );
}
