import React from 'react';
import ReactDOM from 'react-dom/client';

const Header = () => {
  return (
    <div className='header'>
      <div className='logo-container'>
        <img
          className='logo'
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdaMYtVi9_tfNcpsbGGseU6ehYgV9UeU3h7A&s'
          alt='logo'
          width={100}
        />
      </div>
      <div className='nav-items'>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = () => {
  return (
    <div className='res-card'>
      <img
        className='res-logo'
        src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/f1e2963ba6371e787f367ae0a2300e91'
        alt='res-image'
      />
      <h3>Meghana foods</h3>
      <h4>Biryani, South Indian, Tandoori</h4>
      <h4>4.4 starts</h4>
      <h4>38 mins</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className='body'>
      <div className='search'>Search</div>
      <div className='res-container'>
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div className='app'>
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
