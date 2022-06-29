import { Fragment, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import BookCard from '../components/BookCard';
import { getBooks } from '../redux/actions/books.actions';
import { useTypedSelector } from '../useTypeSelector';

const Home = () => {
  const books = useTypedSelector((state) => state.books.books);
  const dispatch = useDispatch();

  const [noOfBooks, setNoOfBooks] = useState(8);

  useEffect(() => {
    dispatch(getBooks());
  }, []);

  return (
    <div className="mx-auto max-w-screen-xl p-10">
      <div className="grid gap-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
        {books.slice(0, noOfBooks).map((obj) => (
          <Fragment key={obj.title.toLowerCase().replaceAll(' ', '-')}>
            <BookCard book={obj} />
          </Fragment>
        ))}
      </div>
      <div className="mt-5 flex justify-center">
        {books.length > noOfBooks && (
          <button
            type="button"
            className="btn btn-ghost"
            onClick={() => setNoOfBooks((no) => no * 2)}
          >
            Load more
          </button>
        )}
      </div>
    </div>
  );
};

export default Home;
