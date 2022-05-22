import { ActionType, Book } from '../types/books.types';

export const getBooks = () => ({
  type: ActionType.GET_BOOKS,
});

export const setBooks = (book: Book) => {
  return {
    type: ActionType.SET_BOOKS,
    payload: book,
  };
};
