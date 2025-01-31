import { useSelector, useDispatch } from 'react-redux';
import ItemList from './ItemList';
import { clearCart } from '../redux/features/cartSlice';

const Cart = () => {
  const { items: cartItems } = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  if (!cartItems?.length) {
    return <h1 className='text-center mx-auto my-4 font-bold text-xl'>Your cart is empty, add something!</h1>
  }

  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className='text-center m-4 p-4'>
      <h1 className='text-2xl font-bold'>Cart</h1>
      <div className='w-6/12 m-auto'>
        <button
          className='p-2 m-2 bg-black text-white rounded-lg'
          onClick={handleClearCart}
        >
          Clear cart
        </button>
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
