import React from 'react';
import ReactDOM from 'react-dom/client';

import { Providers } from './app/providers';
import './styles.css';
import QueryProvider from "./providers/QueryProvider";

ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
).render(
  <React.StrictMode>
    <QueryProvider>
      <Providers />
    </QueryProvider>
  </React.StrictMode>
);