// ===============================
// Métodos de Arrays en JavaScript
// ===============================

// Array de ejemplo
const numeros = [1, 2, 3, 4, 5];
const frutas = ["manzana", "banana", "pera", "mango"];
const tareas = [
  { id: 1, title: "Estudiar React", completed: true },
  { id: 2, title: "Lavar los platos", completed: false },
  { id: 3, title: "Comprar pan", completed: true },
  { id: 4, title: "Jugar al fútbol", completed: false }
];

// -------------------------------
// forEach → recorrer y ejecutar acción
// -------------------------------
console.log("forEach:");
numeros.forEach((num) => {
  console.log(`Número: ${num}`);
});

// -------------------------------
// map → crear un nuevo array transformado
// -------------------------------
console.log("\nmap:");
const dobles = numeros.map((num) => num * 2);
console.log(dobles); // [2,4,6,8,10]

// -------------------------------
// reduce → reducir a un único valor
// -------------------------------
console.log("\nreduce:");
const suma = numeros.reduce((acc, num) => acc + num, 0);
console.log(suma); // 15

// -------------------------------
// filter → filtrar elementos
// -------------------------------
console.log("\nfilter:");
const tareasCompletas = tareas.filter((t) => t.completed === true);
console.log(tareasCompletas);

// -------------------------------
// find → buscar el primer elemento que cumpla la condición
// -------------------------------
console.log("\nfind:");
const tareaPan = tareas.find((t) => t.title.includes("pan"));
console.log(tareaPan);

// -------------------------------
// some → ¿alguno cumple la condición?
// -------------------------------
console.log("\nsome:");
const hayPendientes = tareas.some((t) => t.completed === false);
console.log(hayPendientes); // true

// -------------------------------
// every → ¿todos cumplen la condición?
// -------------------------------
console.log("\nevery:");
const todasCompletas = tareas.every((t) => t.completed === true);
console.log(todasCompletas); // false
