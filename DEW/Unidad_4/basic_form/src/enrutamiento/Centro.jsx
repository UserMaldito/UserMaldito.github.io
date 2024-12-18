import { Link } from 'react-router-dom'
export default function Centro() {
    return (
        <div>
            <h1>Bienvenido a mi CENTRO</h1>
            <p>Su nombre completo es CIFP César Manrique</p>
            <Link to="/Ciclo">Ir al Ciclo</Link>
        </div>
    )
}
