import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

const App = () => {
  const { y } = useScroll();

  return (
    <div style={{ height: '1000vh' }}>
      <h1 style={{ position: 'fixed', color: y > 100 ? 'red' : 'blue' }}>hi</h1>
      <p></p>
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
