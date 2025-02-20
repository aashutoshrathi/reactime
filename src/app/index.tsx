/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App';
import './styles/main.scss';
import { store } from './store'; //imported RTK Store
import { Provider } from 'react-redux'; //imported Provider

//Updated rendering sytax for React 18
const root = createRoot(document.getElementById('root'));
root.render(
  // Strict mode is for developers to better track best practices
  // <StrictMode>
  <Provider store={store}>
    <App />
  </Provider>,
  // </StrictMode>
);
