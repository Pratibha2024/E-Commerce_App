import { useDispatch } from 'react-redux';
import { addToCart } from '../utils/actions';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

const ProductItem = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    toast.success(`${product.title} added to cart!`, {
      autoClose: 3000, 
      closeOnClick: true, 
    });
  };

  return (
    <div className="product-item">
      <img src={product.images[0]} alt={product.title} style={{width:"150px", height:"120px"}} />
      <h2>{product.title}</h2>
      <p>Price: {product.price}</p>
      <Link to={`/product/${product.id}`} className="view-detail-link"> View Details </Link>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default ProductItem;
