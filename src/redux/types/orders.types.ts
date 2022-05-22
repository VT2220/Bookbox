import { Book } from './books.types';

export enum ActionType {
  SET_ORDERS = 'SET_ORDERS',
  SET_CART = 'SET_CART',
  DELETE_CART = 'DELETE_CART',
  DELETE_CART_ITEM = 'DELETE_CART_ITEM',
  SET_ADDRESS = 'SET_ADDRESS',
}

interface setOrders {
  type: ActionType.SET_ORDERS;
  payload: Book[];
}

interface setCart {
  type: ActionType.SET_CART;
  payload: Book;
}

interface deleteCart {
  type: ActionType.DELETE_CART;
}

interface deleteCartItem {
  type: ActionType.DELETE_CART_ITEM;
  payload: Book[];
}

// address
export interface Address {
  addressLine1: string;
  addressLine2: string;
  state: string;
  city: string;
  pincode: string;
}

interface setAddress {
  type: ActionType.SET_ADDRESS;
  payload: Address;
}

export type Action =
  | setOrders
  | setCart
  | deleteCartItem
  | deleteCart
  | setAddress;
