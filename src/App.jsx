import { lazy, Suspense, useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import Header from './components/Header';
import Body from './components/Body';
import About from './components/About';
import Contact from './components/Contact';
import Cart from './components/Cart';
import RestaurantMenu from './components/RestaurantMenu';
// import Grocery from './components/Grocery';

const LazyGrocery = lazy(() => import('./components/Grocery'));
// error page
import Error from './components/Error';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router';
import UserContext from './utils/UserContext';
import appStore from './redux/appStore';

const App = () => {
  const [userName, setUserName] = useState();

  // authentication
  useEffect(() => {
    // make an api call sent username and password and get data
    const data = {
      username: 'Kalidass',
    };
    setUserName(data.username);
  }, []);
  return (
    <div className='app'>
    <Provider store={appStore}>
    <UserContext.Provider value={{loggedInUser: userName, setUserName}}>
        <Header />
        <Outlet />
      </UserContext.Provider>
    </Provider>
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Body />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/restaurants/:resId',
        element: <RestaurantMenu />,
      },
      {
        path: '/cart',
        element: <Cart />,
      },
      {
        path: '/grocery',
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <LazyGrocery />
          </Suspense>
        ),
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={appRouter}>
    <App />
  </RouterProvider>
);
