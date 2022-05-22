import { Link } from 'react-router-dom';
import { BOOK_IMAGE_PATH } from '../config';
import { useTypedSelector } from '../useTypeSelector';

const Orders = () => {
  const orders = useTypedSelector((state) => state.orders.orders);

  return (
    <div className="mx-auto max-w-screen-xl p-10">
      <h1 className="mb-8 text-3xl">My orders</h1>
      {orders.length > 0 ? (
        <div className="flex flex-col gap-4">
          {orders.map((book) => {
            const slug = book.title.toLowerCase().replaceAll(' ', '-');
            return (
              <div
                className="card card-normal bg-base-100 shadow-xl sm:card-side"
                key={slug}
              >
                <div className="flex shrink-0 justify-center bg-gray-300 py-7 px-7 sm:bg-base-100 sm:pl-7 sm:pr-0">
                  <div className="book relative h-52 w-36">
                    <img
                      src={BOOK_IMAGE_PATH + book.imageLink}
                      alt={book.title}
                      className="h-full w-full rounded-lg object-cover"
                    />
                  </div>
                </div>
                <div className="card-body">
                  <div className="leading-7">
                    <h2 className="card-title">{book.title}</h2>
                    <span className="text-sm">By {book.author}</span>
                  </div>
                  <span>
                    <strong className="text-xl">₹ {book.price}</strong> /-
                  </span>
                  <p>{`${book.description.slice(0, 250)}...`}</p>
                  <div className="card-actions justify-end gap-3">
                    <a
                      href={book.link}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-primary"
                    >
                      Read e-book
                    </a>
                    <Link
                      to={`/books/${book.title}`}
                      className="btn btn-secondary"
                    >
                      Go to store
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="default-border grid h-96 place-items-center border-dashed">
          No orders to display.
        </div>
      )}
    </div>
  );
};

export default Orders;
