import express from 'express';
import { addToCart, updateCart, removeFromCart } from '../controllers/cartController.js';

const router = express.Router();

router.post('/', addToCart);
router.put('/:cartId', updateCart);
router.delete('/:cartId', removeFromCart);

export default router;
