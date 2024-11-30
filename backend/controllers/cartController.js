import Cart from '../models/Cart.js';
import Product from '../models/Product.js';

export const addToCart = async (req, res) => {
  try {
    const { productId, quantity, userId } = req.body;

    // Ensure the product exists
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    // Check if the same product is already in the user's cart
    let cartItem = await Cart.findOne({ productId, userId });
    if (cartItem) {
      // If the product is already in the cart, update the quantity
      cartItem.quantity += quantity;
      await cartItem.save();
      return res.status(200).json({ message: 'Cart updated', cartItem });
    }

    // Otherwise, create a new cart item
    cartItem = new Cart({ productId, quantity, userId });
    await cartItem.save();

    res.status(201).json({ message: 'Product added to cart', cartItem });
  } catch (error) {
    res.status(500).json({ message: 'Error adding product to cart', error: error.message });
  }
};

export const updateCart = async (req, res) => {
  try {
    const { quantity } = req.body;
    const cartId = req.params.cartId; 

    if (!cartId) {
      return res.status(400).json({ message: 'Cart ID is required' });
    }

    const cartItem = await Cart.findById(cartId);
    if (!cartItem) {
      return res.status(404).json({ message: 'Cart item not found' });
    }

    // Update the quantity of the cart item
    cartItem.quantity = quantity;
    await cartItem.save();

    res.status(200).json({ message: 'Cart item updated', cartItem });
  } catch (error) {
    res.status(500).json({ message: 'Error updating cart', error: error.message });
  }
};

export const removeFromCart = async (req, res) => {
  try {
    const cartId = req.params.cartId;

    // Ensure the cart item exists before deleting
    const cartItem = await Cart.findByIdAndDelete(cartId);
    if (!cartItem) {
      return res.status(404).json({ message: 'Cart item not found' });
    }

    res.status(200).json({ message: 'Product removed from cart', cartItem });
  } catch (error) {
    res.status(500).json({ message: 'Error removing product from cart', error: error.message });
  }
};
