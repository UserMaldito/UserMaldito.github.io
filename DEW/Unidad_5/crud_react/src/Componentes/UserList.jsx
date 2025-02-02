import { Link } from 'react-router-dom'

function UserList({users, nombre}) {
        return (
            <section>
                <h1>Lista Usuarios</h1>
                <article>
                    <ul>
                        {users.map((user) => (
                            <li key={user.id}>
                                <p>Nombre {user.nombre}</p>
                                <Link to={`/users/${user.id}`}>
                                    <button>
                                        Detalles
                                    </button>
                                </Link>
                                <Link to={`/users/${user.id}`}>
                                    <button>
                                        Editar
                                    </button>
                                </Link>
                                <Link to={`/users/${user.id}`}>
                                    <button>
                                        Eliminar
                                    </button>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </article>
            </section>
    )
}

export default UserList
