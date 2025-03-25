import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './router';
import { i } from 'react-router/dist/development/fog-of-war-CGNKxM4z';

import "./global.css"
import "./reset.css"

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);



root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
