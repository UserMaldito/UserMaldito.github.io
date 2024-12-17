import { useState } from 'react'
import './App.css'
import PropTypes from 'prop-types';

FrmPersona.propTypes = {
    addPersona: PropTypes.func.isRequired,
};

function FrmPersona({addPersona}) {
	//No ponerlo global, repetirá el último valor recibido
	const simplePersona = {
		nombre: "User",
		mayorDeEdad: true,
		tipoEstudio: "Bachillerato"
	};

	let setNombre;
	let setMayorEdad;
	let setTipoEstudio;
	
	[simplePersona.nombre, setNombre] = useState(simplePersona.nombre); 
	[simplePersona.mayorDeEdad, setMayorEdad] = useState(simplePersona.mayorDeEdad);
	[simplePersona.tipoEstudio, setTipoEstudio] = useState(simplePersona.tipoEstudio); 
	
	

	console.log(simplePersona);
	
	return (
		<>
		<form action='#' onSubmit={(e) => {
			e.preventDefault();
			addPersona(simplePersona);
		}}>
		<label htmlFor="nombre">Nombre: </label>
		<input type='text' id='nombre' name='nombre' value={simplePersona.nombre} onChange={e => {
					setNombre(e.target.value);
					// console.log(e.target.value);
				}
			}
		></input>

		<label htmlFor="mayorEdad">¿Mayor de edad?</label>
		<input type='checkbox' id='mayorEdad' name='mayorEdad' checked={simplePersona.mayorDeEdad} onChange={(e) => {
					setMayorEdad(e.target.checked);
					console.log(e.target.checked);
				}
			}
		></input>


		<p>Tipo de Estudio: </p>
		<label htmlFor="Bachillerato">Bachillerato</label>
		<input type='radio' id='Bachillerato' value='Bachillerato' name='estudios' checked={simplePersona.tipoEstudio === 'Bachillerato'} onChange={(e) => {
					setTipoEstudio(e.target.value);
					console.log(e.target.value);
				}
			}
		></input>

		<label htmlFor="Ciclo Superior">Ciclo Superior</label>
		<input type='radio' id='Ciclo Superior' value='Ciclo Superior' name='estudios' checked={simplePersona.tipoEstudio === 'Ciclo Superior'}  onChange={(e) => {
					setTipoEstudio(e.target.value);
					console.log(e.target.value);
				}
			}
		></input>
		<br /><br />

		<input type="submit" value="Agregar Persona" />
		</form>
		</>
	)
}
export default FrmPersona
