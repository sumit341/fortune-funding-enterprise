import React from 'react';
import ReactDOM from 'react-dom/client';

import { Providers } from './app/providers';
import './styles.css';

ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
).render(
  <React.StrictMode>
    <Providers />
  </React.StrictMode>
);