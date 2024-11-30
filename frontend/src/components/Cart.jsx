import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, checkoutItem, incrementQuantity, decrementQuantity } from '../utils/actions';
import CartItem from './CartItem';

const Cart = () => {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const handleRemove = (productId) => {
    dispatch(removeFromCart(productId));
  };

  const handleCheckout = (item) => {
    dispatch(checkoutItem(item.id)); 
  };

  const handleIncrement = (itemId) => {
    dispatch(incrementQuantity(itemId));
  };

  const handleDecrement = (itemId) => {
    dispatch(decrementQuantity(itemId));
  };

  return (
    <div className="cart">
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        cart.map((item) => (
          <CartItem
            key={item.id}
            item={item}
            onRemove={handleRemove} 
            onCheckout={handleCheckout}
            onIncrement={handleIncrement}
            onDecrement={handleDecrement}
          />
        ))
      )}
    </div>
  );
};

export default Cart;
