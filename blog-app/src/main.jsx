import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css';
import F1 from './f1.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <F1 />
  </StrictMode>,
);
export default F1;