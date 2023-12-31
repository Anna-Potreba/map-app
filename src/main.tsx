import ReactDOM from 'react-dom/client';
import React from 'react';
import store from './store';
import { Provider } from 'react-redux'
import App from './App';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
     <App />
    </Provider>
  </React.StrictMode>,
)
