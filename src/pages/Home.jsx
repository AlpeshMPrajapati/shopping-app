import React, { useEffect, useState } from 'react'
import Product from '../components/Product'

const Home = () => {
  const API = 'https://fakestoreapi.com/products';
  const [loading,setLoading] = useState(false);
  const [products,setProducts] = useState([]);

  async function fetchProductData(){
    setLoading(true);
    try {
      const result = await fetch(API);
      const data = await result.json();
      console.log(data)
      setProducts(data)
    } catch (error) {
      console.log("error in fetching Product")
      setProducts([]);
    }

    setLoading(false);
  }

  useEffect(() => {
   fetchProductData()
  }, [])
  

  return (
    <div>
      {
        loading ?
        (
          <div className='min-h-[80vh] flex flex-col items-center justify-center'>
            <p className='font-bold text-2xl text-gray-700'>Loading...</p>
          </div>
        ) :
        products.length > 0 ? 
        (
          <div className='grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[80vh]'>
            {
              products.map((product)=>(
                <Product key={product.id} product = {product}/>
              ))
            }
          </div>
        ) :
        <div  className='flex justify-center items-center'>
          <p>No Data Found</p>
        </div>

      }
    </div>
  )
}

export default Home