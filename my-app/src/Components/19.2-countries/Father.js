import React, { useState, useEffect } from 'react'
import axios from 'axios';

export default function Father() {
    const [data, setData] = useState([])
    const [input, setInput] = useState('')

    const getCountries = async () => {
        const response = await axios.get('https://restcountries.eu/rest/v2/all')
        const countryNames = response.data.map(n => n.name)
        setData(countryNames)
    }
    useEffect(() => {
        getCountries()
    }, [])

    const handleChange = (e) => {
        setInput(e.target.value)
    }
    const findCountry = () => {
        return data.filter(c => c.toLowerCase().includes(input))
    }


    return (
        <div>
            <label>
                Search:
            </label>
            <input
                type='text'
                value={input}
                onChange={handleChange}
            >
            </input>

            {findCountry().map(c => {
                return (
                    <li key={c}>
                        {c}
                    </li>
                )
            })}
        </div>
    )
}
