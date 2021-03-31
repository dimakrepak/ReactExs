import React, { useState, useEffect, useRef } from 'react'
import ReactPlayer from 'react-player'

export default function Father() {
    const videoRef = useRef(null)

    const play = () => {
        videoRef.current.play()
    }
    const stopIt = () => {
        videoRef.current.pause()
    }
    return (
        <div>
            <video ref={videoRef} width="750" height="450" controls>
                <source src="https://sample-videos.com/video123/mp4/240/big_buck_bunny_240p_10mb.mp4" />
            </video>
            <button onClick={play}>Play</button>
            <button onClick={stopIt}>Stop</button>
        </div >
    )
}
