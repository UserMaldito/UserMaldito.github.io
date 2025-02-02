import { useState } from 'react';
/*  De alguna manera, tengo que hacer que la lista de usuarios
    se comunique y se incremente desde aquí...
    Estaba pensando en importarla, maybe ponerle un import
*/

const CrearUsuarios = () => {
    const [id, setId] = useState(0);
    const [nombre, setNombre] = useState('');
    const [grupo, setGrupo] = useState('');

    const AgregarAlumno = (e) => {
        e.preventDefault();
        const nuevoAlumno = { id, nombre, grupo };
        console.log('Nuevo Alumno: ', nuevoAlumno);

        setId(0);
        setNombre('');
        setGrupo('');
    };

    return (
        <form onSubmit={AgregarAlumno}>
            <h2>Agregar Alumno</h2>
            <fieldset>
                <label>Id:</label>
                <input
                    type="number"
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                    required
                />
            </fieldset>
            <fieldset>
                <label>Nombre:</label>
                <input
                    type="text"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    required
                />
            </fieldset>
            <fieldset>
                <label>Grupo:</label>
                {/* Cambiar tipo de input a select */}
                <select name="grupo" id="grupo" required onChange={(e) => setGrupo(e.target.value)}>
                    <option value="A">A</option>
                    <option value="B">B</option>
                </select>
                {/* <input
                    type="grupos"
                    value={grupo}
                    onChange={(e) => setGrupo(e.target.value)}
                    required
                /> */}
            </fieldset>
            <button type="submit">Agregar Alumno</button>
        </form>
    );
};

export default CrearUsuarios;