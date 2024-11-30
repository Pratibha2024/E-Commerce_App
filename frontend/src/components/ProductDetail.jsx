import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProductDetail = async () => {
      try {
        const response = await axios.get(`https://dummyjson.com/products/${id}`);
        setProduct(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProductDetail();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="product-detail">
      <img src={product.images[0]} alt={product.title} style={{width:"250px", height:"250px"}} />
      <h1>{product.title}</h1>
      <p><strong>Price:</strong>{product.price}</p>
      <p><strong>Rating:</strong> {product.rating} / 5</p>
      <p><strong>Description:</strong>{product.description}</p>
    </div>
  );
};

export default ProductDetail;
