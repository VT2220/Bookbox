import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { API } from '../../config';
import { setBooks } from '../actions/books.actions';
import { ActionType } from '../types/books.types';

const getBooksApi = () => axios.get(`${API}/books`);

function* handleGetBooks() {
  try {
    const { data } = yield call(getBooksApi);
    yield put(setBooks(data));
  } catch (error) {
    console.log(error);
  }
}

export function* getBooks() {
  yield takeLatest(ActionType.GET_BOOKS, handleGetBooks);
}
