import React, { useState, useEffect, useRef } from 'react'

export default function Father() {
    const [edit, setEdit] = useState(false)

    const inputRef = useRef(null)

    const editModeClick = (e) => {
        setEdit(!edit)

    }
    useEffect(() => {
        if (edit) inputRef.current.focus()
    }, [edit])
    
    return (
        <div>
            {
                edit ?
                    <div>
                        <input
                            ref={inputRef}
                            type='text'>
                        </input>
                        <button onClick={editModeClick}>save</button>

                    </div>
                    :
                    <button onClick={editModeClick}>edit</button>
            }

        </div>
    )
}
