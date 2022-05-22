import { Book } from '../types/books.types';
import { ActionType, Address } from '../types/orders.types';

export const setOrders = (books: Book[]) => {
  const lsOrders = localStorage.getItem('orders');
  let items: Book[] = lsOrders ? JSON.parse(lsOrders) : [];
  items = items.concat(books);
  localStorage.setItem('orders', JSON.stringify(items));
  return {
    type: ActionType.SET_ORDERS,
    payload: books,
  };
};

export const setCart = (book: Book) => {
  const lsCart = localStorage.getItem('cart');
  const items: Book[] = lsCart ? JSON.parse(lsCart) : [];
  items.push(book);
  localStorage.setItem('cart', JSON.stringify(items));
  return {
    type: ActionType.SET_CART,
    payload: book,
  };
};

export const deleteCart = () => {
  localStorage.removeItem('cart');
  return {
    type: ActionType.DELETE_CART,
  };
};

export const deleteCartItem = (title: string) => {
  const lsCart = localStorage.getItem('cart');
  let items: Book[] = lsCart ? JSON.parse(lsCart) : [];
  items = items.filter((item) => item.title !== title);
  localStorage.setItem('cart', JSON.stringify(items));
  return {
    type: ActionType.DELETE_CART_ITEM,
    payload: items,
  };
};

export const setAddress = (address: Address) => {
  localStorage.setItem('address', JSON.stringify(address));
  return {
    type: ActionType.SET_ADDRESS,
    payload: address,
  };
};
