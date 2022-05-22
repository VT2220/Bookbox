import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { BOOK_IMAGE_PATH } from '../config';
import {
  deleteCart,
  deleteCartItem,
  setOrders,
} from '../redux/actions/orders.action';
import { useTypedSelector } from '../useTypeSelector';
import { setDefaultImage } from '../utils';

const CartItems = () => {
  const items = useTypedSelector((state) => state.orders.cart);
  const address = useTypedSelector((state) => state.orders.address);

  const dispatch = useDispatch();

  const itemsPrice = items.reduce((acc, curr) => acc + curr.price, 0);
  const tax = (itemsPrice * 5) / 100;
  const shippingCharge = Math.floor(Math.random() * 200);

  const deleteItem = (title: string) => {
    dispatch(deleteCartItem(title));
    toast.success('Book is removed from cart.');
  };

  const deleteAllItems = () => {
    dispatch(deleteCart());
    toast.success('All items removed.');
  };

  const checkout = () => {
    if (Object.keys(address).length) {
      dispatch(setOrders(items));
      dispatch(deleteCart());
      toast.success(
        'Mock checkout completed. Visit my orders page for more details.'
      );
    } else {
      toast.error('Please add your address first.');
    }
  };

  return (
    <div className="mt-4">
      {items.length > 0 ? (
        <>
          <div className="flex flex-col gap-4">
            {items.map((book) => {
              const slug = book.title.toLowerCase().replaceAll(' ', '-');
              return (
                <div
                  className="default-border card card-side bg-base-100"
                  key={slug}
                >
                  <div className="hidden shrink-0 px-4 py-3 sm:block">
                    <img
                      src={BOOK_IMAGE_PATH + book.imageLink}
                      alt={book.title}
                      className="h-36 w-24 rounded-sm object-cover "
                      onError={setDefaultImage}
                    />
                  </div>
                  <div className="w-full p-3">
                    <div className="text-md font-bold lg:text-xl">
                      {book.title}
                    </div>

                    <div className="text-sm">By {book.author}</div>
                    <div className="mt-3">
                      <strong className="text-xl">₹ {book.price}</strong> /-
                    </div>
                    <div className="badge badge-sm badge-primary">
                      🌐 {book.language}
                    </div>
                    <div className="card-actions justify-end">
                      <button
                        type="button"
                        className="btn btn-sm"
                        onClick={() => deleteItem(book.title)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div>
            <div className="default-border mt-5 bg-base-100">
              <div className="bg-slate-400 px-4 py-2 text-xl font-semibold text-white ">
                Payment info
              </div>
              <div className="px-4 py-2">
                <table className="mt-5 w-full table-auto leading-8">
                  <tbody>
                    <tr>
                      <td>Items price</td>
                      <td>₹ {itemsPrice.toFixed(2)}</td>
                    </tr>
                    <tr>
                      <td>Tax</td>
                      <td>₹ {tax.toFixed(2)}</td>
                    </tr>
                    <tr>
                      <td className="pb-2">Shipping charge</td>
                      <td>₹ {shippingCharge.toFixed(2)}</td>
                    </tr>
                    <tr className="border-t-2 border-gray-500">
                      <td className="pt-2">Total</td>
                      <td>
                        ₹ {(itemsPrice + tax + shippingCharge).toFixed(2)}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="mt-5 flex flex-wrap gap-3">
              <button
                type="button"
                className="btn btn-primary"
                onClick={checkout}
              >
                Checkout
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                onClick={deleteAllItems}
              >
                Remove all items
              </button>
            </div>
          </div>
        </>
      ) : (
        <div className="default-border flex h-60 items-center justify-center border-dashed">
          Nothing in the cart.
        </div>
      )}
    </div>
  );
};

export default CartItems;
