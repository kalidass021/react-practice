import { useState } from 'react';
import RestaurantCard from './RestaurantCard';
import { resList } from '../utils/mockData';

const Body = () => {
  const [restaurants, setRestaurants] = useState(resList);
  const handleClick = () => {
      const topRatedRestaurants = resList.filter(({info}) => info.avgRating > 4.5);
      setRestaurants(topRatedRestaurants);
  }
  return (
    <div className='body'>
      <div className='search'>Search</div>
      <div className='filter'>
        <button
          className='filter-btn'
          onClick={handleClick}
        >
          Top Rated
        </button>
      </div>
      <div className='res-container'>
        {restaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
