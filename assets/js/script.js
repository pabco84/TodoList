
const Listadetareas = document.querySelector("#Tareastotales")
const tareainput = document.querySelector("#Tareas")
const btnAgregar = document.querySelector("#agregarTarea")
var contadortareas = 4;
let tot = document.querySelector("#totales")
let realizadas =document.querySelector("#realizadas")

const tareas = [
    {
        ID: 1,
        Tarea: "Apagar el despetador"
    },
    {
        ID: 2,
        Tarea: "Ducharse y tomar desayuno"
    },
    {
        ID: 3,
        Tarea: "Prepararse para la aventura"
    },
]

/* Agregador de tareas */
btnAgregar.addEventListener("click", () => {
    if (tareainput.value === ""){
    alert ("Ingrese una tarea");}
    else {
const nombretarea = {ID: contadortareas, Tarea:tareainput.value}
contadortareas = contadortareas + 1;
tareas.push(nombretarea);
tareainput.value = "";



/* Esritor en la pantalla de las nuevas tareas */
let html = ""
for (let pega of tareas) {
html += `<li style="list-style: none;">${pega.ID} ${pega.Tarea} <button onclick="borrar(${pega.ID})"> x </button> <input type="checkbox"></li>`;
}
Listadetareas.innerHTML = html;
tot.innerHTML="Total:" + tareas.length;

}})

/* eliminador de tareas */
function borrar(ID){
const nombretarea = tareas.findIndex((ele) => ele.ID == ID)
contadortareas = contadortareas - 1;
tareas.splice(nombretarea, 1);
tareainput.value = "";



/* Esritor en la pantalla de las nuevas tareas */
let html = ""
for (let pega of tareas) {
html += `<li style="list-style: none;">${pega.ID} ${pega.Tarea} <button onclick="borrar(${pega.ID})"> x </button> <input type="checkbox"></li>`;
}
Listadetareas.innerHTML = html;
tot.innerHTML="Total:" + tareas.length;

}