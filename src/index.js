import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Example, { SimpleCard } from './tailwind/TailWindCard';
import { MaterialTailwindTheme, ThemeProvider } from "@material-tailwind/react";
import Gallery from './ui/profile';
import ApiCall from './apicall/ApiCall';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<React.StrictMode>
<ApiCall/>
  </React.StrictMode>
);

 
reportWebVitals();
