import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/styles/index.css';
import './assets/styles/bootstrap.custom.css'
import App from './App';

import 'boosted/dist/css/boosted.css'
import 'boosted/dist/js/boosted.js'

import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import LoginScreen from './screens/LoginScreen';


const router= createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index={true} path='/' element={<HomeScreen />} />
      <Route  path='/products/:id' element={<ProductScreen/>} />
      <Route  path='/cart' element={<CartScreen/>} />
      <Route  path='/login' element={<LoginScreen/>} />

    </Route>
  )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
    
  </React.StrictMode>
);

reportWebVitals();
