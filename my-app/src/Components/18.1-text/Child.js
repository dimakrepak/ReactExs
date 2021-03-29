import React, { useState } from 'react'

export default function Child({ text, length }) {

    const [hidden, setHidden] = useState(true)

    const handleClick = () => {
        setHidden(!hidden);
    }
    return (

        <div>
            {
                hidden ?
                    <p>{text.substring(0, length)}<button onClick={() => handleClick()}>More</button></p>
                    :
                    <p>{text}<button onClick={() => handleClick()}>Less</button></p>

            }
        </div>
    )
}
