import { useParams } from 'react-router';
import useRestaurantMenu from '../utils/useRestaurantMenu';
import Shimmer from './Shimmer';

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

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
