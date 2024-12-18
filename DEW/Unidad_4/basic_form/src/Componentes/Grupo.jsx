import { useParams } from "react-router-dom"

const alumnos = [
    {grupo: "A", nombre: "Juan"},
    {grupo: "A", nombre: "Eva"},
    
    {grupo: "B", nombre: "Ana"},
    {grupo: "B", nombre: "Julia"},
    {grupo: "B", nombre: "Antonio"}
];

export default function Grupo() {
    const param = useParams();
    return (
        <section>
            <h3>Alumnos del Curso 2º DAW {param.letra}</h3>
            <ul>
                {
                    alumnos
                    .filter(alumno => alumno.grupo === param.letra)
                    .map(alumno => (
                        <li key={alumno.nombre}>{alumno.nombre}</li>
                    ))
                }
            </ul>
        </section>
    )
}
