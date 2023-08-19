import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import toast from 'react-hot-toast';
import {add,remove} from '../redux/slices/CartSlice'

const Product = ({product}) => {

  const {cart} = useSelector((state)=>state);
  const dispatch = useDispatch();

  const addToCart = ()=>{
    dispatch(add(product));
    toast.success("Item added to Cart")
  }

  const removeFromCart = () =>{
    dispatch(remove(product.id));
    toast.error("Item removed from Cart!")
  }

  return (
    <div className='group flex flex-col items-center justify-between hover:scale-110 transition duration-300 ease-in p-4 mt-10 ml-5 rounded-xl shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]  hover:shadow-[0px_0px_95px_53px_#00000024]'>
      
    {/* for shadow the website : manu arora tailwind css check it for shadow homework */}
      <div>
        <p className='text-gray-700 font-bold text-lg text-left truncate w-40 mt-1'>{product.title}</p>
      </div>
      <div>
        <p className='w-40 text-gray-400 font-normal text-[10px] text-left'>{product.description.split(" ").slice(0,10).join(" ")+"..."}</p>
      </div>
      <div className='h-[180px]'>
        <img src={product.image} alt="" className='h-full w-full' />
      </div>
      <div className='flex items-center justify-between gap-12 w-full mt-5'>
        <div>
          <p className='text-green-600 font-semibold'>${product.price}</p>
        </div>

        {
          cart.some((p)=>p.id === product.id) ? 
          (<button className='text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] p-1 px-3 uppercase group-hover:bg-gray-700 group-hover:text-white transition duration-300 ease-in ' onClick={removeFromCart}>Remove Item</button>) : 
          (<button className='text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] p-1 px-3 uppercase group-hover:bg-gray-700 group-hover:text-white transition duration-300 ease-in '  onClick={addToCart}>Add To Cart</button>)
        }
      </div>

    </div>
  )
}

export default Product