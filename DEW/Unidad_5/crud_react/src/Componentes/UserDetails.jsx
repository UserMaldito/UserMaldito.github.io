import { useParams } from 'react-router-dom';
import useFetch from '../useFetch';

export default function UserDetails (){
    const { id } = useParams();
    const { data: user, isLoading, error } = useFetch(`https://localhost:8080/alumnos/${id}`);
    return (
            <section>
                {isLoading && <p>Cargando...</p>}
                {error && <p>Error: {error.message}</p>}
                {user && (
                    <article>
                        <h1>Detalles Usuario</h1>
                        <h1>{user.id}</h1>
                        <p>{user.nombre}</p>
                        <p>{user.grupo}</p>
                    </article>
                )}
            </section>
    )
}
