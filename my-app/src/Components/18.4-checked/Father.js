import React, { useState } from 'react'

const arr = ["one", "two", "three", "four", "five"];

export default function Father() {
    const [state, setState] = useState(arr.map(item => ({ value: item, checked: false })))

    const handleChecked = (index) => {
        const newArr = [...state]
        newArr[index].checked = !newArr[index].checked
        setState(newArr)
    }
    const handleDelete = (e) => {
        const newArr = state.filter(c => !c.checked)
        setState(newArr)
    }
    const handleReset = (e) => {
        setState(arr.map(item => ({ value: item, checked: false })))
    }
    return (

        <div>
            {state.map((c, index) => {
                return (
                    <li
                        key={index}>
                        < input
                            type="checkbox"
                            checked={c.checked}
                            onChange={() => handleChecked(index)}
                        >
                        </input>
                        {c.value}
                    </li>
                )
            })}
            <button onClick={handleDelete}>Delete</button>
            <button onClick={handleReset}>Reset</button>
        </div >
    )
}
