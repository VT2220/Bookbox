import { Link } from 'react-router-dom';
import logo from '../images/logo.png';
import menuIcon from '../images/menu.png';
import { useTypedSelector } from '../useTypeSelector';

const Header = () => {
  const cart = useTypedSelector((state) => state.orders.cart);
  return (
    <div className="navbar">
      <div className="flex-1">
        <Link to="/" className="flex items-center gap-2">
          <>
            <img
              src={logo}
              alt="bookbox"
              width={48}
              height={48}
              className="object-cover"
            />
            <h1 className="text-xl">Bookbox</h1>
          </>
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu hidden p-0 sm:menu-horizontal">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/orders">My orders</Link>
          </li>
          <li>
            <Link to="/cart" className="flex items-center">
              <div>Cart</div>
              {cart.length > 0 && (
                <span className="badge badge-primary mt-[1px] rounded-full">
                  {cart.length}
                </span>
              )}
            </Link>
          </li>
        </ul>
        <div className="dropdown dropdown-end sm:hidden">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <img src={menuIcon} alt="Hamburger menu" width={32} height={32} />
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content menu rounded-box menu-compact mt-3 w-52 bg-base-100 p-2 shadow"
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/orders">My orders</Link>
            </li>
            <li>
              <Link to="/cart">Cart</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
