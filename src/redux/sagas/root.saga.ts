import { all } from 'redux-saga/effects';
import { getBooks } from './books.saga';

export function* rootSaga() {
  yield all([getBooks()]);
}
