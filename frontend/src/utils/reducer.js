import { ADD_TO_CART, REMOVE_FROM_CART, CHECKOUT_ITEM ,INCREMENT_QUANTITY, 
  DECREMENT_QUANTITY, SET_CART } from './actions';

//Check if cart items exist in localStorage, if not, return an empty array
function loadCartFromLocalSt() {
  const savedCart = localStorage.getItem('cart');
  return savedCart ? JSON.parse(savedCart) : [];
};


const initialState = {
  cart: loadCartFromLocalSt(),
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const newCartAdd = [...state.cart, action.payload];
      localStorage.setItem('cart', JSON.stringify(newCartAdd));
      return {
        ...state,
        cart: newCartAdd,
      };

    case REMOVE_FROM_CART:
      const newCartRemove = state.cart.filter(item => item.id !== action.payload);
      localStorage.setItem('cart', JSON.stringify(newCartRemove));
      return {
        ...state,
        cart: newCartRemove,
      };

    case CHECKOUT_ITEM:
      const newCartCheckout = state.cart.filter(item => item.id !== action.payload);
      localStorage.setItem('cart', JSON.stringify(newCartCheckout));
      return {
        ...state,
        cart: newCartCheckout,
      };

      case INCREMENT_QUANTITY:
      const newCartIncrement = state.cart.map(item =>
        item.id === action.payload
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      localStorage.setItem('cart', JSON.stringify(newCartIncrement));
      return {
        ...state,
        cart: newCartIncrement,
      };

    case DECREMENT_QUANTITY:
      const newCartDecrement = state.cart.map(item =>
        item.id === action.payload && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
      localStorage.setItem('cart', JSON.stringify(newCartDecrement));
      return {
        ...state,
        cart: newCartDecrement,
      };

    case SET_CART:
      localStorage.setItem('cart', JSON.stringify(action.payload));
      return {
        ...state,
        cart: action.payload,
      };
    default:
      return state;
  }
};

export default cartReducer;
