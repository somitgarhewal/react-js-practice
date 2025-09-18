import React, { useCallback, useMemo, useState } from 'react'
import SearchBar from '../components/SearchBar'

function Practice({items = [1,2,3,4,5]}) {
    const [count, setCount] = useState(0)

    const sumItems = useMemo(() => {
        return items.reduce((agg, item) => agg += item, 0 )
    }, [items])

    const logCount = useCallback(() => {
        console.log('count is ', count)
    }, [count])
    
  return (
    <>
    <div className='flex gap-4'>
      <button className='shadow-md' onClick={() => setCount(count + 1)}>Increase</button>
      <button className='shadow-md' onClick={logCount}>log count</button>
      <button className='shadow-md' onClick={() => console.log('total is', sumItems)}>Log total</button>
    </div>

      <div className='mt-4 '>
          <SearchBar />
      </div>
    </>
  )
}

export default Practice
