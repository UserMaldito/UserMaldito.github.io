import FrmPersona from "../FrmPersona";
import PropTypes from 'prop-types';
import ListaUsuarios from "./ListaUsuarios";
import { useState } from 'react';


Contenedor.propTypes = {
    personaList: PropTypes.arrayOf(PropTypes.object).isRequired,
    agregarPersona: PropTypes.func.isRequired,
};

let personaList = [];
function Contenedor(){
    const [numPersona, setNumPersona] = useState(0);
    

    let agregarPersona = (newPersona) => {
        personaList.push(newPersona);
        console.log(personaList);
        setNumPersona(personaList.length);
        localStorage.setItem('personaList', personaList);
    };

    return (
        <>
            <hr />
            <h4>Total de Usuarios Registrados: {numPersona} Personas</h4>
            <ListaUsuarios personaList={personaList}></ListaUsuarios>
            <FrmPersona addPersona={agregarPersona}></FrmPersona>
            <hr />
        </>
    );
}

export default Contenedor;