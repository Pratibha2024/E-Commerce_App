# Commands to run app:
1) Node module install : npm install
2) Backend run: cd backend
   To start server: npm start
# Features:
1) Product Routes:
GET /products: Fetch a list of products from MongoDB.
GET /products/:id: Fetch details of a single product by its ID.
2) Cart Routes:
POST /cart: Add a product to the shopping cart.
PUT /cart/:productId: Update the quantity of a product in the cart.
DELETE /cart/:productId: Remove a product from the cart.
3) Authentication Routes:
POST /register: Register a new user.
POST /login: Authenticate user and return a JWT token.

This API serves as the backend for the ShoppyGlobe e-commerce application, providing routes to manage products, user authentication, and cart items.
