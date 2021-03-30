import axios from 'axios'
import React, { useState, useEffect } from 'react'

export default function Father() {
    const [categories, setCategories] = useState([])
    const [joke, setJoke] = useState([])

    const getCategory = async () => {
        const response = await axios.get('https://api.chucknorris.io/jokes/categories')
        setCategories(response.data)
    }
    const getCategoryJoke = async (e) => {
        const response = await axios.get(`https://api.chucknorris.io/jokes/random?category=${e.target.value}`)
        setJoke(response.data.value)

    }
    return (
        <div>
            <button
                onClick={getCategory}
            >
                Categories
                </button>
            {categories.map((c, index) => {
                return (
                    <button onClick={getCategoryJoke} key={index} value={c}>{c}</button>
                )
            })}
            <p>{joke}</p>
        </div>
    )
}
