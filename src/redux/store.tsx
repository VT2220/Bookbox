import { composeWithDevTools } from '@redux-devtools/extension';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import booksReducer from './reducers/books.reducer';
import ordersReducer from './reducers/orders.reducer';
import { rootSaga } from './sagas/root.saga';

const reducer = combineReducers({
  books: booksReducer,
  orders: ordersReducer,
});

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

const store = createStore(
  reducer,
  {},
  composeWithDevTools(applyMiddleware(...middleware))
);

sagaMiddleware.run(rootSaga);

export default store;

export type RootState = ReturnType<typeof reducer>;
