import { LOGO_URL } from '../utils/constants';
import { useState } from 'react';
import { Link } from 'react-router';

const Header = () => {
  const [btnName, setBtnName] = useState('login');
  return (
    <div className='header'>
    {console.log('header rendered')}
      <div className='logo-container'>
        <img className='logo' src={LOGO_URL} alt='logo' width={100} />
      </div>
      <div className='nav-items'>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>Cart</li>
          <button className='login' onClick={() => {
            btnName === 'login' ? setBtnName('logout') : setBtnName('login');
          }}>{btnName}</button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
