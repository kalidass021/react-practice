import {useRouteError} from 'react-router';

const Error = () => {
    const err = useRouteError();
    console.log(err);
  return <div>
    <h1>Oops!!</h1>
    <h2>Something went wrong</h2>
    <p>{err?.status} - {err?.statusText}</p>
    <p>{err?.data}</p>

  </div>;
};

export default Error;