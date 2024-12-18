import { Link, useNavigate } from 'react-router-dom'

export default function Ciclo() {
    const navegar = useNavigate();
    return (
        <div>
            <h1>Bienvenido a mi Ciclo</h1>
            <p>Estoy estudiando Desarrollo de Aplicaciones Web</p>
            <Link to="/Curso">Ir a mi Curso</Link>
            <hr />
            <button onClick={() => {navegar("/Curso", {replace: true})}}>Agregar Nuevo Curso</button>
        </div>
    )
}
