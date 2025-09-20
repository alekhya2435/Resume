// index.js or main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from'./App.jsx';
import F1 from './f1.jsx'; // F1 is your main component (probably App)
import './index.css'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
