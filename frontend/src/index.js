import React from 'react';
import ReactDOM from 'react-dom';
import './common/css/normalize.css';
import './common/css/reset.css';
import store from 'redux/store'
import { Provider } from 'react-redux'
import App from './App';
import { BrowserRouter } from 'react-router-dom'
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>

    </BrowserRouter>

  </React.StrictMode>,
  document.getElementById('root')
);


