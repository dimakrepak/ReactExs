import React, { useState } from 'react'

export default function Father() {
    const [seconds, setSeconds] = useState(0)

    const handleChange = (e) => {
        // setseconds(e.target.value)
        if (e.target.name === 'hours') {
            const hours = e.target.value * 3600
            setSeconds(hours)
        } else if (e.target.name === 'minutes') {
            const minutes = e.target.value * 60
            setSeconds(minutes)
        } else if (e.target.name === 'seconds') {
            setSeconds(e.target.value)
        }
    }
    
    return (
        <div>
            <input type='text' name='hours' value={seconds / 3600} onChange={handleChange}></input>
            <input type='text' name='minutes' value={seconds / 60} onChange={handleChange}></input>
            <input type='text' name='seconds' value={seconds} onChange={handleChange}></input>
        </div>
    )
}
