import FastAverageColor from 'fast-average-color';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { SyntheticEvent } from 'react';
import { BOOK_IMAGE_PATH } from '../config';
import { Book } from '../redux/types/books.types';
import { setCart } from '../redux/actions/orders.action';
import { useTypedSelector } from '../useTypeSelector';
import { setDefaultImage } from '../utils';

const BookCard = ({ book }: { book: Book }) => {
  const navigate = useNavigate();

  const cart = useTypedSelector((state) => state.orders.cart);
  const titles = cart.map((item) => item.title);

  const dispatch = useDispatch();

  const fac = new FastAverageColor();

  const fillColorToCard = async (
    e: SyntheticEvent<HTMLImageElement, Event>
  ) => {
    const container =
      e.currentTarget &&
      e.currentTarget.parentElement &&
      e.currentTarget.parentElement.parentElement;

    const color = await fac.getColorAsync(BOOK_IMAGE_PATH + book.imageLink);

    if (container) {
      container.style.backgroundColor = color.rgba;
    }
  };

  const buyNow = () => {
    navigate('/cart');
    const isBookInCart = Boolean(
      cart.find((item) => item.title === book.title)
    );
    if (isBookInCart) return;
    dispatch(setCart(book));
  };

  return (
    <div className="card card-compact  bg-base-100 shadow-xl">
      <div className="book-container flex justify-center bg-gray-300 p-5">
        <Link to={`books/${book.title}`} className="book relative">
          <img
            src={BOOK_IMAGE_PATH + book.imageLink}
            alt={book.title}
            className="h-64 w-44 rounded-lg object-cover"
            onLoad={fillColorToCard}
            onError={setDefaultImage}
          />
        </Link>
      </div>
      <div className="card-body">
        <h3 className="truncate text-base font-bold">{book.title}</h3>
        <p className="text-xs">{book.author}</p>
        <div className="card-actions mt-3 justify-end">
          <button
            type="button"
            className="btn btn-primary btn-sm"
            onClick={buyNow}
            disabled={titles.includes(book.title)}
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
