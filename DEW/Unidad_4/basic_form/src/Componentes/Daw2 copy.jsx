const grupos = ["A", "B"];
const alumnos = [
    {grupo: "A", nombre: "Juan"},
    {grupo: "A", nombre: "Eva"},
    
    {grupo: "B", nombre: "Ana"},
    {grupo: "B", nombre: "Julia"},
    {grupo: "B", nombre: "Antonio"}
];

export default function Daw2(grupo) {
    
    
    if (!grupos.includes(grupo)) {
        return <p>El grupo {grupo} no existe.</p>
    }
    return (
        <>
            <h2>Alumnos del grupo 2º DAW {grupo}</h2>
            <ul>
            {
                alumnos
                .filter((alumno) => alumno.grupo === grupo)
                .map((alumno, index) => (
                    <li key={index}>{alumno.nombre}</li>
                ))
            }
            </ul>
        </>
    )
}
