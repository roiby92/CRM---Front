import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'mobx-react'
import Company from './stores/Company'
import * as serviceWorker from './serviceWorker';
import './index.css';

const store = new Company()

ReactDOM.render(
  <React.StrictMode>
    <Provider company={store} >
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
