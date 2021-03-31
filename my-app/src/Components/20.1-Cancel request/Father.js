import React, { useState, useEffect } from 'react'
import Child from './Child'


export default function Father() {
    const [fetch, setFetch] = useState(false)

    const handleClick = () => {
        setFetch(!fetch)
    }
    return (
        <div>
            <button onClick={handleClick}>Fetch</button>
            {fetch && <Child />}
        </div>
    )
}
