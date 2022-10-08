import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import Transactions from './pages/transaction';

const root = ReactDOMClient.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Transactions />
  </React.StrictMode>);
