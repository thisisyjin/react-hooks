import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

const App = () => {
  const { loading, data, error, refetch } = useAxios({
    url: 'https://yts.mx/api/v2/list_movies.json',
  });
  console.log(loading, data, error);

  return (
    <div>
      <h1>{data && data.status}</h1>
      <h2>{loading && 'loading ...'}</h2>
      <button onClick={refetch}>Refetch</button>
    </div>
  );
};

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
