import React from 'react';
import { StrictMode, Suspense } from 'react';
import { Provider } from 'react-redux';
import { createRoot } from 'react-dom/client';
import store from './utils/store';
import App from './App';
const ProductList = React.lazy(() => import('./components/ProductList'));
import Cart from './components/Cart';
const ProductDetail = React.lazy(() => import('./components/ProductDetail'));
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
const Checkout = React.lazy(() => import('./components/Checkout'));
const Error = React.lazy(() => import('./components/Error'));

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [ 
      {
        path: "/",
        element: <ProductList/>,
      },
      {
        path: "/cart",
        element: <Cart/>,
      },
      {
        path: "/product/:id",
        element: <ProductDetail/>,
      },
      {
        path: "/checkout",
        element: <Checkout/>,
      }
    ],
    errorElement: <Error/>,
  }]);

  createRoot(document.getElementById('root')).render(
    <StrictMode>
      <Provider store={store}>
       <Suspense fallback={<div>Loading...</div>}>
        <RouterProvider router={appRouter} />
        </Suspense>
      </Provider>
    </StrictMode>,
  );
