import { useState, useEffect, useContext } from 'react';
import RestaurantCard, { withExpressLabel } from './RestaurantCard';
import Shimmer from './Shimmer';
import { resList } from '../utils/mockData';
import { Link } from 'react-router';
import useOnlineStatus from '../utils/useOnlineStatus';
import UserContext from '../utils/UserContext';

const Body = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState('');

  const onlineStatus = useOnlineStatus();
  const RestaurantCardExpress = withExpressLabel(RestaurantCard);

  const { loggedInUser, setUserName } = useContext(UserContext);

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

  if (!onlineStatus) {
    return (
      <h1>Looks like you're offline, please check your internet connection</h1>
    );
  }

  if (restaurants.length === 0) {
    return <Shimmer />;
  }
  return (
    <div className='body'>
      {console.log('body rendered')}
      <div className='flex'>
        <div className='m-4 p-4'>
          <input
            type='text'
            className='border border-solid border-black'
            value={searchText}
            onChange={(e) => {
              const { value } = e.target;
              setSearchText(value);

              const searchedRestaurants = restaurants.filter((restaurant) =>
                restaurant.info.name.toLowerCase().includes(value)
              );

              setFilteredRestaurants(searchedRestaurants);

              // regex powered search
              // const searchTextRegex = new RegExp(value, 'i'); // i flag for case insensitive
              // const searchedRestaurants = restaurants.filter((restaurant) => searchTextRegex.test(restaurant.info.name))
              // setFilteredRestaurants(searchedRestaurants);
            }}
          />
          <button
            className='mx-2 px-4 py-2 bg-green-300 rounded-xl cursor-pointer'
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
        <div className='flex items-center py-2'>
          <button
            className='px-4 py-2 bg-green-100 m-4 rounded-lg'
            onClick={handleClick}
          >
            Top Rated
          </button>
        </div>
        <div className='flex items-center py-2'>
          <label>Username</label>
          <input
            type='text'
            className='border border-black'
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
      </div>
      <div className='flex flex-wrap'>
        {filteredRestaurants.map((restaurant) => (
          <Link
            to={`/restaurants/${restaurant.info.id}`}
            key={restaurant.info.id}
          >
            {restaurant.info.sla.deliveryTime < 15 ? (
              <RestaurantCardExpress resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
