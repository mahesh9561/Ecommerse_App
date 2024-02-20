import React from 'react';
import { Link } from 'react-router-dom';
import { formatPrice } from "../../utils/helpers";

function Product({ product }) {
  return (
    <Link to={`/product/${product?.id}`} key={product?.id} className=' p-5 bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:shadow-lg'>
      <div className='absolute left-0 top-4 text-white bg-orange-500 capitalize px-4 py-2'>{product?.category}</div>
      <div className='mb-2'>
        <img className='w-full h-[300px] object-cover' src={product?.images[0]} alt={product.title} />
      </div>
      <div className='mb-2'>
        <div className='mb-1'>
          <span className='font-bold'>Brand: </span>
          <span className=''>{product?.brand}</span>
        </div>
        <div className='font-bold mb-1'>{product?.title}</div>
        <div className='flex items-center'>
          <span className='text-green-600 font-bold'>
            {formatPrice(product?.discountedPrice)}
          </span>
          <span className='text-gray-400 line-through ml-2'>
            {formatPrice(product?.price)}
          </span>
          <span className='text-red-500 ml-2'>
            ({product?.discountedPercentage}% Off)
          </span>
        </div>
      </div>
    </Link>
  );
}

export default Product;