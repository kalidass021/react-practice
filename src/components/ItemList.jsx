import { useDispatch } from 'react-redux';
import { CLOUDINARY_BASE_URL } from '../utils/constants';
import { addItem, removeItem } from '../redux/features/cartSlice';
import { useLocation } from 'react-router';

const ItemList = ({ items, dummy }) => {
  const dispatch = useDispatch();
  // console.log({ items });
  // console.log(dummy);
  const { pathname } = useLocation();

  const handleAddItem = (item) => {
    // dispatch an action
    console.log({ item });
    dispatch(addItem(item));
  };

  const handleRemoveItem = (item) => {
    console.log('handleRemoveItem called', item);
    dispatch(removeItem(item));
  }
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className='m-2 p-2 border-b-2 border-gray-200 text-left'
        >
          <div className='absolute'>
            {pathname === '/cart' ? (
              <button
                className='p-2 mx-16 rounded-lg bg-black text-white shadow-lg'
                onClick={() => handleRemoveItem(item)}
              >
                Remove +
              </button>
            ) : (
              <button
                className='p-2 mx-16 rounded-lg bg-black text-white shadow-lg'
                onClick={() => handleAddItem(item)}
              >
                Add +
              </button>
            )}
          </div>
          <img
            src={CLOUDINARY_BASE_URL + item.card.info.imageId}
            className='w-11'
          />
          <div className='py-2'>
            <span>{item.card.info.name}</span>
            <span> - ₹ {item.card.info.price / 100}</span>
          </div>
          <p className='text-xs'>{item.card.info.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
