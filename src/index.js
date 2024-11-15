import React from 'react';
import ReactDOM from 'react-dom/client';
import CarApiCall from './carWebsite/carApi';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CarApiCall/>
  </React.StrictMode>
);