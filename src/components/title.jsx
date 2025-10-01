import React, {useState,  useEffect } from 'react'

function Title({ id }) {
    const [data, setData] = useState({})

    useEffect(() => {
        fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
            .then(res => res.json())
            .then(data => {
                
                setData(data)
            })
    }, [id])

    return (
        <h2>
            {data.title}
        </h2>
    )
}

export default Title
