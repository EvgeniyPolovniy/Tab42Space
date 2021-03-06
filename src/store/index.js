import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducer from '../reducers/index';

const enhancer = compose(
  applyMiddleware(
    thunk
  ),
  window.devToolsExtension ? window.devToolsExtension() : f => f
);

const store = createStore(
  reducer,
  {},
  enhancer
);

export default store;