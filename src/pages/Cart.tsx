import AddressForm from '../components/AddressForm';
import CartItems from '../components/CartItems';

const Cart = () => {
  return (
    <div className="mx-auto max-w-screen-xl p-5 sm:p-10">
      <div className="grid gap-10 md:grid-cols-2 md:gap-px md:bg-black">
        <div className="bg-[#dedbd3] px-5 lg:px-10">
          <div className="title text-xl">Shipping address</div>
          <AddressForm />
        </div>
        <div className="bg-[#dedbd3] px-5 lg:px-10">
          <span className="title text-xl">Shopping bag</span>
          <CartItems />
        </div>
      </div>
    </div>
  );
};

export default Cart;
