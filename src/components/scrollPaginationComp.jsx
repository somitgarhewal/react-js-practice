import React, { useEffect, useState, useRef } from 'react'
const ITEMS_PER_PAGE = 20
const arr = Array(400).fill(0).map((_, i) => {
    return {
        text: `i am from line ${i}`
    }
})
function ScrollPaginationComp() {
    const [data, setData] = useState([])
    const [currentPage, setCurrentPage] = useState(0)
    const bottomRef = useRef(null)
    const getNewData = (page) => {
        console.log('page', page);
        
        setCurrentPage(prev => prev + 1)
        const start = 0
        const end = start + ITEMS_PER_PAGE
        const newArr = arr.splice(start, end)
        console.log('aaa', newArr);
        setData(prev => [...prev, ...newArr])
    }

    useEffect(() => {
        let observer = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting) {
                getNewData(currentPage)
                console.log('observer called');

            }
        }, { threshold: 0.1 })
        if (bottomRef.current) {
            observer.observe(bottomRef.current)
        }
        // getNewData(1)
        return () => {
            if (bottomRef.current) {
                observer.unobserve(bottomRef.current)
            }
        }
    }, [currentPage])
    return (
        <div>
            {data?.map((item, index) => <div key={index}>{item.text}</div>)}
            <div ref={bottomRef}></div>
        </div>
    )
}

export default ScrollPaginationComp
