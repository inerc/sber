import thunk from 'redux-thunk';
import { createStore, combineReducers ,applyMiddleware, compose  } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducers from './reducers/rootReducer';
import Saga from './sagas/rootSaga';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
      combineReducers(reducers),
   composeEnhancers(applyMiddleware(thunk, sagaMiddleware))
  );

    sagaMiddleware.run(Saga);

  return store;
};



