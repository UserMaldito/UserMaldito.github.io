import { Link } from "react-router-dom";

export default function Inicio() {
    return (
        <div>
            <h1>Bienvenido a mi sitio web</h1>
            <p>Esta es la página principal</p>
            <hr />
            <Link to="/Centro">Ir a mi Centro</Link>
        </div>
    )
}
