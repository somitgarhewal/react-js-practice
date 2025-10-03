import React, { useCallback, useMemo, useState } from 'react'
import SearchBar from '../components/SearchBar'
import SearchBar2 from '../components/searchBar2'

function Practice({ items = [1, 2, 3, 4, 5] }) {
  const [count, setCount] = useState(0)

  const [inputVal, setInputVal] = useState("");

  const sumItems = useMemo(() => {
    return items.reduce((agg, item) => agg += item, 0)
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
      <div>
        <SearchBar2
          val={inputVal}
          handleSearch={(val) => alert(val)}
          handleChange={(val) => setInputVal(val)}
          isUseDebounce={true}
          delay={3000}
        />
      </div>
    </>
  )
}

export default Practice
