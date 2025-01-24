import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Shimmer from './Shimmer';
import { MENU_API } from '../utils/constants';

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    try {
      const res = await fetch(MENU_API + resId);
      const json = await res.json();
      setResInfo(json);
    } catch (err) {
      console.log(`Error while fetching restaurant menu ${err.message}`);
      throw err;
    }
  };

  if (!resInfo) {
    return <Shimmer />;
  }

  const {
    name: restaurantName,
    costForTwoMessage,
    cuisines,
  } = resInfo?.data?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards[2]?.card
      ?.card;

  console.log(itemCards);

  return (
    <div className='menu'>
      <h1>{restaurantName}</h1>
      <p>
        {cuisines.join(', ')} - {costForTwoMessage}
      </p>

      <ul>
        {itemCards?.map((itemCard) => (
          <li key={itemCard?.card?.info?.id}>
            {itemCard?.card?.info?.name} - Rs.{' '}
            {itemCard?.card?.info?.price / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
