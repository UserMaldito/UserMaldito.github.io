import { Link } from "react-router-dom";

const grupos = ["A", "B"];

export default function Daw2() {
    return (
        <>
            <h2>Alumnos del grupo 2º DAW</h2>
            <ul>
            {
                grupos
                .map((grupo, index) => (
                    <li key={index}>
                        <Link to={`/grupo/${grupo}`}>2º DAW grupo {grupo}</Link>
                    </li>
                ))
            }
            </ul>
        </>
    )
}
