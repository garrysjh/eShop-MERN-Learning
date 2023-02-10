import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ListingContextProvider } from './context/ListingContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ListingContextProvider>
      <App />
    </ListingContextProvider>
  </React.StrictMode>
);

