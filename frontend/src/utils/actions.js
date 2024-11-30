export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const SET_CART = 'SET_CART';
export const CHECKOUT_ITEM = 'CHECKOUT_CART';
export const INCREMENT_QUANTITY = 'INCREMENT_QUANTITY'; 
export const DECREMENT_QUANTITY = 'DECREMENT_QUANTITY'; 

export const addToCart = (product) => ({
  type: ADD_TO_CART,
  payload: product,
});

export const removeFromCart = (productId) => ({
  type: REMOVE_FROM_CART,
  payload: productId,
});

export const checkoutItem = (itemId) => ({
  type: CHECKOUT_ITEM,
  payload: itemId,
});

export const incrementQuantity = (itemId) => ({
  type: INCREMENT_QUANTITY,
  payload: itemId
});

export const decrementQuantity = (itemId) => ({
  type: DECREMENT_QUANTITY,
  payload: itemId
});


export const setCart = (cart) => ({
  type: SET_CART,
  payload: cart,
});
