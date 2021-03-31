import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function Father() {
    const [data, setData] = useState(null)

    useEffect(() => {
        const source = axios.CancelToken.source();

        const loadData = async () => {
            try {
                const response = await axios.get(`https://api.chucknorris.io/jokes/random`, {
                    cancelToken: source.token,
                })
                setData(response);
            } catch (error) {
                if (axios.isCancel(error)) {
                    console.log('Request canceled', error.message)
                } else {
                    throw error;
                }
            }
        }
        loadData()

        return () => {
            source.cancel()
            // abortController.abort()
        }
    }, [])

    return (
        <div>
            {
                !data ?
                    <div>Loading......</div>
                    :
                    <div>{JSON.stringify(data)}</div>
            }
        </div>
    )
}
