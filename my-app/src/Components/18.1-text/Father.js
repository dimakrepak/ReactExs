import React from 'react'
import Child from './Child'

export default function Father() {
    return (
        <div>
            <Child
                text="Hello Beautifull"
                length={5}
            />
        </div>
    )
}
