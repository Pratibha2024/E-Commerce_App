import Product from '../models/Product.js';
import Cart from '../models/Cart.js';
import axios from 'axios';

// Fetch product data from external API and save it to MongoDB
export const fetchProductsFromApi = async (req, res) => {
  try {
    const response = await axios.get('https://dummyjson.com/products');
    const products = response.data.products;

    // Save each product to the database (if not already saved)
    for (const product of products) {
      const existingProduct = await Product.findOne({ title: product.title });

      // If the product doesn't already exist in the DB, save it
      if (!existingProduct) {
        const newProduct = new Product({
          title: product.title,
          price: product.price,
          description: product.description,
          rating: product.rating,
          images: product.images,
        });
        await newProduct.save();
      }
    }

    res.status(200).json({ message: 'Products fetched and stored successfully', products });
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ message: 'Error fetching products', error: error.message });
  }
};

export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching products' });
  }
};

export const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching product' });
  }
};

// Update a product by its ID
export const updateProduct = async (req, res) => {
  try {
    const productId = req.params.id; // Get product ID from URL
    const updatedData = req.body;    // Get updated data from the request body

    // Find the product by ID and update it with the provided data
    const updatedProduct = await Product.findByIdAndUpdate(productId, updatedData, { new: true });

    if (!updatedProduct) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.status(200).json({
      message: 'Product updated successfully',
      product: updatedProduct
    });
  } catch (error) {
    console.error('Error updating product:', error);
    res.status(500).json({ message: 'Error updating product', error: error.message });
  }
};