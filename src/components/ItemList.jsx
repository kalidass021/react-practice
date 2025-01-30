import {CLOUDINARY_BASE_URL} from '../utils/constants';

const ItemList = ({ items, dummy }) => {
  console.log({ items });
  console.log(dummy);
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className='m-2 p-2 border-b-2 border-gray-200 text-left'
        >
            <img src={CLOUDINARY_BASE_URL + item.card.info.imageId} className='w-11' />
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
