import React, { useContext } from "react";
import { FiTruck } from "react-icons/fi";
import { useParams } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";
import { ProductContext } from "../contexts/ProductContext";
const ProductDetails = () => {
  const { id } = useParams();
  const { products } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);

  const product = products.find((item) => {
    return item.id === parseInt(id);
  });

  if (!product) {
    return (
      <section className='h-full flex justify-center items-center'>
        Loading...
      </section>
    );
  }
  const { title, price, description, image } = product;

  return (
    <section className='pt-32 pb-12 lg:py-32 h-screen flex items-center mb-40'>
      <div className='container mx-auto  '>
        <div className='mt-60 lg:flex'>
          <div className='mx-10'>
            <img src={image} alt='' className='w-[200px]' />
          </div>

          <div className='flex-1'>
            <div className='my-4'>
              <p className='font-semibold my-2'>{title}</p>
              <p>{description}</p>
              <p className='font-semibold my-2'>${price}</p>
            </div>

            <button
              onClick={() => addToCart(product, product.id)}
              className='text-white bg-primary px-3 py-3 my-3'
            >
              Add to cart
            </button>

            <div className='mb-20'>
              <div className='flex items-center text-[25px] gap-x-3'>
                <FiTruck />
                <p>Delivery </p>
              </div>
              <div className='flex items-center justify-between'>
                <p>1-2 days Fast Delivery</p>
                <p>$9.99</p>
              </div>
              <div className='flex items-center justify-between'>
                <p>3-4 days Delivery </p>
                <p>$4.99</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
