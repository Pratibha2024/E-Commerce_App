import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';  
import { removeFromCart } from '../utils/actions';  
import { toast } from 'react-toastify';  

const Checkout = () => {
  const cart = useSelector((state) => state.cart); 
  const dispatch = useDispatch();
  const navigate = useNavigate(); 

  // Calculate total price
  const calculateTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  // Handle Checkout
  const handleCheckout = (e) => {
    e.preventDefault();
    toast.success("Item checked out successfully");

    if (cart.length === 0) {
      toast.error("Your cart is empty. Please add items to the cart.");
      return;
    }

    cart.forEach(item => {
      dispatch(removeFromCart(item.id));
    });

    navigate('/cart');
  };

  return (
    <div className="checkout">
      <h2>Checkout</h2>
      <div className="cart-items">
        <h3>Your Cart</h3>
        {cart.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <ul>
            {cart.map((item) => (
              <li key={item.id}>
                <span>{item.title} x {item.quantity}</span> - ${item.price * item.quantity}
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="total-price">
        <h3>Total: ${calculateTotalPrice()}</h3>
      </div>
      <div className="checkout-btn-container">
        <button onClick={handleCheckout} className="checkout-btn">
          Proceed to Checkout
        </button>
      </div>
      </div>
  );
};

export default Checkout;

