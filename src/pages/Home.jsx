import React, { useContext } from "react";
import Hero from "../components/Hero";
import Product from "../components/Product";
import { ProductContext } from "../contexts/ProductContext";
const Home = () => {
  const { products } = useContext(ProductContext);
  const filteredProducts = products.filter((item) => {
    return (
      item.category === "men's clothing" || item.category === "women's clothing"
    );
  });
  return (
    <div>
      <Hero />
      <section className='py-16'>
        <div className=' container mx-auto '>
          <div className='text-center my-3 text-[70px] leading-[1.1] font-light'>
            <h1>AUTUMN SALE</h1>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0'>
            {filteredProducts.map((product) => {
              return <Product product={product} key={product.id} />;
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
