export enum ActionType {
  GET_BOOKS = 'GET_BOOKS',
  SET_BOOKS = 'SET_BOOKS',
}

export interface Book {
  author: string;
  country: string;
  imageLink: string;
  language: string;
  link: string;
  pages: number;
  title: string;
  year: number;
  description: string;
  price: number;
}

interface getBooks {
  type: ActionType.GET_BOOKS;
}

interface setBooks {
  type: ActionType.SET_BOOKS;
  payload: Book[];
}

export type Action = getBooks | setBooks;
