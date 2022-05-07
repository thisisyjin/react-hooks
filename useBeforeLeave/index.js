import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

const App = () => {
  const begForLife = () => console.log('plz dont leave');
  useBeforeLeave(begForLife);

  return (
    <div>
      <h1>hello</h1>
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
