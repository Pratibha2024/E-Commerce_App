import React, { useState } from 'react';
import ProductItem from './ProductItem';
import useFetchProducts from '../utils/useFetchProducts';
import { Link } from 'react-router-dom';
import '../App.css';

const ProductList = () => {
  const { products, loading, error } = useFetchProducts();
  const [search, setSearch] = useState('');

  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
    <div className='product-list-input'>
      <input type="text" placeholder="Search products" value={search}
        onChange={(e) => setSearch(e.target.value)} />
        </div>
      <div className="product-list">
        {filteredProducts.map(product => (
          <div key={product.id}>
          <ProductItem product={product} /> 
        </div>
   ))}
      </div>
      </>
  );
};

export default ProductList;
