import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { BOOK_IMAGE_PATH } from '../config';
import { getBook } from '../redux/services/books.services';

const Book = () => {
  const { title } = useParams();

  const [book, setBook] = useState({
    author: '',
    country: '',
    imageLink: '',
    language: '',
    link: '',
    pages: 0,
    title: '',
    year: 1970,
    description: '',
    price: 0,
  });

  useEffect(() => {
    if (title) {
      getBook(title).then((data) => {
        setBook(data[0]);
      });
    }
  }, []);

  return (
    <main className="mx-auto max-w-screen-xl p-10">
      <div className="flex flex-col gap-10 sm:flex-row">
        <section className="shrink-0">
          <div className="max-w-[250px] rounded-sm bg-stone-100 px-14 py-7 sm:max-w-none lg:py-14 lg:px-20">
            <div className="book-3d">
              <img src={BOOK_IMAGE_PATH + book.imageLink} alt={book.title} />
              <div className="book-3d-shadow" />
            </div>
          </div>
        </section>
        <section>
          <h1 className="text-2xl sm:text-3xl">{book.title}</h1>
          <div className="mt-1">
            By {book.author} | {book.country}
          </div>
          <div className="mt-2 mb-7 font-semibold">
            <span className="text-2xl">₹ {book.price}</span>
            &nbsp;Only
          </div>
          <div className="flex flex-col gap-4">
            <div className="default-border max-w-xs rounded-sm p-3">
              <table className="w-full text-left">
                <tbody>
                  <tr>
                    <td>Available in</td>
                    <td>{book.language}</td>
                  </tr>
                  <tr>
                    <td>Total pages</td>
                    <td>{book.pages}</td>
                  </tr>
                  <tr>
                    <td>Publish year</td>
                    <td>{book.year}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="flex gap-4 border-b-2 border-black pb-5">
              <button type="button" className="btn btn-primary">
                Add to cart
              </button>
              <button type="button" className="btn btn-secondary">
                Buy now
              </button>
            </div>
            <p>{book.description}</p>
          </div>
        </section>
      </div>
      <section className="mt-10 flex flex-col gap-5 border-t-2 border-black pt-5">
        <div className="title text-xl sm:text-2xl">
          Special offers and product promotions
        </div>
        <ul className="list-inside list-disc leading-8">
          <li>
            Get 7.5% up to Rs. 1500 Instant Discount on Yes Bank Credit Card EMI
            transactions.
          </li>
          <li>
            No cost EMI available on select cards. Please check EMI options
            above for more details.
          </li>
          <li>Get GST invoice and save up to 28% on business purchases</li>
        </ul>
        <div className="title text-xl sm:text-2xl">About Author</div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate
          perferendis odio mollitia dolores perspiciatis quibusdam molestiae
          dolorem a harum dignissimos ratione amet magni qui ullam tempora,
          quisquam consequatur? Hic exercitationem praesentium ipsam corrupti,
          facilis reprehenderit veritatis eligendi explicabo, assumenda fugiat
          debitis accusantium sint molestiae ratione, asperiores architecto!
          Non, ratione officiis?
        </p>
      </section>
    </main>
  );
};

export default Book;
