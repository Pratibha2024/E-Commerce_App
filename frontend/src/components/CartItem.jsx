import { toast } from 'react-toastify';

const CartItem = ({ item, onRemove, onCheckout, onIncrement, onDecrement }) => {

  function handleRemove() {
    onRemove(item.id);
    toast.warning("Item removed successfully", {
      autoClose: 3000, 
    });
  };
  function handleCheckout() {
    onCheckout(item);
    toast.success("Item Checkout successfully",{
      autoClose:3000,
    });
  };
  function handleIncrement() {
    onIncrement(item.id);
    toast.info("Item quantity increased", {
      autoClose: 3000,
    });
  };
  function handleDecrement() {
    if (item.quantity > 1) {
      onDecrement(item.id);
      toast.info("Item quantity decreased", {
        autoClose: 3000,
      });
    } else {
      toast.error("Quantity cannot be less than 1", {
        autoClose: 3000,
      });
    }
  };

  return (
    <div className="cart-item">
    <div className="cart-item-img">
      <img src={item.images} alt={item.title} style={{ width: "100px", height: "100px" }} />
    </div>
    <div className="cart-item-details">
      <h2>{item.title}</h2>
      <p>Price: ${item.price}</p>
    </div>
    <div className="cart-item-actions">
      <button onClick={handleRemove}>Remove Item</button>
      <button onClick={handleCheckout}>Checkout Item</button>
      <div className="quantity-controls">
          <button onClick={handleDecrement}>-</button>
          <span>{item.quantity}</span>
          <button onClick={handleIncrement}>+</button>
        </div>
    </div>
  </div>
)};

export default CartItem;
