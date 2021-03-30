import React, { useState, useEffect } from 'react';
import axios from 'axios';



export default function Father() {
    const [data, setData] = useState([])

    const getApi = async () => {
        const data = await axios.get('https://swapi.dev/api/films/3/')
        setData(data.data)
    }

    useEffect(() => {
        getApi()
    }, [])

    return (
        <div>
            <h1>Movie: {data.title}</h1>
            <h2>Movie: {data.director}</h2>
        </div>
    )
}
