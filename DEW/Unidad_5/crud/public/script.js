
const urlServer = "http://localhost:3000/";

( () => {
    
    selectGrupos();
}
)();

//Agregar Alumnos
async function crud_Create(alumno){
    await fetch(urlServer + "alumnos", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(alumno)
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.log(error);
    });
}

//Listar Alumnos
async function crud_ReadAll(){
    let listado = [];

    await fetch(urlServer + "alumnos")
    .then(response => response.json())
    .then(data => {
        listado = data;
    })
    .catch(error => {
        console.log(error);
    });

    return listado;
}

//Buscar Alumnos por ID
async function crud_ReadById(id){
    let alumno = null;

    await fetch(urlServer + "alumnos/" + id)
    .then(response => response.json())
    .then(data => {
        alumno = data;
    })
    .catch(error => {
        console.log(error);
    });

    return alumno;
}

//Actualizar Alumnos
async function crud_Update(alumno){
    await fetch(urlServer + "alumnos/" + alumno.id, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(alumno)
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.log(error);
    });
}

//Eliminar Alumnos
async function crud_Delete(id){
    await fetch(urlServer + "alumnos/" + id, {
        method: "DELETE"
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.log(error);
    });
}

async function crud_ReadGrupos(){
    let grupos = [];

    await fetch(urlServer + "grupos")
    .then(response => response.json())
    .then(data => {
        grupos = data;
    })
    .catch(error => {
        console.log(error);
    });

    return grupos;
}

function MostrarListado(){
    let listado = crud_ReadAll();
    let tabla = document.getElementById("tabla_alumnos");
    tabla.innerHTML = "";
    listado.forEach(alumno => {re
        let fila = tabla.insertRow();
        let celda = fila.insertCell();
        celda.textContent = alumno.id;
        celda = fila.insertCell();
        celda.textContent = alumno.nombre;
        celda = fila.insertCell();
        celda.textContent = alumno.grupo;
        celda = fila.insertCell();
        let botones = celda.insertCell();
        let btnVer = document.createElement("button");
        btnEdit.textContent = "Detalles";
        let btnEditar = document.createElement("button");
        btnEdit.textContent = "Editar";
        let btnBorrar = document.createElement("button");
        btnEdit.textContent = "Borrar";
        botones.appendChild(btnVer);
        botones.appendChild(btnEditar);
        botones.appendChild(btnBorrar);
        btnVer.addEventListener("click", () => {
            MostrarDetalles(alumno.id);
        });
        btnEditar.addEventListener("click", () => {
            MostrarEdicion(alumno);
        });
        btnBorrar.addEventListener("click", () => {
            BorrarAlumno(alumno.id);
        });
        
    });
}
function selectGrupos(){
    let select = document.getElementById("select_grupos");
    let grupos = crud_ReadGrupos();

    grupos.forEach(grupo => {
        let option = document.createElement("option");
        option.value = grupo.id;
        option.text = grupo.descripcion;
        select.appendChild(option);
    });
}