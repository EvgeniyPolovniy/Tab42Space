import '../scss/main.scss'
import React from 'react'
import { render } from 'react-dom'
import { Provider, connect  } from "react-redux";
import App from './components/App';
import store from './store'

render(
  <Provider store={store} >
    <App />
  </Provider>,
  document.getElementById('root')
);

const pattern = window.Trianglify({
  width: window.innerWidth,
  height: window.innerHeight
});
document.body.appendChild(pattern.canvas())
