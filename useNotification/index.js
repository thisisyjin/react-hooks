import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

const App = () => {
  const triggerNotif = useNotification('this is notification!', {
    body: 'I love React Hooks.',
  });
  return (
    <div>
      <button onClick={triggerNotif}>Notification</button>
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
