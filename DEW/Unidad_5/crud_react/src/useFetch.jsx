import { useState, useEffect } from 'react'

const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        fetch(url)
        .then(
            (response) => {
                if (!response.ok) {
                    throw new Error("Error en la búsqueda de alumnos: " + response.statusText);
                }

                return response.json();
            }
        )
        .then(
            (data) => {
                setData(data)
                setLoading(false)
                setError(null)
            }
        )
        .catch(
            (error) => {
                setError(error.message)
                setLoading(false)
            }
        );
    }, [url])

    return { data, loading, error }
}

export default useFetch;