import React, { useEffect, useState } from 'react'
import Title from '../components/title';
import usePagination from '../hooks/usePagination';

const ITEMS_PER_PAGE = 10;
function Tempo() {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty')
            .then(res => res.json())
            .then(data => {

                setData(data)
            })
    }, [])
    const [handleNext, handlePrev, handlePageClick, currentPage] = usePagination(data.length, ITEMS_PER_PAGE, 1)

    const currentItems = data.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

    return (
        data ?
            <div>
                {currentItems.map(item => <Title id={item} />)}
                <button onClick={() => handlePrev()}>Prev</button>
                {[...Array(Math.ceil(data.length / ITEMS_PER_PAGE)).keys()].map((_, i) => i + 1).map(page =>
                    <button style={{ background: page === currentPage && 'blue'  }} key={page} onClick={() => handlePageClick(page)}>{page}</button>
                )}
                <button onClick={() => handleNext()}>Next</button>

                {/* {data?.map(item => <Title id={item} />)} */}
            </div>
            : <div>Loading...</div>
    )
}

export default Tempo
