import './App.css';
import React, {useState, useEffect} from 'react';

function App() {
    const [products, setProducts] = useState(null)

    useEffect(() => {
        fetch("https://dummyjson.com/products").then((res) => res.json()).then(data => {
            setProducts(data.products)
    })
    }, [])

  return (
    <div className="w-screen bg-gray-500 grid grid-cols-6 gap-4">
      {products?.map(product => <Productcard title={product.title} price={product.price} thumbnail={product.thumbnail} />)}
    </div>
  );
}

export default App;


const Productcard = ({title, price, thumbnail}) => {
    return(
        <div className='border-2 border-white rounded-md lg:col-span-2 md:col-span-3 col-span-6 bg-black'>
            <h2>{title}</h2>
            <img src={thumbnail} />
            <div>{price}</div> 
        </div>
    )
}

// const url = "https://dummyjson.com/products";
// title price and thumbnail