import { Link, Outlet } from "react-router-dom";

export default function Lay_out_et() {
    return (
        <main>
            <nav>
                <span> | </span>
                <Link to="/">Inicio</Link>
                <span> | </span>
                <Link to="/Centro">Centro</Link>
                <span> | </span>
                <Link to="/Ciclo">Ciclo</Link>
                <span> | </span>
                <Link to="/Curso">Curso</Link>
                <span> | </span>
                <Link to="/Daw2">2º DAW</Link>
                <span> | </span>
                <Link to="/aokdoksf">Error</Link>
                <span> | </span>
            </nav>
            <section>
                <Outlet></Outlet>
            </section>
        </main>
    )
}