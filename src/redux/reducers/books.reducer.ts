import { Action, ActionType, Book } from '../types/books.types';

interface State {
  books: Book[];
}

const initialState = {
  books: [],
};

// eslint-disable-next-line default-param-last
export default (state: State = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.SET_BOOKS:
      return { ...state, books: action.payload };
    default:
      return state;
  }
};
