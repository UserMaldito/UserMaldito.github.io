import UserList from "./UserList";
import useFetch from "../useFetch";

export default function Home (){
    const { data: users, loading, error } = useFetch('https://localhost:3000/alumnos');
    return (
            <section>
                <p>Hola</p>
                {loading && <p>Cargando...</p>}
                {error && <p>Error: {error.message}</p>}
                {users && <UserList users={users} />}
            </section>
        )
}
