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
      <div className="nav-items">
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

const Body = () => {
    return (
        <div className="body">
            <div className='search'>
                Search
            </div>
            <div className="res-container"></div>
        </div>
    )
}

const App = () => {
  return (
    <div className='app'>
      <Header />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
