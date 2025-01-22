import { LOGO_URL } from '../utils/constants';
import { useState } from 'react';

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
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
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
