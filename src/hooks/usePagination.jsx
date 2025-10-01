import React, { useState } from 'react'

function usePagination(totalItems, itemsPerPage, start) {

    const [currentPage, setCurrentPage] = useState(start || 1)
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    const handleNext = () => {
        if(currentPage === totalPages) return
        setCurrentPage(prev => prev + 1)
    }
     const handlePrev = () => {
        if(currentPage === 1) return
        setCurrentPage(prev => prev - 1)
    }

    const handlePageClick = (pageNo) => {
        setCurrentPage(pageNo)
    }
    
  return [handleNext, handlePrev, handlePageClick, currentPage]
}

export default usePagination
