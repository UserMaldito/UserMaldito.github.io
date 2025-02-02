import { Link, Outlet } from "react-router-dom";

export default function LayoutOutlet() {
    return (
        <main>
            <nav>
                <span> | </span>
                <Link to="/">Inicio</Link>
                <span> | </span>
                <Link to="/alumnos">Listado Alumnos</Link>
                <span> | </span>
                <Link to="/create">Crear Alumno</Link>
                <span> | </span>
                <Link to="/read:id">Detalles Alumno</Link>
                <span> | </span>
                <Link to="/update:id">Modificar Alumno</Link>
                <span> | </span>
                <Link to="/delete:id">Eliminar Alumno</Link>
                <span> | </span>
            </nav>
            <section>
                <Outlet></Outlet>
            </section>
        </main>
    )
}