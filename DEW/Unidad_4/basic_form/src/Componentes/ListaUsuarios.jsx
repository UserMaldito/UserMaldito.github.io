import PropTypes from 'prop-types';

ListaUsuarios.propTypes = {
    personaList: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default function ListaUsuarios({personaList}) {
    //const userList = JSON.parse(localStorage.getItem('personaList'));
    return (
        //Mostrar Lista/Tabla de Personas/Elementos
        <div>
            <hr />
            <h1>Listado de Usuarios</h1>
            {
                personaList.map((user, index) => (
                    <div key={index}>
                        <hr />
                        <p>Nombre: {user.nombre}</p>
                        <p>Mayor de Edad: {user.mayorDeEdad ? "Si" : "No"}</p>
                        <p>¿Qué Estudia?: {user.tipoEstudio}</p>
                    </div>
                    
            ))}
            <hr />
        </div>
    );
}