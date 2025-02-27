import { useContext } from 'react';
import UserContext from '../utils/UserContext';
import { LOGO_URL } from '../utils/constants';
import { useState } from 'react';
import { Link } from 'react-router';
import { useSelector } from 'react-redux';

const Header = () => {
  const [btnName, setBtnName] = useState('login');
  const { loggedInUser } = useContext(UserContext);

  // subscribing to the store using selector
  const { items: cartItems } = useSelector((store) => store.cart);
  console.log({ loggedInUser });
  console.log({cartItems});
  return (
    <div className='flex justify-between bg-pink-200 sm:bg-yellow-200 lg:bg-green-200 shadow-lg border border-solid border-black'>
      {console.log('header rendered')}
      <div className='logo-container'>
        <img className='w-20' src={LOGO_URL} alt='logo' width={100} />
      </div>
      <div className='flex items-center'>
        <ul className='flex p-4 m-4'>
          <li className='mx-2'>
            <Link to='/'>Home</Link>
          </li>
          <li className='mx-2'>
            <Link to='/about'>About</Link>
          </li>
          <li className='mx-2'>
            <Link to='/contact'>Contact</Link>
          </li>
          <li className='mx-2 font-bold'><Link to='/cart'>Cart({cartItems?.length})</Link></li>
          <li className='mx-2'>
            <Link to='/grocery'>Grocery</Link>
          </li>
          <button
            className='login'
            onClick={() => {
              btnName === 'login' ? setBtnName('logout') : setBtnName('login');
            }}
          >
            {btnName}
          </button>
          <li className='mx-2 font-bold'>{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
