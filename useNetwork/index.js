import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

const App = () => {
  const handleNetworkChange = (online) => {
    console.log(online ? 'online status' : 'offline status');
  };

  const onLine = useNetwork(handleNetworkChange);

  return (
    <div>
      <h1>{onLine ? 'Online!' : 'Offline'}</h1>
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
