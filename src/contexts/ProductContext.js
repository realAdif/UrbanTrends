import React, { createContext, useEffect, useState } from 'react';

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        const fetchedProducts = async () => {
            const response = await fetch('https://fakestoreapi.com/products');
            const data = await response.json();

            setProducts(data);
        };
        fetchedProducts();
    }, []);
    return <ProductContext.Provider value={{ products }}>{children}</ProductContext.Provider>;
};

export default ProductProvider;
