import React, { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

import { BsEyeFill, BsPlus } from "react-icons/bs";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  const { id, image, category, title, price } = product;
  return (
    <div>
      <div className='border border-[#e4e4e4] h-[300px] mb-4 relative overflow-hidden group transitions'>
        <div className='w-full h-full flex justify-center'>
          {/* image */}
          <div className='w-[200px] mx-auto flex justify-center items-center'>
            <img
              className='max-h-[220px] group-hover:scale-110 transition duration-300'
              src={image}
              alt='/'
            />
          </div>
        </div>
        {/* Button */}
        <div className='absolute top-6 right-11 group-hover:right-5 p-2 flex flex-col items-center justify-center gap-y-2 opacity-0 group-hover:opacity-100 transition-all duration-600'>
          <button onClick={() => addToCart(product, id)}>
            <div className='flex justify-center items-center text-white w-12 h-12 bg-red-500'>
              <BsPlus className='3xl' />
            </div>
          </button>
          <Link
            to={`/product/${id}`}
            className='w-12 h-12 bg-white flex justify-center items-center text-primary drop-shadow-xl'
          >
            <BsEyeFill />
          </Link>
        </div>
      </div>

      {/* category an title price */}
      <div>
        <div className='text-sm capitalize text-gray-500 mb-1'>{category}</div>
        <Link to={`/product/${id}`}>
          <h2 className='font-semibold mb-1 text-[16px]'>{title}</h2>
        </Link>
        <h2 className='font-semibold text-[16px]'>${price}</h2>
      </div>
    </div>
  );
};

export default Product;
