import { useEffect, useState } from 'react'

let obj = {}
function SearchBar() {
    const [input, setInput] = useState('')
    const [result, setResult] = useState(null)

    useEffect(() => {
        if (input === '') {
            return
        }

        let timeout;
        if (timeout) {
            clearTimeout(timeout)
        }
        timeout = setTimeout(() => {
            fetchData()
        }, 400)

        return () => {
            clearTimeout(timeout)
        }

    }, [input])

    const fetchData = async () => {
        if (obj[input]) {
            console.log('fetching from local cache ', obj, obj[input]);
            setResult(obj[input])
        } else {
            console.log('fetching from api');
            const res = await fetch(`https://dummyjson.com/products/search?q=${input}`)
            const data = await res.json()
            obj[input] = data
            setResult(data)
        }
    }

    return (
        <div className='w-3xl'>
            <input className='bg-white w-full text-black p-4 rounded-md' type='text' value={input} onChange={(e) => setInput(e.target.value)} />
            {result?.products?.length && input ? <div className='bg-white mt-1 rounded-md p-4 max-h-[400px]  overflow-scroll'>
                <ul>
                    {result.products.map(product => <li key={product.id} className='text-black text-left hover:bg-amber-50 cursor-pointer pb-2'>{product.title}</li>)}
                </ul>
            </div>
                : null
            }
        </div>
    )
}

export default SearchBar
