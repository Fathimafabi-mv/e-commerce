import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'

function ProductItem({id,image,name,price}) {
    const{currency}=useContext(ShopContext);
    
  return (
   <Link className='text-gray-700 curosr-pointer' to={`/product/${id}`}>
    <div className='over-flow-hidden'>
        <img className='hover:scale-110 transition ease-in-out'  src={image[0]} alt="" />
        <p className='pt-3 pb-1 text-sm'>{name}</p>
        <p className='text-sm font-medium'>{currency}{price}</p>
    </div>
   </Link> 
  )
}

export default ProductItem