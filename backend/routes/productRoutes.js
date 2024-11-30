import express from 'express';
import { getAllProducts, getProductById, fetchProductsFromApi, updateProduct } from '../controllers/productController.js';

const router = express.Router();

router.get('/fetch', fetchProductsFromApi);
router.get('/', getAllProducts);
router.get('/:id', getProductById);
router.put('/:id', updateProduct);

export default router;
