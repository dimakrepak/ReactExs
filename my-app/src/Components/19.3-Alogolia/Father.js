import axios from 'axios'
import React, { useState, useEffect } from 'react'

const api = 'https://hn.algolia.com/api/v1/search?query='

export default function Father() {
    const [query, setQuery] = useState('hooks')
    const [data, setData] = useState([])
    const [load, setLoad] = useState(true)

    const getData = async () => {
        try {
            const data = await axios.get(`${api}${query}`)
            const title = data.data.hits.map(c => {
                return {
                    title: c.title,
                    url: c.url
                }
            })
            setLoad(false)
            setData(title)

        } catch (error) {
            alert(error)
        }
    }

    useEffect(() => {
        getData()
    }, [])

    const handleChange = (e) => {
        setQuery(e.target.value)
    }
    const handleClick = (e) => {
        getData()
    }

    return (
        <div>
            <label>Search </label>
            <input
                value={query}
                input='text'
                onChange={handleChange}>
            </input>
            <button onClick={handleClick}>Submit</button>
            {
                load ?
                    <div>...Loading</div>
                    :
                    <div>
                        {
                            data.map((c, index) => {
                                return (
                                    <li
                                        key={index}
                                    >
                                        <a href={c.url} target="_blank" rel='noreferrer'>{c.title}</a>
                                    </li>
                                )
                            })
                        }
                    </div>
            }
        </div>
    )
}
