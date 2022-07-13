
const Listadetareas = document.querySelector("#Tareastotales")
const tareainput = document.querySelector("#Tareas")
const btnAgregar = document.querySelector("#agregarTarea")

const tareas = [
    {
        ID: 16456345,
        Tarea: "Apagar el despetador"
    },
    {
        ID: 78456385,
        Tarea: "Ducharse y tomar desayuno"
    },
    {
        ID: 31695634,
        Tarea: "Preparar se para la aventura"
    },
]
btnAgregar.addEventListener("click", () => {
console.log(tareainput)
const nombretarea = {ID: Date.now(), Tarea:tareainput.value}
console.log(nombretarea)
tareas.push(nombretarea)
tareainput.value = ""

let html = ""
for (let pega of tareas) {
html += `<li style="list-style: none;">${pega.ID} ${pega.Tarea} <button onclick="borrar(${pega.id})"> x </button></li>`;
}
Listadetareas.innerHTML = html;
})
