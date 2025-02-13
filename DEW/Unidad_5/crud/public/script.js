const API_URL = "http://localhost:3000/";
const form = document.getElementById("crud-form");
const tableBody = document.getElementById("table-body");
const grupoInput = document.getElementById("grupo");
const nombreInput = document.getElementById("nombre");
const idInput = document.getElementById("id");
const grupoSelectInput = document.getElementById("grupoSelect");

//Leer datos
async function fetchItems() {
    try {
        const response = await fetch(API_URL + "alumnos");
        const items = await response.json();
        tableBody.innerHTML = "";

        items.forEach(item => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${item.id}</td>
                <td>${item.nombre}</td>
                <td>${item.grupo}</td>
                <td>
                    <button onclick="fetchItemById(${item.id})">Ver</button>
                </td>
            `;
            tableBody.appendChild(row);
        });
    } catch (error) {
        alert("Error al obtener la lista:", error);
        console.error("Error al obtener la lista:", error);
    }
}

//Leer elemento
async function fetchItemById(id) {
    try {
        const response = await fetch(API_URL + "alumnos/" + id);
        const item = await response.json();
        console.log("Alumno encontrado: ", item);
        putThingsInTheForm(item);
    } catch (error) {
        console.error("Error al obtener el Alumno: ", error);
    }
}

//Agregar elemento
async function createItem(alumno) {
    await fetch(API_URL + "alumnos", {
        method: "POST",
        body: JSON.stringify( alumno ),
        headers: { "Content-Type": "application/json" }
    });
}

//Actualizar elemento
async function updateItem(alumno) {
    await fetch(`${API_URL}alumnos/${alumno.id}`, {
        method: "PUT",
        body: JSON.stringify( alumno ),
        headers: { "Content-Type": "application/json" }
    });
}

//Eliminar elemento
async function deleteItem(id) {
    const borrarObjeto = await fetch(`${API_URL}alumnos/${id}`, { method: "DELETE" });
    if (borrarObjeto.status != "OK") {
        alert("Error: Alumno no Existente")
    }
}

//Manejar formulario (Crear / Editar / Eliminar)
form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const alumno = {
        id: idInput.value.trim().toString(),
        nombre: nombreInput.value.trim().toString(),
        grupo: grupoInput.value.trim().toString()
    };

    if (e.submitter.value === "Modificar") {
        await updateItem(alumno);
    }
    if (e.submitter.value === "Agregar") {
        await createItem(alumno);
    }
    if (e.submitter.value === "Eliminar") {
        await deleteItem(alumno.id);
    }

    fetchItems(); // Recargar lista
});

//Poner los datos en el formulario
function putThingsInTheForm(object){
    idInput.value = object.id;
    grupoInput.value = object.grupo;
    nombreInput.value = object.nombre;
}

//Cargar opciones al select de Grupos
async function dynamicSelect(){
    const select = document.getElementById('grupoSelect');
    const options = await fetch(API_URL + "grupos").then(response => response.json());
    options.forEach(option => {
        const newOption = document.createElement('option');
        newOption.text = option;
        newOption.value = option;
        select.appendChild(newOption);
    });
}



// Cargar datos al iniciar
fetchItems();
// dynamicSelect();