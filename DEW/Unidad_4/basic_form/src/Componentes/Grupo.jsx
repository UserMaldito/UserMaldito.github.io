import { useParams, useNavigate, Link } from "react-router-dom"

const alumnos = [
    {grupo: "A", nombre: "Juan"},
    {grupo: "A", nombre: "Eva"},
    
    {grupo: "B", nombre: "Ana"},
    {grupo: "B", nombre: "Julia"},
    {grupo: "B", nombre: "Antonio"}
];

export default function Grupo() {
    const param = useParams();
    const navegar = useNavigate();

    return (
        <section>
            <h3>Alumnos del Curso 2º DAW {param.letra}</h3>
            
            <br />
            <Link to="/grupo/CrearUsuario">
                <button>Agregar Nuevo Alumnado</button>
            </Link>
            <br />
            <table>
                <tr>
                    <th>| Id |</th>
                    <th>| Nombre |</th>
                    <th>| Grupo |</th>
                </tr>
                {
                    alumnos
                    .filter(alumno => alumno.grupo === param.letra)
                    .map((alumno, index) => (
                        <tr key={index}>
                            <td>| {index + 1} |</td>
                            <td>| {alumno.nombre} |</td>
                            <td>| {alumno.grupo} |</td>
                        </tr>
                    ))
                }
            </table>
            <br />
            <button onClick={() => navegar(-1)}>Volver</button>
        </section>
    )
}
