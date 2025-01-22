import { useState, useEffect } from 'react';
import RestaurantCard from './RestaurantCard';
import { resList } from '../utils/mockData';

const Body = () => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await fetch(
        'https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.89960&lng=80.22090&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING'
      );
      const json = await res.json();
      setRestaurants(
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
    } catch (err) {
      console.error(`Error while fetching the data ${err.message}`);
      throw err;
    }
  };

  const handleClick = () => {
    const topRatedRestaurants = resList.filter(
      ({ info }) => info.avgRating > 4.5
    );
    setRestaurants(topRatedRestaurants);
  };

  if (restaurants.length === 0) {
    return <h1>Loading...</h1>
  }
  return (
    <div className='body'>
      <div className='search'>Search</div>
      <div className='filter'>
        <button className='filter-btn' onClick={handleClick}>
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
