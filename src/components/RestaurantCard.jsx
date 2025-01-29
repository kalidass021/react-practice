import { CLOUDINARY_BASE_URL } from '../utils/constants';

const RestaurantCard = ({ resData }) => {
  const {
    name,
    cuisines,
    avgRating,
    costForTwo,
    deliveryTime,
    cloudinaryImageId,
  } = resData?.info;
  return (
    <div className='m-4 p-4 w-[250px] bg-gray-50 hover:bg-gray-400'>
      <img
        className='rounded-lg'
        src={CLOUDINARY_BASE_URL + cloudinaryImageId}
        alt='res-image'
      />
      <h3 className='font-bold py-4 text-lg'>{name}</h3>
      <h4>{cuisines.join(', ')}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{deliveryTime} mins</h4>
    </div>
  );
};

// Higher Order Component
// Input - RestaurantCard => RestaurantCardExpress

export const withExpressLabel = (RestaurantCard) => {
  return (props) => {
    return <>
      <label className='absolute bg-black text-white m-1 p-1 rounded-lg'>Express</label>
      <RestaurantCard {...props} />
    </>
  }
}

export default RestaurantCard;
