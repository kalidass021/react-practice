import { useState, useEffect } from 'react';
import RestaurantCard from './RestaurantCard';
import Shimmer from './Shimmer';
import { resList } from '../utils/mockData';

const Body = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState('');

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
      setFilteredRestaurants(
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
    return <Shimmer />;
  }
  return (
    <div className='body'>
      {console.log('body rendered')}
      <div className='filter'>
        <div className='search'>
          <input
            type='text'
            className='search-box'
            value={searchText}
            onChange={(e) => {
              const { value } = e.target;
              setSearchText(value);

              const searchedRestaurants = restaurants.filter((restaurant) => restaurant.info.name.toLowerCase().includes(value));

              setFilteredRestaurants(searchedRestaurants);

              // regex powered search
              // const searchTextRegex = new RegExp(value, 'i'); // i flag for case insensitive
              // const searchedRestaurants = restaurants.filter((restaurant) => searchTextRegex.test(restaurant.info.name))
              // setFilteredRestaurants(searchedRestaurants);
            }}
          />
          <button
            onClick={() => {
              // const searchedRestaurants = restaurants.filter(
              //   (restaurant) =>
              //     restaurant.info.name.toLowerCase().includes(searchText)
              // );
              // setFilteredRestaurants(searchedRestaurants);
            }}
          >
            Search
          </button>
        </div>
        <button className='filter-btn' onClick={handleClick}>
          Top Rated
        </button>
      </div>
      <div className='res-container'>
        {filteredRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
