import React, { useState } from 'react'

const todoState = [
    { name: "JavaScript", completed: true },
    { name: "Learn React", completed: false },
    { name: "Learn mongoDB", completed: false },
    { name: "Learn Node JS", completed: false },
]
export default function Father() {
    const [state, setState] = useState(todoState)

    const handleClick = (index) => {
        console.log(index);
        const list = [...state]
        list[index].completed = !list[index].completed
        setState(list)

    }
    return (
        <div>
            {state.map((t, index) => {
                return (
                    <div
                        key={index}>
                        <span
                            style={{
                                textDecoration: t.completed
                                    ? 'line-through'
                                    : 'none'
                            }}>
                            {t.name}
                        </span>
                        <button onClick={() => handleClick(index)}>
                            {t.completed ? '\u2718' : '\u2714'}
                        </button>
                    </div>
                )
            })}
        </div>
    )
}
