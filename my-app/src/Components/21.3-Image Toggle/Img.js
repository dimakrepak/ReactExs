import React, { useState, useEffect, useRef } from 'react'

export default function Father() {
    const [inHover, setHover] = useState(false);
    const imgRef = useRef(null)
    const img2Ref = useRef(null)

    return (
        <div>
            {
                inHover ?
                    <img
                        onMouseLeave={() => { setHover(false) }}
                        ref={imgRef} src='./img/unnamed.jpg' alt=""
                    />
                    :
                    <img onMouseEnter={() => { setHover(true) }}
                        ref={img2Ref} src='./img/image.jpg' alt=""
                    />
            }
        </div >
    )
}
