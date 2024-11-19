import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import UseStateFunction from './hook/useState';
import CarApiCall from './carWebsite/carApi';
import ProductApiCall from './carWebsite/ProductApi';
 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <ProductApiCall />
  </React.StrictMode>
);