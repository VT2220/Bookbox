import { Book } from '../types/books.types';
import { Action, ActionType, Address } from '../types/orders.types';

interface State {
  orders: Book[];
  cart: Book[];
  address: Address;
}

const lsOrders = localStorage.getItem('orders');
const orders = lsOrders ? JSON.parse(lsOrders) : [];

const lsCart = localStorage.getItem('cart');
const cart = lsCart ? JSON.parse(lsCart) : [];

const lsAddress = localStorage.getItem('address');
const address = lsAddress ? JSON.parse(lsAddress) : {};

const initialState = {
  orders,
  cart,
  address,
};

// eslint-disable-next-line default-param-last
export default (state: State = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.SET_ORDERS:
      return { ...state, orders: [...state.orders, ...action.payload] };
    case ActionType.SET_CART:
      return { ...state, cart: [...state.cart, action.payload] };
    case ActionType.DELETE_CART:
      return { ...state, cart: [] };
    case ActionType.DELETE_CART_ITEM:
      return { ...state, cart: action.payload };
    case ActionType.SET_ADDRESS:
      return { ...state, address: action.payload };
    default:
      return state;
  }
};
