import { useEffect, useState } from 'react';
import { MENU_API } from '../utils/constants';

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState();
  // fetch data
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await fetch(MENU_API + resId);
      const data = await res.json();
      setResInfo(data);
    } catch (err) {
      console.error(`Error while fetching the restaurant menu ${err.message}`);
      throw new Error(err.message);
    }
  };
  return resInfo;
};

export default useRestaurantMenu;
