import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Example from './tailwind/TailWindCard';
import { ThemeProvider } from "@material-tailwind/react";
import Gallery from './ui/profile';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Gallery/>
  </React.StrictMode>
);

 
reportWebVitals();
