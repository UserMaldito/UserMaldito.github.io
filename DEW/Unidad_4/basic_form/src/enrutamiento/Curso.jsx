import { Link } from 'react-router-dom'

export default function Curso() {
    return (
        <div>
            <h1>Bienvenido a mi CURSO</h1>
            <p>Estoy en el curso 2º DAW B</p>
            <Link to="/">Volver al Inicio</Link>
        </div>
    )
}
