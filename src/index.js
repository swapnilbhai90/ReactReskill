import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import UseStateFunction from './hook/useState';
import CarApiCall from './carWebsite/carApi';
import ProductApiCall from './carWebsite/ProductApi';
import  ShowProdList from './component/ComponenetProductApi';
import ProfileCard from './carWebsite/CarCard';
 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
 <ShowProdList/>
  </React.StrictMode>
);